//core module
const path = require('path');
const express = require('express'); 

const authRouter = express.Router();
const authController = require('../controllers/authController');

authRouter.get('/citizenlogin', authController.getCitizenLogin);
authRouter.post('/citizenlogin', authController.postCitizenLogin);
authRouter.get('/officerlogin', authController.getOfficerLogin);
authRouter.post('/officerlogin', authController.postOfficerLogin);
authRouter.get('/citizenregister', authController.getCitizenRegister);
authRouter.post('/citizenregister', authController.postCitizenRegister);
authRouter.post('/logout', authController.postLogout);





module.exports = authRouter;
