import usersDB from "../data/usersDB.js";
import { success, error } from "../libs/response.js";

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body || "{}");

    if (!body.name || !body.email || !body.address) {
      return error(400, "name, email and address are required.");
    }

    if (body.name.length > 50) {
      return error(400, "name cannot exceed 50 characters.");
    }

    if (body.address.length > 50) {
      return error(400, "address cannot exceed 50 characters.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return error(400, "Invalid email format.");
    }

    if (body.phone !== undefined && body.phone !== null) {
      const phoneStr = String(body.phone);

      if (!/^\d{10}$/.test(phoneStr)) {
        return error(400, "Phone number must be numeric and exactly 10 digits.");
      }
    }

    const newUser = usersDB.create({
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone ?? null,
      address: body.address,
    });

    return success(201, newUser);
  } catch (e) {
      console.error("Error in createUser:", e);
    return error(500, "Internal Server Error");
  }
};
