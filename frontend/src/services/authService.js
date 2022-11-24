import axios from axios
import {toast} from 'react-toastify'

export const BACKEND_URL = process.env.backend_URL;

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[]\.,;:\s@"]+(.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/
  );
};

export const loginUser = async (userData) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/users/login`,
        userData
      );
      if (response.statusText === "OK") {
        toast.success("Login Successful...");
      }
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(message);
    }
  };