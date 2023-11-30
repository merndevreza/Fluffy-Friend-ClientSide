import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PetListing from "../Pages/PetListing/PetListing";
import DonationCampaigns from "../Pages/DonationCampaigns/DonationCampaigns";
import Dashboard from "../Layout/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationDetails from "../Pages/DonationCampaigns/DonationDetails/DonationDetails";
import PetDetails from "../Pages/PetListing/PetDetails/PetDetails";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import PrivateRoutes from "./PrivateRoutes";
import AddPet from "../Dashboard Pages/UserPages/AddPet/AddPet";
import MyAddedPets from "../Dashboard Pages/UserPages/MyAddedPets/MyAddedPets";
import AdoptionRequests from "../Dashboard Pages/UserPages/AdoptionRequests/AdoptionRequests";
import CreateDonationCampaign from "../Dashboard Pages/UserPages/CreateDonationCampaign/CreateDonationCampaign";
import MyDonationCampaigns from "../Dashboard Pages/UserPages/MyDonationCampaigns/MyDonationCampaigns";
import MyDonations from "../Dashboard Pages/UserPages/MyDonations/MyDonations";
import AllDonations from "../Dashboard Pages/AdminPages/AllDonations/AllDonations";
import AllPets from "../Dashboard Pages/AdminPages/AllPets/AllPets";
import Users from "../Dashboard Pages/AdminPages/Users/Users";
import { ValidationSchemaExample } from "../Dashboard Pages/UserPages/AddPet/ValidationSchemaExample";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/pet-listing",
        element: <PetListing></PetListing>,
      },
      {
        path: "/pet/details/:id",
        element: (
          <PrivateRoutes>
            <PetDetails></PetDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/pet/category/:id",
        element: <CategoryPage></CategoryPage>,
      },
      {
        path: "/donation-campaigns",
        element: <DonationCampaigns></DonationCampaigns>,
      },
      {
        path: "/donation/details/:id",
        element: (
          <PrivateRoutes>
            <DonationDetails></DonationDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/formik",
        element: <ValidationSchemaExample></ValidationSchemaExample>
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes> 
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <AddPet></AddPet>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/my-added-pets",
        element: (
          <PrivateRoutes>
            <MyAddedPets></MyAddedPets>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/adoption-request",
        element: (
          <PrivateRoutes>
            <AdoptionRequests></AdoptionRequests>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/create-donation-campaign",
        element: (
          <PrivateRoutes>
            <CreateDonationCampaign></CreateDonationCampaign>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/my-donation-campaigns",
        element: (
          <PrivateRoutes>
            <MyDonationCampaigns></MyDonationCampaigns>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/my-donations",
        element: (
          <PrivateRoutes>
            <MyDonations></MyDonations>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/all-donations",
        element: (
          <PrivateRoutes>
            <AllDonations></AllDonations>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/all-pets",
        element: (
          <PrivateRoutes>
            <AllPets></AllPets>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <PrivateRoutes>
            <Users></Users>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
