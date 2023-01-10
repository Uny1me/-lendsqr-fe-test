import axios from "axios";

const getAllUserData = async (setState: any) => {
  try {
    const response = await axios.get(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );
    setState(response.data);
  } catch (error) {
    console.error(error);
  }
};

const toggleMenu = (dispatch: (value: boolean) => void, value: boolean) => {
  dispatch(!value);
};

const saveUserToLocalStorage = (thisUser: any) => {
  localStorage.setItem("oneUser", JSON.stringify(thisUser));
};

const getUserFromLocalStorage = () => {
  const oneUser: any = localStorage.getItem("oneUser");
  return JSON.parse(oneUser);
};
export {
  getAllUserData,
  toggleMenu,
  saveUserToLocalStorage,
  getUserFromLocalStorage,
};
