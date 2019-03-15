const express = require('express')
const authCheck = require('../config/auth-check')
const Profile = require('../models/Profile')
const User = require('../models/User');

const router = new express.Router()

function validateProfileForm(payload) {
    const errors = {}
    let isFormValid = true
    let message = ''

    if (!payload || typeof payload.firstName !== 'string' || payload.firstName.trim().length < 3) {
        isFormValid = false
        errors.firstName = 'First name must be at least 3 characters long'
    }

    if (!payload || typeof payload.lastName !== 'string' || payload.firstName.trim().length < 4) {
        isFormValid = false
        errors.lastName = 'Last name must be at least 4 characters long'
    }

    if (!payload || typeof payload.address !== 'string' || payload.address.trim().length < 8) {
        isFormValid = false
        errors.address = 'Address must be at least 8 characters long'
    }

    if (!payload || typeof payload.telephone !== 'string' || payload.telephone.trim().length < 8) {
        isFormValid = false
        errors.telephone = 'Telephone must be at least 8 characters long'
    }

    if (!isFormValid) {
        message = 'Check the form for errors.'
    }

    return {
        success: isFormValid,
        message,
        errors
    }
}

// @route   POST /profile/create
// @desc    Create user profile
// @access  Private
router.post('/create', (req, res) => {
    const profileObj = req.body;
    const userId = req.user._id
    const validationResult = validateProfileForm(profileObj)
    if (!validationResult.success) {
        return res.status(200).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        })
    }

    profileObj.user = userId;

    Profile.create(profileObj).then((createdProfile) => {
        res.status(200).json({
            success: true,
            message: "Profile created successfully",
            data: createdProfile
        })
    }).catch(err => {
        console.log(err);
        const message = 'Something went wrong';
        return res.status(200).json({
            success: false,
            message: message
        })
    })
})

// @route   POST /profile/edit/:id
// @desc    Create user profile
// @access  Private
router.post('/edit/:id', authCheck, (req, res) => {
    const profileId = req.params.id;
    const profileObj = req.body;

    const validationResult = validateProfileForm(profileObj)
    if (!validationResult.success) {
        return res.status(200).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        })
    }

    Profile.findById({ _id:profileId, user:req.user._id }).then((editetProfile) => {
        editetProfile.firstName = profileObj.firstName;
        editetProfile.lastName = profileObj.lastName;
        editetProfile.address = profileObj.address;
        editetProfile.telephone = profileObj.telephone;

        editetProfile.save().then(profile => {
            res.status(200).json({
                success: true,
                message: "Profile updated successfully",
                data: profile
            })
        }).catch((err) => {
            console.log(err);
            let message = 'Something went wrong';
        })
        res.status(200).json({
            success: false,
            message: "Profile updated successfully"
        })
    }).catch(err => {
        console.log(err);
        const message = 'Something went wrong';
        return res.status(200).json({
            success: false,
            message: message
        })
    })
})

// @route   DELETE /profile
// @desc    Delete user and profile
// @access  Private
router.delete('/delete/:id', authCheck, (req, res) => {
    if (req.user.roles.indexOf('Admin') > -1) {
        Profile.findOneAndRemove({ user: req.user_id }).then(() => {
            User.findByIdAndRemove({ _id: req.user._id }).then(() => {
                res.status(200).json({
                    success: true,
                    message: "Profile wad deleted"
                })
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
