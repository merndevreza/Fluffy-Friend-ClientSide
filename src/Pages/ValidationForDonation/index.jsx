import * as Yup from "yup";

export const ValidationForDonation = Yup.object({
   petName: Yup.string().min(2).max(25).required("Please enter pets name"),
   maxDonation: Yup.number().required("Set the highest total amount of donation users can make"),
   donationLastDate: Yup.date().required("Please select  the last date when the donation will be closed and people can no longer make donations"),
  shortDescription: Yup.string().min(10).max(250).required("Please write a short description about the donation campaign"),
  fullDescription: Yup.string().min(10).max(500).required("Please write in details about the donation campaign"), 
  
});
