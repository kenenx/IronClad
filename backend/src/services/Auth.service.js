import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

export default class AuthService {
  register = async ({ username, password }) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 10)
      const user = new User({ username, password: hashedPassword });
      await user.save();
      const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return { user, accessToken };
    } catch (error) {
      throw new Error("Registration failed", error.message);
    }
  } 

  login = async ({ username, password }) => {
    try {
      const user = await User.findOne({ username });
      if (!user) throw new Error("User not found");
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) throw new Error("Invalid password");
      const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return { user, accessToken };
    } catch (error) {
      throw new Error("Login failed", error.message);
    }
  }

  getUser = async ( username ) => {
    try {
      console.log( username, 'service')
      const user = await User.findOne({ username }).select("-password");
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }


  
}
