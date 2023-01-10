import React from "react";
import SideBar from "./SideBar";
import { push as Menu } from "react-burger-menu";

type Props = {
  openDashBoard: boolean;
  setOpenDashBoard: (openDashBoard: boolean) => void;
};

const MobileSideBar = ({ openDashBoard, setOpenDashBoard }: Props) => {
  return (
    <Menu
      isOpen={openDashBoard}
      className="dashboard-menu-class"
      width={"100%"}
    >
      <div className="">
        <SideBar
          openDashBoard={openDashBoard}
          setOpenDashBoard={setOpenDashBoard}
        />
      </div>
    </Menu>
  );
};

export default MobileSideBar;
