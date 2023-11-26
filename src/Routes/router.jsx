import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PetListing from "../Pages/PetListing/PetListing";
import DonationCampaigns from "../Pages/DonationCampaigns/DonationCampaigns";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
   {
     path: "/",
     element: <Root></Root>,
     errorElement:<ErrorPage></ErrorPage>,
     children:[
      {
         path:"/",
         element:<Home></Home>
      },
      {
         path:"/pet-listing",
         element:<PetListing></PetListing>
      },
      {
         path:"/donation-campaigns",
         element:<DonationCampaigns></DonationCampaigns>
      },
      {
         path:"/login",
         element:<Login></Login>
      },
      {
         path:"/register",
         element:<Register></Register>
      },
     ]
   },
   {
      path:"/dashboard",
      element:<Dashboard></Dashboard>
   }
 ]);

export default router;