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

const localStorageAction = (action: any) => {};

export { getAllUserData, toggleMenu };
