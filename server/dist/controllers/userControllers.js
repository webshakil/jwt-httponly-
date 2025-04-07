"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserProfile = exports.logoutUser = exports.loginUser = exports.registerUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const generateToken_1 = __importDefault(require("../utils/generateToken"));
const user_1 = __importDefault(require("../models/user"));
// @desc Register User
// @route POST /api/auth/register
exports.registerUser = (0, express_async_handler_1.default)(async (req, res) => {
    const { username, email, password } = req.body;
    const userExists = await user_1.default.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exists");
    }
    const user = await user_1.default.create({ username, email, password });
    if (user) {
        (0, generateToken_1.default)(res, user._id);
        res.status(201).json({ message: "User registered successfully", user });
    }
    else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});
// @desc Login User
// @route POST /api/auth/login
exports.loginUser = (0, express_async_handler_1.default)(async (req, res) => {
    const { email, password } = req.body;
    const user = await user_1.default.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        res.status(401);
        throw new Error("Invalid email or password");
    }
    (0, generateToken_1.default)(res, user._id);
    res.json({ message: "Logged in successfully", user, generateToken: generateToken_1.default });
});
// @desc Logout User
// @route POST /api/auth/logout
exports.logoutUser = (0, express_async_handler_1.default)(async (req, res) => {
    res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
    res.json({ message: "Logged out successfully" });
});
exports.getUserProfile = (0, express_async_handler_1.default)(async (req, res) => {
    if (!req.user) {
        res.status(401);
        throw new Error("User not found");
    }
    res.json(req.user);
});
