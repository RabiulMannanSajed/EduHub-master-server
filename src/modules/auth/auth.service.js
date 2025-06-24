import { jwtHelper } from "../../helper/jwtHelper.js";
import { User } from "../user/user.model.js";

export const LoginUser = async ({ email, password }) => {
  // here check the user present or not

  const user = await User.findOne({ email });
  console.log("user", user);
  if (!user) {
    throw new Error("User not found ");
  }

  // here match the password
  if (user.password !== password) {
    throw new Error("Invalid password");
  }
  return {
    user: {
      email: user.email,
      password: user.password,
    },
  };
};
