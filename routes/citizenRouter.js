//core module
const path = require('path');
const express = require('express'); 

const citizenController = require('../controllers/citizenController');

const citizenRouter = express.Router();

citizenRouter.get('/', citizenController.getCitizen);
citizenRouter.get('/citizen/:citizenid', citizenController.getCitizenDashboard);
module.exports = citizenRouter;

