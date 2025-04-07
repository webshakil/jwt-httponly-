"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("../models/user"));
const protect = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = await user_1.default.findById(decoded.id).select("-password");
        next();
    }
    catch (error) {
        res.status(401);
        throw new Error("Not authorized, token failed");
    }
};
exports.protect = protect;
