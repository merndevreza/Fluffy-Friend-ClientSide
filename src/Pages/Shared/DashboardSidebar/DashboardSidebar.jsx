import { NavLink } from "react-router-dom";

const DashboardSidebar = () => {
  return (
    <div className="md:min-h-screen absolute lg:static left-2 z-30">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center"> 
          <label
            htmlFor="my-drawer-2"
            className="btn mt-2 bg-theme-yellow text-theme-dark drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="dark:text-theme-yellow text-theme-black text-lg px-4 py-8 font-medium space-y-5 menu  w-80 min-h-full dark:bg-[#29241a] bg-[#fdf2c2]">
            <li>
              <NavLink to="/dashboard">Add a pet</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-added-pets">My added pets</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/adoption-request">
                Adoption Request
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/create-donation-campaign">
                Create Donation Campaign
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-donation-campaigns">
                My Donation Campaigns
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-donations">My Donations</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
