import briefcaseIcon from "assets/icons/briefcase.svg";
import arrowDownIcon from "assets/icons/arrowdown-light.svg";
import dashboardIcon from "assets/icons/home.svg";
import usersIcon from "assets/icons/users-icon-light.svg";
import guarantorsIcon from "assets/icons/guarantors.svg";
import sackIcon from "assets/icons/sack.svg";
import handshakeIcon from "assets/icons/handshake.svg";
import piggyBankIcon from "assets/icons/piggy-bank.svg";
import loanIcon from "assets/icons/loan.svg";
import userCheckIcon from "assets/icons/user-check.svg";
import userTimesIcon from "assets/icons/user-times.svg";
import bankIcon from "assets/icons/bank.svg";
import coinsIcon from "assets/icons/coins.svg";
import transactionsIcon from "assets/icons/transactions.svg";
import servicesIcon from "assets/icons/services.svg";
import slidersIcon from "assets/icons/sliders.svg";
import badgePercentIcon from "assets/icons/badge-percent.svg";
import clipBoardIcon from "assets/icons/clipboard.svg";
import logoutIcon from "assets/icons/sign-out.svg";
import tireIcon from "assets/icons/tire.svg";
import openedLogo from "assets/icons/opened.png";
import Icon from "components/Icon";
import { toggleMenu } from "utils";

type Props = {
  openDashBoard: boolean;
  setOpenDashBoard: (openDashBoard: boolean) => void;
};

const SideBar = ({ openDashBoard, setOpenDashBoard }: Props) => {
  return (
    <div className="sidebar h-full lg:flex flex-col items-start justify-start lg:w-[280px]  inset-0 overflow-y-scroll fixed lg:pt-[139px] pt-[60px] z-20 pb-12">
      <button
        className="flex items-center hamburger w-full justify-end pr-6 lg:hidden"
        onClick={() => toggleMenu(setOpenDashBoard, openDashBoard)}
      >
        <Icon icon={openedLogo} classes={`w-[18px]`} />
      </button>
      <li className="flex items-center justify-start text-primary mb-[32px] font-normal text-primary">
        <Icon icon={briefcaseIcon} />
        <span className="px-2.5">Switch Organization</span>
        <Icon icon={arrowDownIcon} />
      </li>

      <li className="flex items-center justify-start   hover-text-primary font-normal mb-[30px]">
        <Icon icon={dashboardIcon} />
        <span className="px-2.5">Dashboard</span>
      </li>

      <div className="customers__list w-full">
        <h6 className="pl-[30px] text-secondary text-xs">CUSTOMERS</h6>
        <ul className="customers__list-container w-full">
          <li className="active-tab">
            <Icon icon={usersIcon} /> Users
          </li>
          <li>
            <Icon icon={guarantorsIcon} /> Guarantors
          </li>
          <li>
            <Icon icon={sackIcon} /> Loans
          </li>
          <li>
            <Icon icon={handshakeIcon} /> Decision Models
          </li>
          <li>
            <Icon icon={piggyBankIcon} /> Savings
          </li>
          <li>
            <Icon icon={loanIcon} /> Loan Requests
          </li>
          <li>
            <Icon icon={userCheckIcon} /> Whitelist
          </li>
          <li>
            <Icon icon={userTimesIcon} /> Karma
          </li>
        </ul>
      </div>

      <div className="customers__list w-full pt-10">
        <h6 className="pl-[30px] text-secondary text-xs">BUSINESSES</h6>
        <ul className="customers__list-container w-full">
          <li>
            <Icon icon={briefcaseIcon} />
            Organization
          </li>
          <li>
            <Icon icon={loanIcon} /> Loan Products
          </li>
          <li>
            <Icon icon={sackIcon} /> Loans
          </li>
          <li>
            <Icon icon={bankIcon} /> Savings Products
          </li>
          <li>
            <Icon icon={coinsIcon} />
            Fees and Charges
          </li>
          <li>
            <Icon icon={transactionsIcon} /> Transactions
          </li>
          <li>
            <Icon icon={servicesIcon} /> Services
          </li>
          <li>
            <Icon icon={userTimesIcon} /> Karma
          </li>
        </ul>
      </div>

      <div className="customers__list w-full pt-10">
        <h6 className="pl-[30px] text-secondary text-xs">SWTTINGS</h6>
        <ul className="customers__list-container w-full">
          <li>
            <Icon icon={slidersIcon} />
            Preferences
          </li>
          <li>
            <Icon icon={badgePercentIcon} /> Fees and Pricing
          </li>
          <li>
            <Icon icon={clipBoardIcon} /> Audit Logs
          </li>
          <li>
            <Icon icon={tireIcon} /> System Messages
          </li>
        </ul>
        <div className="mt-[50px]">
          <hr className="divider" />
          <li>
            <Icon icon={logoutIcon} /> Logout
          </li>
          <li className="mt-5">v1.2.0</li>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
