import users from "assets/icons/users.svg";
import usersActive from "assets/icons/user-active.svg";
import usersLoans from "assets/icons/user-loans.svg";
import usersSavings from "assets/icons/user-savings.svg";

const userData: Array<any> = [
  { title: "USERS", count: "2,453", image: users },
  { title: "ACTIVE USERS", count: "2,453", image: usersActive },
  { title: "USERS WITH LOANS", count: "12,453", image: usersLoans },
  { title: "USERS WITH SAVINGS", count: "102,453", image: usersSavings },
];

const Months: Array<string> = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const UserTab: Array<string> = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

export { userData, Months, UserTab };
