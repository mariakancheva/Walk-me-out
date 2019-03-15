const express = require('express')
const authCheck = require('../config/auth-check')
const Profile = require('../models/Profile')
const User = require('../models/User');
const Dog = require('../models/Dog')
const Walk = require('../models/Walk')

const router = new express.Router()


// @route   GET /dog/all
// @desc    Get all dogs
// @access  Private admin

router.get('admin/dog/all', (req, res) => {
    if (req.user.roles.indexOf('Admin') > -1) {

        Dog.find().populate('owner').then(dogs => {
            if (!dogs) {
                const message = 'There are no dogs'
                return res.status(200).json({
                    success: false,
                    message: message,
                    errors: validationResult.errors
                })
            }
            res.status(200).json({
                success: true,
                message: "Found dogs",
                data: dogs
            })
        }).catch(err => {
            console.log(err);
            const message = 'Something went wrong';
            return res.status(200).json({
                success: false,
                message: message
            })
        })
    } else {
        return res.status(200).json({
            success: false,
            message: 'Invalid credentials'
        })
    }
})

// @route   GET /walk/all
// @desc    Get all dogs
// @access  Private admin

router.get('admin/walk/all', authCheck, (req, res) => {
    if (req.user.roles.indexOf('Admin') > -1) {
        Walk.find().populate('dog').populate('user').then(walks => {
            if (!walks) {
                const message = 'There are no walks'
                return res.status(200).json({
                    success: false,
                    message: message,
                    errors: validationResult.errors
                })
            }
            res.status(200).json({
                success: true,
                message: "Found walks",
                data: walks
            })
        }).catch(err => {
            console.log(err);
            const message = 'Something went wrong';
            return res.status(200).json({
                success: false,
                message: message
            })
        })
    }else{
        return res.status(200).json({
            success: false,
            message: 'Invalid credentials'
        })
    }

})

// @route   GET /profile/all
// @desc    Get all profiles
// @access  Private admin

router.get('admin/profile/all', authCheck, (req, res) => {
    if (req.user.roles.indexOf('Admin') > -1) {
        Profile.find().populate('user').then(profiles => {
            if (!profiles) {
                const message = 'There are no profiles'
                return res.status(200).json({
                    success: false,
                    message: message,
                    errors: validationResult.errors
                })
            }
            res.status(200).json({
                success: true,
                message: "Found profiles",
                data: profiles
            })
        }).catch(err => {
            console.log(err);
            const message = 'Something went wrong';
            return res.status(200).json({
                success: false,
                message: message
            })
        })
    } else {
        return res.status(200).json({
            success: false,
            message: 'Invalid credentials'
        })
    }
})
module.exports = router