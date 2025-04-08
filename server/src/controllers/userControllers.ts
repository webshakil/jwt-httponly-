import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import generateToken from "../utils/generateToken";
import User from "../models/user";
import { AuthRequest } from "../middleware/auth";


// @desc Register User
// @route POST /api/auth/register
export const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({ username, email, password });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({ message: "User registered successfully", user });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Login User
// @route POST /api/auth/login
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  generateToken(res, user._id);
  res.json({ message: "Logged in successfully", user, generateToken });
});

// @desc Logout User
// @route POST /api/auth/logout
export const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.json({ message: "Logged out successfully" });
});


export const getUserProfile = asyncHandler(async (req: AuthRequest, res: Response) => {
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  res.json(req.user);
});
