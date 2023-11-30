import { Outlet } from "react-router-dom";
import DashboardSidebar from "../Pages/Shared/DashboardSidebar/DashboardSidebar";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex">
        <DashboardSidebar></DashboardSidebar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
