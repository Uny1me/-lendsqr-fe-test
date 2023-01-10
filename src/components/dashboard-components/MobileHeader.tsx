import Input from "components/Input";
import openedLogo from "assets/icons/opened.png";
import logo from "assets/images/logo.svg";
import closedLogo from "assets/icons/closed.svg";
import searchIcon from "assets/icons/search.svg";
import avatar from "assets/icons/avatar.svg";
import arrowDownIcon from "assets/icons/arrowdown.svg";
import bellIcon from "assets/icons/bell.svg";
import Icon from "components/Icon";
import dashboardIcon from "assets/icons/speedometer.png";
import { slide as Menu } from "react-burger-menu";
import { toggleMenu } from "utils";
type Props = {
  openMenu: boolean;
  openDashBoard: boolean;
  setOpenMenu: (openMenu: boolean) => void;
  setOpenDashBoard: (openDashBoard: boolean) => void;
};
const MobileHeader = ({
  openMenu,
  setOpenMenu,
  setOpenDashBoard,
  openDashBoard,
}: Props) => {
  return (
    <div className="block lg:hidden bg-white fixed z-10 w-full top-0 ">
      <div className="user-menu-class">
        <div className="header flex items-center justify-between bg-white p-[20px]">
          <button onClick={() => toggleMenu(setOpenDashBoard, openDashBoard)}>
            <Icon icon={dashboardIcon} classes={`w-[24px] mr-8`} />
          </button>
          <a className="header__logo w-full" href="/">
            <img src={logo} className="w-[100px]" alt="" />
          </a>
          {/* Mobile Menu Toggler */}

          <Icon icon={bellIcon} classes={`mr-6`} />
          <button
            className=" flex items-center hamburger"
            onClick={() => toggleMenu(setOpenMenu, openMenu)}
          >
            <Icon
              icon={openMenu ? openedLogo : closedLogo}
              classes={`w-[42px]`}
            />

            {/* <img src={openMenu ? openedLogo : closedLogo} alt="" /> */}
          </button>
        </div>
        <Menu pageWrapId="user-menu-id" isOpen={openMenu} right>
          <div
            className="dropdown_items bg-white h-full px-5 "
            id="user-menu-id"
          >
            {/* SearchBar */}
            <div className="dropdown_items-searchbar w-full order-2 pt-8">
              <Input
                inputType="text"
                placeholder="Search for anything"
                addon={searchIcon}
                addonType="icon"
                customClass="w-[56px] h-[40px] flex items-center justify-center cta-button-0px "
              />
            </div>
            {/* Avatar Container */}
            <div className="flex flex-col items-start justify-start  py-4">
              <p className="text-[#213F7D] text-base underline underline-offset-2 font-normal order-0">
                Docs
              </p>

              <div className="avatar_user order-0 flex items-center justify-start my-4">
                <Icon icon={avatar} />
                <p className="text-[#213F7D] text-base mr-2.5 font-medium">
                  Adedeji
                </p>
                <Icon icon={arrowDownIcon} />
              </div>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default MobileHeader;
