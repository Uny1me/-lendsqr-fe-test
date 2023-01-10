import Input from "components/Input";
import logo from "assets/images/logo.svg";
// import openedLogo from "assets/icons/opened.svg";
// import closedLogo from "assets/icons/closed.svg";
import searchIcon from "assets/icons/search.svg";
import avatar from "assets/icons/avatar.svg";
import arrowDownIcon from "assets/icons/arrowdown.svg";
import bellIcon from "assets/icons/bell.svg";
import Icon from "components/Icon";

const Header = () => {
  return (
    <div className="fixed header lg:flex hidden items-center justify-between bg-white p-[30px]  w-full z-40 max-h-[100px]">
      <a className="header__logo w-full lg:w-[283px]" href="/">
        <img src={logo} className="w-[100px] lg:w-[115.37px]" alt="" />
      </a>

      {/* <MobileHeader /> */}

      <div className="dropdown_items items-center justify-between  py-0 grow lg:px-[60px] flex">
        {/* SearchBar */}
        <div className="dropdown_items-searchbar w-[400px] hidden lg:flex">
          <Input
            inputType="text"
            placeholder="Search for anything"
            addon={searchIcon}
            addonType="icon"
            customClass="w-[56px] h-[40px] flex items-center justify-center cta-button-0px "
          />
        </div>
        {/* Avatar Container */}
        <div className="flex items-center">
          <p className="text-[#213F7D] text-base underline underline-offset-2 font-normal lg:mr-[47px]">
            Docs
          </p>
          <Icon icon={bellIcon} classes={`lg:mr-[30px]`} />
          <Icon icon={avatar} classes={`lg:mr-2.5`} />
          <p className="text-[#213F7D] text-base mr-2.5 font-medium">Adedeji</p>
          <Icon icon={arrowDownIcon} classes={`lg:mr-2.5`} />
        </div>
      </div>
    </div>
  );
};

export default Header;
