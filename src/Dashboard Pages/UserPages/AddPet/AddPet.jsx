import Select from "react-select";
import { useFormik } from "formik";
import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

import { validationSchema } from "../../../ValidationSchema";

const initialValues = {
  petName: "",
  petAge: "",
  petLocation: "",
  shortDescription: "",
  fullDescription: "",
  category: "",
  petImage: null,
};
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMGBBKEY
}`;

const AddPet = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [selectedOption, setSelectedOption] = useState(null);
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
    validationSchema: validationSchema,
    onSubmit: async (values, action) => {
      // Upload the image to the hosting API
      const formData = new FormData();
      formData.append("image", values.petImage);
      formData.append("timestamp", new Date().toISOString());
      try {
        const response = await axiosPublic.post(imageHostingAPI, formData);
        const imageUrl = response.data.data.url;

        const addPetDoc = {
          name: values.petName,
          age: values.petAge,
          location: values.petLocation,
          image: imageUrl,
          category: selectedOption.value,
          shortDescription:values.shortDescription,
          details:values.fullDescription,
          uploadTime: formData.get("timestamp"),
          adopted:false
        };
        axiosSecure
          .post("/add-pet", addPetDoc)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => console.log(error));
        // Now you can use imageUrl as needed
        console.log("Image URL:", imageUrl);
      } catch (error) {
        console.error("Image upload failed:", error);
      }
      // Reset the form
      action.resetForm();
    },
  });
  const options = [
    { value: "cats", label: "Cat" },
    { value: "dogs", label: "Dog" },
    { value: "rabbits", label: "Rabbit" },
    { value: "fishes", label: "Fish" },
    { value: "birds", label: "Bird" },
  ];
  return (
    <div className="shape-bg bg-fixed relative py-16 md:py-24 lg:py-28 w-full">
      <div className="absolute left-0 top-0 w-full h-full bg-theme-black dark:opacity-90 opacity-0 z-0"></div>
      <div className="dark:bg-theme-black relative z-10 bg-white  max-w-3xl mx-auto px-6 md:px-12 py-10 md:py-16">
        <h2 className="text-4xl dark:text-white  text-theme-black mb-9 font-semibold">
          Add A Pet
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
            name="petAge"
            placeholder="Pet Age (Months)"
            value={values.petAge}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.petAge && touched.petAge ? (
            <p className="form-error">{errors.petAge}</p>
          ) : null}

          <Select
            name="category"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder={"Select Category"}
          />

          <input
            className="w-full rounded-full  pl-4 py-2 bg-[#feab0c4c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
            type="text"
            name="petLocation"
            placeholder="Pet location"
            value={values.petLocation}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.petLocation && touched.petLocation ? (
            <p className="form-error">{errors.petLocation}</p>
          ) : null}
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
          <input
            type="file"
            name="petImage"
            onChange={(event) =>
              setFieldValue("petImage", event.currentTarget.files[0])
            }
          />

          <textarea
            className=" pl-4 py-2 bg-[#feab0c4c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
            name="fullDescription"
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

export default AddPet;
