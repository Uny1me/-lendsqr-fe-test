import Icon from "components/Icon";
import UsersCard from "./UsersCard";
import filterIcon from "assets/icons/filter-results.svg";
import verticalEllipses from "assets/icons/vertical-ellipses.svg";
import { useState } from "react";
import Input from "components/Input";
import eyeIcon from "assets/icons/eye.svg";
import blackListUserIcon from "assets/icons/blacklist-user.svg";
import activateUserIcon from "assets/icons/activate-user.svg";
import arrowDownLightIcon from "assets/icons/arrowdown-light.svg";
import { Months } from "lib";

import { ActiveBadge, InactiveBadge } from "components/Badges";
import Pagination from "./Pagination";

type filterUserCardProps = {
  filterUsersCard: boolean;
};

type UsersProps = {
  setNavigateDashBoard: (navigateDashboard: string) => void;
  setOneUser: any;
  userData: any;
};

const Users = ({ userData, setNavigateDashBoard, setOneUser }: UsersProps) => {
  const [openDropDown, setOpenDropDown] = useState<string>("");
  const [sliceArray, setSliceArray] = useState({
    indexed: 0,
    firstIndex: 0,
    lastIndex: 9,
  });
  const [filterUsersCard, setFilterUsersCard] = useState<boolean>(false);

  const paginateUserData: any = (indexOne: number) => {
    setSliceArray({
      indexed: indexOne,
      firstIndex: (indexOne - 1) * 9,
      lastIndex: indexOne * 9,
    });
  };

  return (
    <div className="pl-[20px] lg:pl-[343px] w-[96vw] lg:pt-[60px] pt-[15px]">
      <h2 className="text-primary text-2xl font-medium">Users</h2>
      <UsersCard />

      {/* Table */}
      <section className="w-full mb-12 xl:mb-0 lg:mt-0 mt-12">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ">
          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse dashboard__table">
              <thead className="bg-[#F9FAFB]">
                <tr>
                  <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-left text-secondary uppercase font-semibold">
                    <div className="flex items-center">
                      Organization
                      <button
                        onClick={() => setFilterUsersCard(!filterUsersCard)}
                      >
                        <Icon icon={filterIcon} classes={`ml-2.5`} />
                      </button>
                      <FilterUsersCard filterUsersCard={filterUsersCard} />
                    </div>
                  </th>

                  <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-left text-secondary uppercase font-semibold">
                    <div className="flex items-center">
                      Username
                      <button
                        onClick={() => setFilterUsersCard(!filterUsersCard)}
                      >
                        <Icon icon={filterIcon} classes={`ml-2.5`} />
                      </button>
                    </div>
                  </th>

                  <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-left text-secondary uppercase font-semibold">
                    <div className="flex items-center">
                      Email
                      <button
                        onClick={() => setFilterUsersCard(!filterUsersCard)}
                      >
                        <Icon icon={filterIcon} classes={`ml-2.5`} />
                      </button>
                    </div>
                  </th>

                  <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-left text-secondary uppercase font-semibold">
                    <div className="flex items-center">
                      Phone Number
                      <button
                        onClick={() => setFilterUsersCard(!filterUsersCard)}
                      >
                        <Icon icon={filterIcon} classes={`ml-2.5`} />
                      </button>
                    </div>
                  </th>

                  <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-left text-secondary uppercase font-semibold">
                    <div className="flex items-center">
                      Date joined
                      <button
                        onClick={() => setFilterUsersCard(!filterUsersCard)}
                      >
                        <Icon icon={filterIcon} classes={`ml-2.5`} />
                      </button>
                    </div>
                  </th>

                  <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-left text-secondary uppercase font-semibold ">
                    <div className="flex items-center">
                      status
                      <button
                        onClick={() => setFilterUsersCard(!filterUsersCard)}
                      >
                        <Icon icon={filterIcon} classes={`ml-2.5`} />
                      </button>
                    </div>
                  </th>

                  <th className="px-6 align-middle  py-3 text-xs border-l-0 border-r-0 whitespace-nowrap text-left text-secondary uppercase font-semibold invisible">
                    <div className="flex items-center">
                      Icons <Icon icon={filterIcon} classes={`ml-2.5`} />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData &&
                  userData
                    .slice(sliceArray.firstIndex, sliceArray.lastIndex)
                    .map(
                      ({
                        orgName,
                        userName,
                        email,
                        phoneNumber,
                        createdAt,
                        lastActiveDate,
                        id,
                      }: any) => {
                        const date = new Date(
                          new Date(createdAt).toUTCString()
                        );
                        const createdAtDate = `${
                          Months[date.getUTCMonth()]
                        } ${date.getDate()}, ${date.getUTCFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}   ${
                          date.getUTCHours() > 12 ? "PM" : "AM"
                        }`;

                        const userId = id;

                        return (
                          <tr key={id}>
                            <th className="border border-b-0.5 border-color-table-data  text-secondary text-sm  border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap py-[22px] text-left font-normal">
                              {orgName}
                            </th>
                            <td className="border border-b-0.5 border-color-table-data  border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-secondary whitespace-nowrap py-[22px] font-normal">
                              {userName}
                            </td>
                            <td className="border border-b-0.5 border-color-table-data  border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-secondary whitespace-nowrap py-[22px] font-normal">
                              {email}
                            </td>
                            <td className="border border-b-0.5 border-color-table-data  border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-secondary whitespace-nowrap py-[22px] font-normal">
                              {phoneNumber}
                            </td>
                            <td className="border border-b-0.5 border-color-table-data  border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-secondary whitespace-nowrap py-[22px] font-normal">
                              {createdAtDate}
                            </td>
                            <td className="border border-b-0.5 border-color-table-data  border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-secondary whitespace-nowrap py-[22px] font-normal">
                              {new Date(lastActiveDate).getDate() >=
                              new Date().getDate() ? (
                                <ActiveBadge />
                              ) : (
                                <InactiveBadge />
                              )}
                              {/* <ActiveBadge /> */}
                            </td>
                            <td className="relative border border-b-0.5 border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm text-secondary whitespace-nowrap py-[22px] font-normal cursor-pointer">
                              <button
                                onClick={() => {
                                  if (openDropDown === userName) {
                                    setOpenDropDown("");
                                  } else {
                                    setOpenDropDown(userName);
                                  }
                                }}
                              >
                                <Icon icon={verticalEllipses} />
                              </button>
                              <div
                                className={`${
                                  openDropDown === userName ? "block" : "hidden"
                                } dropdown__content`}
                              >
                                <ul>
                                  <li
                                    className="cursor-pointer"
                                    onClick={() => {
                                      setNavigateDashBoard("user");
                                      const thisUser = userData.find(
                                        ({ id }: any) => userId === id
                                      );
                                      setOneUser(thisUser);
                                    }}
                                  >
                                    <Icon icon={eyeIcon} classes={"mr-2.5"} />
                                    View Details
                                  </li>
                                  <li>
                                    <Icon
                                      icon={blackListUserIcon}
                                      classes={"mr-2.5"}
                                    />
                                    Blacklist User
                                  </li>
                                  <li>
                                    <Icon
                                      icon={activateUserIcon}
                                      classes={"mr-2.5"}
                                    />
                                    Activate User
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        );
                      }
                    )}
              </tbody>
            </table>
          </div>
        </div>
        {/* pagination */}
        <div className="flex-col md:flex-row flex items-center justify-between font-normal text-secondary text-sm">
          <div className="dropdown_pagination grow flex items-center">
            Showing{" "}
            <div className="dropdown_pagination-button flex items-center justify-between">
              {sliceArray.lastIndex} <Icon icon={arrowDownLightIcon} />
            </div>
            <span className="font-normal text-secondary">out of 100</span>
          </div>
          <Pagination
            paginateUserData={paginateUserData}
            sliceArray={sliceArray}
            setSliceArray={setSliceArray}
          />
        </div>
      </section>
    </div>
  );
};
const FilterUsersCard = ({ filterUsersCard }: filterUserCardProps) => {
  return (
    <div
      className={`${filterUsersCard ? "block" : "hidden"} filter_users__card`}
    >
      {" "}
      <div className="mb-5">
        <h4>Organization</h4>
        <Input
          placeholder="Select"
          inputType="text"
          addonType="icon"
          addon={arrowDownLightIcon}
          customClass="cta-button-transparent"
        />
      </div>
      <div className="mb-5">
        <h4>Username</h4>
        <Input placeholder="User" inputType="text" />
      </div>
      <div className="mb-5">
        <h4>Email</h4>
        <Input placeholder="User" inputType="text" />
      </div>
      <div className="mb-5">
        <h4>Email</h4>
        <Input placeholder="User" inputType="text" />
      </div>
      <div className="mb-5">
        <h4>Date</h4>
        <Input placeholder="Select" inputType="date" />
      </div>
      <div className="mb-5">
        <h4>Status</h4>
        <Input
          placeholder="Select"
          inputType="text"
          addonType="icon"
          addon={arrowDownLightIcon}
          customClass="cta-button-transparent"
        />
      </div>
      <div className="filter_users__card-button-group">
        <button className="button-outline">Reset</button>
        <button className="cta-button">Filter</button>
      </div>
    </div>
  );
};

export default Users;
