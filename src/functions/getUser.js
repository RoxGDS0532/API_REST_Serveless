import usersDB from "../data/usersDB.js";
import { success, error } from "../libs/response.js";

export const handler = async (event) => {
  const { id } = event.pathParameters || {};

  const user = usersDB.getById(id);

  if (!user) {
    return error(404, "User not found");
  }

  return success(200, user);
};
