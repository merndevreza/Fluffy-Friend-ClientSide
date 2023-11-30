import * as Yup from "yup";

export const validationSchema = Yup.object({
   petName: Yup.string().min(2).max(25).required("Please enter pets name"),
  petAge: Yup.number().required("Please enter pet age"),
  petLocation: Yup.string().min(2).max(50).required("Please enter a location from where the pet can be picked up when someone wants to adopt it"),
  shortDescription: Yup.string().min(10).max(250).required("Please write a short description about the pet"),
  fullDescription: Yup.string().min(10).max(500).required("Please write in details about the pet"), 
});
