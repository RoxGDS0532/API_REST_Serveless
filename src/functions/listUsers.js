import usersDB from "../data/usersDB.js";
import { success } from "../libs/response.js";

export const handler = async () => {
  return success(200, usersDB.getAll());
};
