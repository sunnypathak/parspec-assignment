//lib
import axios from "axios";

//constant
import { API_URL } from "../constants";

export const getUsers = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};
