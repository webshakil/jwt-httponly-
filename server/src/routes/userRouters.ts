import express from 'express'


import { getUserProfile, loginUser, logoutUser, registerUser } from '../controllers/userControllers';
import { protect } from '../middleware/auth';


const routes = express.Router();

routes.post("/register", registerUser)
routes.post("/login", loginUser)
routes.post("/logout", logoutUser);
routes.get("/profile", protect, getUserProfile);

export default routes





































// import express from 'express';

// const routes = express.Router();


// export default routes