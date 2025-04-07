"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const auth_1 = require("../middleware/auth");
const routes = express_1.default.Router();
routes.post("/register", userControllers_1.registerUser);
routes.post("/login", userControllers_1.loginUser);
routes.post("/logout", userControllers_1.logoutUser);
routes.get("/profile", auth_1.protect, userControllers_1.getUserProfile);
exports.default = routes;
// import express from 'express';
// const routes = express.Router();
// export default routes
