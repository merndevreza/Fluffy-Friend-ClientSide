import { useFormik } from "formik";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2"; 
import { ValidationForDonation } from "../../../Pages/ValidationForDonation";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMGBBKEY
}`;
//======================
//component start here
//======================
const EditDonationCampaign = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const params = useParams();
  const [donationData, setDonationData] = useState({});
  useEffect(() => {
    axiosSecure
      .get(`/donation/details/${params.id}`)
      .then((res) => setDonationData(res.data));
  }, [axiosSecure, params.id]);
  const {_id, petName, image, maxDonationAmount, donationLastDate, details,shortDescription } =
  donationData;
  const initialValues = {
    petName: petName,
    maxDonation: maxDonationAmount,
    donationLastDate: donationLastDate,
    shortDescription: shortDescription,
    fullDescription: details,
    petImage: image,
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: ValidationForDonation,
    onSubmit: async (values, action) => {
      // Upload the image to the hosting API
      const formData = new FormData();
      formData.append("image", values.petImage);
      formData.append("timestamp", new Date().toISOString());
      try {
        const response = await axiosPublic.post(imageHostingAPI, formData);
        const imageUrl = response.data.data.url;

        const editDonationDoc = {
          petName: values.petName,
          maxDonationAmount: values.maxDonation,
          totalDonationAmount:20,
          donationLastDate: values.donationLastDate,
          image: imageUrl,
          shortDescription: values.shortDescription,
          details: values.fullDescription,
          uploadTime: formData.get("timestamp"), 
        };
        axiosSecure
          .patch(`/edit-donation-campaign/${_id}`, editDonationDoc)
          .then((res) => {
            if (res.data.modifiedCount>0) {
              Swal.fire({
                title: "Congrats!!",
                text: `You successfully Edited the Donation Campaign`,
                icon: "success",
                confirmButtonText: "OK",
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
      } catch (error) {
        console.error("Error in the edit donation campaign:", error);
      }
      // Reset the form
      action.resetForm();
    },
  });

  return (
    <div className="shape-bg bg-fixed relative py-16 md:py-24 lg:py-28 w-full">
      <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0 z-0"></div>
      <div className="dark:bg-theme-black relative z-10 bg-white  max-w-3xl mx-auto px-6 md:px-12 py-10 md:py-16">
        <h2 className="text-4xl dark:text-white  text-theme-black mb-9 font-semibold">
          Edit Donation Campaign
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-theme-black gap-3"
        >
          <input
            className="w-full rounded-full  pl-4 py-2 bg-[#feab0c4c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
            type="text"
            name="petName"
            placeholder="Pet name"
            value={values.petName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
          <input
            className="w-full rounded-full  pl-4 py-2 bg-[#feab0c4c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
            type="number"
            name="maxDonation"
            placeholder="Maximum donation amount"
            value={values.maxDonation}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.maxDonation && touched.maxDonation ? (
            <p className="form-error">{errors.maxDonation}</p>
          ) : null}

          <div className="grid grid-cols-2 justify-between gap-4">
            <div>
              <label
                className=" pl-2 font-medium dark:text-white"
                htmlFor="date"
              >
                Donation Last Date:
              </label>
              <input
                className="w-full rounded-full  pl-4 py-2 bg-[#feab0c4c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
                type="date"
                name="donationLastDate"
                id="date"
                value={values.donationLastDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.donationLastDate && touched.donationLastDate ? (
                <p className="form-error">{errors.donationLastDate}</p>
              ) : null}
            </div>
            <div>
              <label
                className=" pl-2  font-medium dark:text-white"
                htmlFor="petImg"
              >
                Upload Photo:
              </label>
              <input
                className="pl-2 dark:text-white"
                id="petImg"
                type="file"
                name="petImage"
                onChange={(event) =>
                  setFieldValue("petImage", event.currentTarget.files[0])
                }
              />
            </div>
          </div>

          <input
            className="w-full rounded-full  pl-4 py-2 bg-[#feab0c4c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
            type="text"
            name="shortDescription"
            placeholder="Short description"
            value={values.shortDescription}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.shortDescription && touched.shortDescription ? (
            <p className="form-error">{errors.shortDescription}</p>
          ) : null}

          <textarea
            className=" pl-4 py-2 bg-[#feab0c4c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none rounded-2xl"
            name="fullDescription"
            placeholder="Full description"
            cols="30"
            rows="10"
            value={values.fullDescription}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.fullDescription && touched.fullDescription ? (
            <p className="form-error">{errors.fullDescription}</p>
          ) : null}
          <div className="mt-3">
            <input
              className="btn rounded-full  border-none bg-theme-black dark:bg-white dark:text-theme-black dark:hover:bg-theme-yellow hover:bg-theme-yellow hover:text-theme-black  text-white text-xl px-8"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDonationCampaign;
