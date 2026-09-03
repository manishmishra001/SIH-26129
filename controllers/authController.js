//external modules
const path = require('path');
const express = require('express');
const {error} = require('console');
const { check, validationResult } = require('express-validator');
const Citizen = require('../model/citizen');
const bcrypt = require('bcryptjs');


exports.getCitizenLogin = (req, res, next) => {
    res.render('auth/citizenlogin', {
        isLoggedIn: false,
        errors: [],
        oldInput: {
            email: ''
        }
    });
};

exports.postCitizenLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const citizen = await Citizen.findOne({ email });

        if (!citizen) {
            return res.status(401).render('auth/citizenlogin', {
                isLoggedIn: false,
                errors: ['Invalid email or password'],
                oldInput: { email }
            });
        }

        const isMatch = await bcrypt.compare(password, citizen.password);

        if (!isMatch) {
            return res.status(401).render('auth/citizenlogin', {
                isLoggedIn: false,
                errors: ['Invalid email or password'],
                oldInput: { email }
            });
        }

        // Login successful
        req.session.isLoggedIn = true;
        req.session.citizenId = citizen._id.toString();

        await req.session.save();

        res.redirect(`/citizen/${citizen._id}`);

    } catch (err) {
        next(err);
    }
};

exports.getOfficerLogin = (req, res, next) => {
    res.render('auth/officerlogin',{
        isLoggedIn: false
});
}


exports.postOfficerLogin = (req, res, next) => {
    console.log(req.body);
    req.session.isLoggedIn = true;
    console.log(req.session.isLoggedIn);
    res.render('officerdashboard',{
        isLoggedIn: req.session.isLoggedIn
});
}

exports.getCitizenRegister = (req, res, next) => {
    res.render('auth/citizenregister', {
        errors: [],
        oldInput: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            dob: '',
            gender: '',
            aadhaarlast4: '',
            address: '',
            city: '',
            state: '',
        }
    })

}

exports.postCitizenRegister =  [
        check('firstName')
            .notEmpty()
            .withMessage('First Name is required')
            .trim()
            .isLength({ min: 2 })
            .withMessage('First Name must be at least 2 characters')
            .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/)
            .withMessage('First Name can contain only letters'),

        check('lastName')
            .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/)
            .withMessage('Last Name can contain only letters'),

        check('email')
            .notEmpty()
            .withMessage('Email is required')
            .isEmail()
            .withMessage('Valid Email is required')
            .normalizeEmail(),

        check('phone')
            .notEmpty()
            .withMessage('Phone number is required')
            .isLength({ min: 10, max: 10 })
            .isMobilePhone('any')
            .withMessage('Valid Phone Number is required'),

        check('dob')
            .notEmpty()
            .withMessage('Date of Birth is required')
            .isDate()
            .withMessage('Valid Date of Birth is required'),

        check('gender')
            .notEmpty()
            .withMessage('Gender is required')
            .isIn(['male', 'female', 'other'])
            .withMessage('Valid Gender is required'),

        check('aadhaarlast4')
            .notEmpty()
            .withMessage('Aadhar last 4 digits are required')
            .isLength({ min: 4, max: 4 })
            .isNumeric()
            .withMessage('Valid Aadhar Last 4 Digits are required'),

        check('address')
            .notEmpty()
            .withMessage('Address is required'),

        check('city')
            .notEmpty()
            .withMessage('City is required')
            .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/)
            .withMessage('Valid City is required'),

        check('state')
            .notEmpty()
            .withMessage('State is required')
            .matches(/^[A-Za-z]+(?: [A-Za-z]+)*$/)
            .withMessage('Valid State is required'),

        check('password')
            .notEmpty()
            .withMessage('Password is required')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters')
            .matches(/[A-Za-z]/)
            .withMessage('Password must contain at least one letter')
            .matches(/[0-9]/)
            .withMessage('Password must contain at least one number')
            .matches(/[!@#$%^&*(),.?":{}|<>]/)
            .withMessage('Password must contain at least one special character')
            .trim(),

        check('confirmPassword')
        .trim()
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Passwords do not match');
                }
                return true;
            }),

        
    ,
    (req, res, next) => {
        const { firstName, lastName, email, phone, dob, gender, aadhaarlast4, address, city, state, password } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).render('auth/citizenregister', {
                errors: errors.array().map(err => err.msg),
                oldInput: { firstName, lastName, email, phone, dob, gender, aadhaarlast4, address, city, state, password }
            });
        }

        bcrypt.hash(password, 12).then(hashedPassword => {
            const citizen = new Citizen({
                firstName,
                lastName,
                email,
                phone,
                dob,
                gender,
                aadhaarlast4,
                address,
                city,
                state,
                password:hashedPassword,
            });
            return citizen.save();
        }).then(() => {
            res.redirect('/auth/citizenlogin');
        }).catch(err => {
            console.error(err);
            res.status(500).render('auth/citizenregister', {
                errors: [err.message],
                oldInput: { firstName, lastName, email, phone, dob, gender, aadhaarlast4, address, city, state, password }
            });
        }); 
        
    }
]




exports.postLogout = (req, res, next) => {
    req.session.isLoggedIn = false;
    console.log("Logout:", req.session.isLoggedIn);
    res.redirect('/');

};