
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const SignupSchema = Yup.object().shape({
  petName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  petAge: Yup.number().required("Required"),
  petLocation: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  shortDescription: Yup.string()
    .min(10, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),
  fullDescription: Yup.string()
    .min(10, "Too Short!")
    .max(300, "Too Long!")
    .required("Required"),
  category: Yup.string().required("Required"),
  petImage: Yup.string().required("Required"),
});
const options = [
  { value: "cats", label: "Cat" },
  { value: "dogs", label: "Dog" },
  { value: "rabbits", label: "Rabbit" },
  { value: "fishes", label: "Fish" },
  { value: "birds", label: "Bird" },
];
export const ValidationSchemaExample = () => (
  
  <div> 
 
 <Formik
          initialValues={{
            petName: "",
            petAge: "",
            petLocation: "",
            shortDescription: "",
            fullDescription: "",
            category: "",
            petImage: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                className="w-full rounded-full  pl-4 py-2 bg-[#feab0c4c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none" 
                name="petName"
                placeholder="Pet name"
              />
              {errors.petName && touched.petName ? (
                <div>{errors.petName}</div>
              ) : null}
              <Field
                className="w-full rounded-full  pl-4 py-2 bg-[#feab0c4c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
                 
                name="petAge"
                placeholder="Pet Age (Months)"
              />
              {errors.petAge && touched.petAge ? (
                <div>{errors.petAge}</div>
              ) : null}
              <Select
                name="category"
                options={options}
                placeholder={"Select Category"}
              />
              <Field
                className="w-full rounded-full  pl-4 py-2 bg-[#feab0c4c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
                 
                name="petLocation"
                placeholder="Pet location"
              />
              {errors.petLocation && touched.petLocation ? (
                <div>{errors.petLocation}</div>
              ) : null}

              <Field
                className="w-full rounded-full  pl-4 py-2 bg-[#feab0c4c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
                 
                name="shortDescription"
                placeholder="Short description"
              />
              {errors.shortDescription && touched.shortDescription ? (
                <div>{errors.shortDescription}</div>
              ) : null}
              <Field type="file" name="petImage" />
              <textarea
                className=" pl-4 py-2 bg-[#feab0c4c] dark:placeholder:text-[#fff] placeholder:text-theme-black dark:text-white text-theme-black  border-none"
                name="fullDescription"
                cols="30"
                rows="10"
              ></textarea>

              <button
                className="btn rounded-full  border-none bg-theme-black dark:bg-white dark:text-theme-black dark:hover:bg-theme-yellow hover:bg-theme-yellow hover:text-theme-black  text-white text-xl px-8"
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
  </div>
);