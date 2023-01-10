import Icon from "components/Icon";
import leftArrowIcon from "assets/icons/chevron-left.svg";
// import userAvatar from "assets/icons/user-avatar.svg";
import starIcon from "assets/icons/star.svg";
import starStrokeIcon from "assets/icons/star-stroke.svg";
import { UserTab } from "lib";
import { getUserFromLocalStorage } from "utils";
import { useEffect, useState } from "react";
type Props = {
  setNavigateDashBoard: (navigateDashboard: string) => void;
};

const User = ({ setNavigateDashBoard }: Props) => {
  const [oneUser, setOneUser] = useState<any>([]);

  useEffect(() => {
    // I feel a better alternative would be to initialise a state at the dashboard component then pass data as props this perevents any possible down time in loading and need for conditional rendering since the update of the state and fetching from localstorage would be effectively eliminated
    const userData = getUserFromLocalStorage();

    setOneUser(userData);
  }, []);
  const { profile, education, socials, guarantor } = oneUser;

  return (
    <div className="lg:pl-[343px] w-[96vw] pt-[15px] user px-5">
      <div
        className="flex items-center justify-start cursor-pointer"
        onClick={() => {
          setNavigateDashBoard("users");
        }}
      >
        <Icon icon={leftArrowIcon} classes={`mr-[14px]`} />
        <p className="text-secondary text-base">Back to Users</p>
      </div>
      <div className="pt-8 flex lg:flex-row flex-col lg:items-center justify-between">
        <h2 className="text-primary lg:text-2xl text-lg font-medium grow">
          User Details
        </h2>
        <div className="user__button-group flex xs:items-center lg:justify-between flex-col sm:flex-row">
          <button className="blacklist">BLACKLIST USER</button>
          <button className="activate">ACTIVATE USER</button>
        </div>
      </div>
      <div className="mt-10 bg-white user__card-one user__card">
        <div className="flex lg:items-center mb-[50px] flex-col lg:flex-row">
          <div className="user__basic-info flex items-center">
            {/* User Avatar Image */}
            <Icon
              icon={profile?.avatar}
              classes={"rounded-full w-[30%] lg:w-[60%]"}
            />
            <div className="container_avatar">
              <h5 className="lg:text-[22px] text-md text-primary">{`${profile?.firstName} ${profile?.lastName}`}</h5>
              <p className="lg:text-sm text-secondary text-xs">
                {oneUser?.accountNumber}
              </p>
            </div>
          </div>
          <div className="user__tier ">
            <h4 className="text-secondary text-sm">User's Tier</h4>
            <div className="flex">
              <Icon icon={starIcon} />
              <Icon icon={starStrokeIcon} />
              <Icon icon={starStrokeIcon} />
            </div>
          </div>
          <div className="user_bank-details">
            <h4 className="text-[22px] text-primary">₦200,000.00</h4>
            <p className="text-secondary text-base">9912345678/Providus Bank</p>
          </div>
        </div>
        <div
          className="user__tabbed-nav "
          style={{
            overflow: "scroll",
          }}
        >
          {UserTab?.map((tabItem) => {
            return (
              <p key={tabItem}>
                <span></span>
                {tabItem}
              </p>
            );
          })}
        </div>
      </div>
      <div className="my-[30px] bg-white user__card">
        <div className="personal-information">
          <h3 className="text-primary">Personal Information</h3>
          <div className="pt-[30px] flex items flex-wrap ">
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">FULL NAME</h6>
              <h5 className="text-base text-secondary pt-2">{`${profile?.firstName} ${profile?.lastName}`}</h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">PHONE NUMBER</h6>
              <h5 className="text-base text-secondary pt-2">
                {profile?.phoneNumber}
              </h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">EMAIL ADDRESS</h6>
              <h5 className="text-base text-secondary pt-2">
                {oneUser?.email}
              </h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">BVN</h6>
              <h5 className="text-base text-secondary pt-2">{profile?.bvn}</h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">GENDER</h6>
              <h5 className="text-base text-secondary pt-2">
                {profile?.gender}
              </h5>
            </div>
          </div>
          <div className="pt-[30px] flex items flex-wrap  justify-start">
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">MARITAL STATUS</h6>
              <h5 className="text-base text-secondary pt-2">Single</h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">CHILDREN</h6>
              <h5 className="text-base text-secondary pt-2">None</h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">TYPE OF RESIDENCE</h6>
              <h5 className="text-base text-secondary pt-2">
                Parent's Apartment
              </h5>
            </div>
          </div>
        </div>
        <hr className="divider mt-[30px] mb-[28px]" />
        <div className="education-employment">
          <h3 className="text-primary">Education and Employment</h3>
          <div className="pt-[30px] flex items flex-wrap ">
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">LEVEL OF EDUCATION</h6>
              <h5 className="text-base text-secondary pt-2">
                {education?.level}
              </h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">EMPLOYMENT STATUS</h6>
              <h5 className="text-base text-secondary pt-2">
                {education?.employmentStatus}
              </h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">SECTOR OF EMPLOYMENT</h6>
              <h5 className="text-base text-secondary pt-2">
                {education?.sector}
              </h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">DURATION OF EMPLOYMENT</h6>
              <h5 className="text-base text-secondary pt-2">
                {education?.duration}
              </h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">OFFICE EMAIL</h6>
              <h5 className="text-base text-secondary pt-2">
                {education?.officeEmail}
              </h5>
            </div>
          </div>
          <div className="pt-[30px] flex items flex-wrap  justify-start">
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">MONTHLY INCOME</h6>
              <div className="flex">
                {education?.monthlyIncome.map((income: string) => {
                  return (
                    <h5 className="text-base text-secondary pt-2 pr-5">
                      {income}
                    </h5>
                  );
                })}
              </div>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">LOAN PAYMENT</h6>
              <h5 className="text-base text-secondary pt-2">
                {education?.loanRepayment}
              </h5>
            </div>
          </div>
        </div>
        <hr className="divider mt-[30px] mb-[28px]" />
        <div className="socials">
          <h3 className="text-primary">Soicals</h3>
          <div className="pt-[30px] flex items flex-wrap ">
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">TWITTER</h6>
              <h5 className="text-base text-secondary pt-2">
                {socials?.twitter}
              </h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">FACEBOOK</h6>
              <h5 className="text-base text-secondary pt-2">
                {socials?.facebook}
              </h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">INSTAGRAM</h6>
              <h5 className="text-base text-secondary pt-2">
                {socials?.instagram}
              </h5>
            </div>
          </div>
        </div>
        <hr className="divider mt-[30px] mb-[28px]" />
        <div className="guarantor ">
          <h3 className="text-primary">Guarantor</h3>
          <div className="pt-[30px] flex items flex-wrap ">
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">FULL NAME</h6>
              <h5 className="text-base text-secondary pt-2">{`${guarantor?.firstName} ${guarantor?.lastName}`}</h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">PHONE NUMBER</h6>
              <h5 className="text-base text-secondary pt-2">
                {guarantor?.phoneNumber}
              </h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">EMAIL ADDRESS</h6>
              <h5 className="text-base text-secondary pt-2">debby@gmail.com</h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">RELATIONSHIP</h6>
              <h5 className="text-base text-secondary pt-2">Sister</h5>
            </div>
          </div>
        </div>
        <hr className="divider mt-[30px] mb-[28px]" />
        <div className="guarantor mb-[46px]">
          <h3 className="text-primary">Guarantor</h3>
          <div className="pt-[30px] flex items flex-wrap ">
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">FULL NAME</h6>
              <h5 className="text-base text-secondary pt-2">Grace Effiom</h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">PHONE NUMBER</h6>
              <h5 className="text-base text-secondary pt-2">Grace Effiom</h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">EMAIL ADDRESS</h6>
              <h5 className="text-base text-secondary pt-2">Grace Effiom</h5>
            </div>
            <div className="pr-[60px] min-w-[180px] pb-[30px]">
              <h6 className="text-secondary text-xs">RELATIONSHIP</h6>
              <h5 className="text-base text-secondary pt-2">Grace Effiom</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
