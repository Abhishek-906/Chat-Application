

import express from "express"
import { login, logout, signup } from "../controller/auth.controller.js"

const router = express.Router()

router.post("/signup", signup)

router.post("/login", login)

router.get("/logout", logout)

export default router

// import express from "express"
// // import {signup} from "../controller/auth.controller.js" 
// import {signup, login , logout } from "../controller/auth.controller.js" 

// const router = express.Router()

// router.post("/signup" , signup);

// router.post("/login" , login );

// router.get("/logout" , logout);

// export default router ;