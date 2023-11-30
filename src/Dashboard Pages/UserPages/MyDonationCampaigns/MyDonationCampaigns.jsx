import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyDonationCampaigns = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext); 
  const [displayDonations, setDisplayDonations] = useState([]);
  
  useEffect(() => {
    axiosSecure
      .get(`/my-donation-campaigns/${user.email}`)
      .then((res) => {
        setDisplayDonations(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [axiosSecure, user.email]);
  const [donationStatus, setDonationStatus] = useState(false);
  const handlePause = (id, status) => {
    if (status) {
      setDonationStatus(false);
    } else {
      setDonationStatus(true);
    }
    const updateStatus = {
      status: donationStatus,
    };
    axiosSecure.put(`/donation-status-toggle/${id}`, updateStatus)
    .then(res=>{
      if (res.data.modifiedCount>0) {
         Swal.fire({
            title: "Congrats!!",
            text: `You successfully changed the campaign Status`,
            icon: "success",
            confirmButtonText: "OK",
          }); 
          axiosSecure
      .get(`/my-donation-campaigns/${user.email}`)
      .then((res) => {
        setDisplayDonations(res.data);
      })
      }
      console.log(res.data);
    })
  };
  return (
    <div className="shape-bg bg-fixed relative py-16 md:py-24 lg:py-28 w-full">
      <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0 z-0"></div>

      <div className="overflow-x-auto max-w-7xl mx-auto dark:bg-theme-black relative z-10 bg-white px-6 md:px-12 py-10 md:py-16">
        <table className="table">
          {/* head */}
          <thead className="text-xl text-theme-yellow font-nunito">
            <tr>
              <th>Serial Number</th>
              <th>Pet Name</th>
              <th>Maximum donation amount</th>
              <th>donation progress</th>
              <th>Donation Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-lg text-theme-black dark:text-white">
            {displayDonations.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.petName}</td>
                <td className="text-center">{item.maxDonationAmount}</td>
                <td>
                  <progress
                    className="progress progress-warning w-56"
                    value={
                      item?.totalDonationAmount ? item.totalDonationAmount : 10
                    }
                    max={item.maxDonationAmount}
                  ></progress>
                </td>
                <td className="text-center">
                  {item.status === false ? "Paused" : "Open"}
                </td>
                <td>
                  <div className="flex flex-col gap-2">
                    <Link to={`/dashboard/edit-donation-campaign/${item._id}`}>
                      <button className="btn rounded-full w-full  border-none bg-theme-yellow hover:bg-theme-black hover:text-theme-yellow cursor-pointer text-theme-dark px-2 ">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handlePause(item._id, item.status)}
                      className="btn rounded-full  border-none bg-theme-yellow hover:bg-theme-black hover:text-theme-yellow cursor-pointer text-theme-dark px-2 "
                    >
                      {item.status === false ? "Unpause" : "pause"}
                    </button>
                    <button className="btn rounded-full  border-none bg-theme-yellow hover:bg-theme-black hover:text-theme-yellow cursor-pointer text-theme-dark px-2 ">
                      Donators
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonationCampaigns;
