// external modules
const path = require('path');
const express = require('express');
const Citizen = require('../model/citizen');

exports.getCitizen = (req, res, next) => {
    console.log(req.session.isLoggedIn);
    res.render('index', {
        isLoggedIn: req.session.isLoggedIn
    });

};

exports.getCitizenDashboard = async (req, res, next) => {
    try {
        if (!req.session.isLoggedIn || !req.session.citizenId) {
            return res.redirect('/auth/citizenlogin');
        }

        const citizenId = req.params.citizenid;

        if (req.session.citizenId !== citizenId) {
            return res.status(403).send('Access denied');
        }

        const citizen = await Citizen.findById(citizenId);

        if (!citizen) {
            return res.status(404).send('Citizen not found');
        }

        res.render('citizendashboard', {
            isLoggedIn: req.session.isLoggedIn,
            citizen
        });
    } catch (err) {
        next(err);
    }
};