import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedPets = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [displayPets, setDisplayPets] = useState([]);
  const [myPets, setMyPets] = useState([]);
  useEffect(() => {
    axiosSecure
      .get(`/my-added-pets/${user.email}`)
      .then((res) => {
        setMyPets(res.data);
        setDisplayPets(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [axiosSecure, user.email]);
  //======================================
  //   handler Table
  //=======================================
  const handleDeletePet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/delete-pet/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              const availablePets = myPets.filter((item) => item._id !== id);
              setDisplayPets(availablePets);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
              title: "Error!",
              text: `${errorMessage}`,
              icon: "error",
              confirmButtonText: "OK",
            });
          });
      }
    });
  };
  const handleAdopted=(id)=>{
   const updateStatus={
      adopted: true
   }
   axiosSecure.patch(`/set-adopted/${id}`,updateStatus)
   .then(res=>{
      if (res.data.modifiedCount>0) {
         Swal.fire({
            title: "Congrats!!",
            text: `You successfully Logged in`,
            icon: "success",
            confirmButtonText: "OK",
          });
          axiosSecure
          .get(`/my-added-pets/${user.email}`)
          .then((res) => {
            setMyPets(res.data);
            setDisplayPets(res.data);
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
      console.log(res.data);
   })
  }
  return (
    <div className="shape-bg bg-fixed relative py-16 md:py-24 lg:py-28 w-full">
      <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0 z-0"></div>

      <div className="overflow-x-auto max-w-7xl mx-auto dark:bg-theme-black relative z-10 bg-white px-6 md:px-12 py-10 md:py-16">
        <table className="table">
          {/* head */}
          <thead className="text-xl text-theme-yellow font-nunito">
            <tr>
              <th>Serial Number</th>
              <th>Image</th>
              <th>Name</th>
              <th>Age</th>
              <th>Category</th>
              <th>Adoption Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-lg text-theme-black dark:text-white">
            {displayPets.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <img className="w-[200px]" src={item.image} alt="" />
                </td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.category}</td>
                <td>{item.adopted === true ? "Adopted" : "Not Adopted"}</td>
                <td>
                  <div className="flex flex-col gap-2">
                    <Link to={`/dashboard/update-pet/${item._id}`}>
                      <button className="btn rounded-full w-full  border-none bg-theme-yellow hover:bg-theme-black hover:text-theme-yellow cursor-pointer text-theme-dark px-2 ">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeletePet(item._id)}
                      className="btn rounded-full  border-none bg-theme-yellow hover:bg-theme-black hover:text-theme-yellow cursor-pointer text-theme-dark px-2 "
                    >
                      Delete
                    </button>
                    <button onClick={()=>handleAdopted(item._id)} className="btn rounded-full  border-none bg-theme-yellow hover:bg-theme-black hover:text-theme-yellow cursor-pointer text-theme-dark px-2 ">
                      Adopted
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

export default MyAddedPets;
