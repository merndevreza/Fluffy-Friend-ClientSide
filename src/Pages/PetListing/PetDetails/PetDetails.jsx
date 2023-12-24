import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import PageBanner from "../../../Components/PageBanner";
import Swal from "sweetalert2";

const PetDetails = () => {
  const { user } = useContext(AuthContext); 
  const params = useParams();
  const [petDetails, setPetDetails] = useState({});
  const {name, age, location, details, image } = petDetails;
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic
      .get(`/pet/details/${params.id}`)
      .then((res) => setPetDetails(res.data));
  }, [axiosPublic, params.id]);

  const handleAdopt = (e) => {
    const form = new FormData(e.currentTarget); 
    const phone = form.get("phone");
    const address = form.get("address");
    const adoptInfo={
      name:user.displayName,
      email:user.email,
      phone,
      address,
      petDetails,
      "status":"pending"
    }
    axiosPublic.post("/adoption-requests",adoptInfo)
    .then((res)=>{
      if (res.data.insertedId) {
         Swal.fire({
            title: "Congrats!!",
            text: `You successfully Requested for adoption`,
            icon: "success",
            confirmButtonText: "OK",
          });
      } 
    })
    
  };
  return (
    <div>
      <PageBanner
        pageTitle={"Open Your Heart and Home: Adopt a Pet Today"}
        pageSubtitle={name}
      ></PageBanner>
      <div className="shape-bg bg-fixed relative py-5 md:py-16 lg:py-28 px-2">
        <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0"></div>
        <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-8">
          <div className="col-span-2 mb-6 lg:mb-0 dark:bg-theme-dark-top dark:text-white text-theme-dark bg-white p-6 lg:p-12">
            <h2 className="text-3xl font-semibold  mb-5">About This Pet</h2>
            <p className="text-lg">
              {details} {details} {details} {details}
            </p>
            <p className="text-lg mt-5">
              {details} {details} {details} {details}
            </p>
            <div>
              <img className="mx-auto my-8 h-[600px]" src={image} alt="" />
            </div>
            <h2 className="text-2xl font-semibold ">Short Bio of {name}</h2>
            <p className="text-lg mt-3">{details} </p>
          </div>
          <div className="bg-white dark:bg-theme-dark-top p-12">
            <h2 className="text-3xl text-theme-yellow font-semibold mb-5">
              Age: {age} Months
            </h2>
            <h2 className="text-2xl  font-semibold dark:text-white text-theme-dark mb-5">
              Address: {location}
            </h2>
            <h2 className="text-2xl font-semibold dark:text-white text-theme-dark  pb-3 border-b-2 border-[#feab0c6c] mt-20">
              Details info
            </h2>
            <div className="grid grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 my-5">
              <div>
                <h4 className="text-lg font-semibold text-theme-dark dark:text-white">
                  Gender
                </h4>
                <p className="text-theme-yellow font-semibold">Male</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-theme-dark dark:text-white">
                  Age
                </h4>
                <p className="text-theme-yellow font-semibold">2 Years</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-theme-dark dark:text-white">
                  Color
                </h4>
                <p className="text-theme-yellow font-semibold">White</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-theme-dark dark:text-white">
                  Pet ID
                </h4>
                <p className="text-theme-yellow font-semibold">75383</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-theme-dark dark:text-white">
                  Size
                </h4>
                <p className="text-theme-yellow font-semibold">20-30 lbs</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-theme-dark dark:text-white">
                  Vaccinated
                </h4>
                <p className="text-theme-yellow font-semibold">Yes</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-theme-dark dark:text-white">
                  Location
                </h4>
                <p className="text-theme-yellow font-semibold">Dhaka</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-theme-dark dark:text-white">
                  Breed
                </h4>
                <p className="text-theme-yellow font-semibold">Husky</p>
              </div>
            </div>
            <div className="mt-20"> 
              <button
                className="btn rounded-full  border-none bg-theme-yellow hover:bg-theme-black hover:text-white cursor-pointer text-theme-dark text-xl px-8"
                onClick={() =>
                  document.getElementById("donation_modal").showModal()
                }
              >
                Adopt Now
              </button>
              <dialog
                id="donation_modal"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box bg-white text-theme-black text-center">
                  <h3 className="font-bold text-2xl text-theme-yellow">
                    Welcome {user ? user.displayName : ""} !
                  </h3>
                  <p className="py-2 text-lg font-semibold">
                    You can adopt this pet!
                  </p>
                  <div className="mt-7">
                    <form
                      onSubmit={handleAdopt}
                      className="flex justify-center"
                      method="dialog"
                    >
                      <div className="text-end space-y-3">
                        <input
                          className="w-full rounded-full  pl-4 py-2 bg-[#f1cd8b6c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
                          type="text"
                          placeholder="Name"
                          name="name"
                          defaultValue={user ? user.displayName : ""}
                          disabled
                        />
                        <input
                          className="w-full rounded-full  pl-4 py-2 bg-[#f1cd8b6c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
                          type="email"
                          name="email"
                          placeholder="Email"
                          defaultValue={user ? user.email : ""}
                          disabled
                        />
                        <input
                          className="w-full rounded-full  pl-4 py-2 bg-[#feab0c6c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
                          type="number"
                          name="phone"
                          placeholder="Phone"
                          required
                        />
                        <input
                          className="w-full rounded-full  pl-4 py-2 bg-[#feab0c6c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
                          type="text"
                          name="address"
                          placeholder="Your Address"
                          required
                        />
                        <input
                          className="w-full rounded-full  border-none bg-theme-yellow hover:bg-theme-black hover:text-white cursor-pointer text-theme-dark font-semibold text-lg px-8 py-1"
                          type="submit"
                          value="Request to Adopt"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </dialog> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
