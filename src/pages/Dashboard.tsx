import Header from "components/dashboard-components/Header";
import MobileHeader from "components/dashboard-components/MobileHeader";
import MobileSideBar from "components/dashboard-components/MobileSideBar";
import SideBar from "components/dashboard-components/SideBar";
import User from "components/dashboard-components/User";
import Users from "components/dashboard-components/Users";
import { useEffect, useState } from "react";
import { getAllUserData } from "utils";

const Dashboard = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openDashBoard, setOpenDashBoard] = useState(false);
  const [userData, setUserDataData] = useState([]);
  const [navigateDashBoard, setNavigateDashBoard] = useState<string>("users");

  useEffect(() => {
    getAllUserData(setUserDataData);
  }, []);

  return (
    <div className="dashboard flex flex-col">
      <Header />

      <MobileHeader
        openMenu={openMenu}
        openDashBoard={openDashBoard}
        setOpenMenu={setOpenMenu}
        setOpenDashBoard={setOpenDashBoard}
      />
      <div className="bg-[#fbfbfb] flex relative dashboard-menu-class">
        <div className="hidden lg:block">
          <SideBar
            openDashBoard={openDashBoard}
            setOpenDashBoard={setOpenDashBoard}
          />
        </div>
        <div className="block lg:hidden">
          <MobileSideBar
            openDashBoard={openDashBoard}
            setOpenDashBoard={setOpenDashBoard}
          />
        </div>
        <div className="my-[100px]">
          {navigateDashBoard === "users" ? (
            <Users
              userData={userData}
              setNavigateDashBoard={setNavigateDashBoard}

            />
          ) : (
            <User
              setNavigateDashBoard={setNavigateDashBoard}

            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
