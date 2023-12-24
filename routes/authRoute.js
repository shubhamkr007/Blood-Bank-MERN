const express = require('express');
const { registerController,loginController,currentUserController } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

//Register || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//GET CURR USER || GET
router.get('/current-user', authMiddleware, currentUserController );


module.exports =router;