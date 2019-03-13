const express = require('express')
const authCheck = require('../config/auth-check')
const Dog = require('../models/Dog');
const Walk = require('../models/Walk');

const router = new express.Router()

function validateWalkForm(payload) {
    const errors = {}
    let isFormValid = true
    let message = ''

    if (!payload || typeof payload.duration !== 'string') {
        isFormValid = false
        errors.name = 'Have to pick a duration'
    }

    if (!payload || typeof payload.place !== 'string') {
        isFormValid = false
        errors.breed = 'Have to pick a place'
    }

    if (!payload || typeof payload.date !== 'string') {
        isFormValid = false
        errors.address = 'Have to pick a date'
    }

    if (!payload || typeof payload.time !== 'string') {
        isFormValid = false
        errors.address = 'Have to pick a time'
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

// @route   POST /walk/create
// @desc    Add walk
// @access  Private
router.post('/create', authCheck, (req, res) => {
    const walk = req.body;
    const walkObj = {
        owner: req.user._id,
        dog:req.params.id,
        walk
    }
    const validationResult = validateWalkForm(dogObj)
    if (!validationResult.success) {
        return res.status(200).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        })
    }

    Walk.create(walkObj).then((walk) => {
        res.status(200).json({
            success: true,
            message: "Pet added successfully",
            data: walk
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

// @route   POST /walk/edit/:id
// @desc    Edit walk
// @access  Private
router.post('/edit/:id', authCheck, (req, res) => {
    const walkId = req.params.id;
    const walkObj = req.body;
    const validationResult = validateWalkForm(dogObj)
    if (!validationResult.success) {
        return res.status(200).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        })
    }

    Walk.findById({ walkId }).then((editedWalk) => {
        editedWalk.duration = walkObj.duration;
        editedWalk.place = walkObj.place;
        editedWalk.date = walkObj.date;
        editedWalk.time = walkObj.time;

        editedWalk.save().then(updatedwalk => {
            res.status(200).json({
                success: true,
                message: "Dog updated successfully",
                data: updatedwalk
            })
        }).catch((err) => {
            console.log(err);
            let message = 'Something went wrong';

        })
        res.status(200).json({
            success: false,
            message: "Dog updated successfully"
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

// @route   DELETE /walk/id
// @desc    Delete user and profile
// @access  Private
router.delete('/delete/:id', authCheck, (req, res) => {

    Walk.findOneAndRemove({ id: req.params_id }).then(() => {
        res.status(200).json({
            success: true,
            message: "Walk was canceled"
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

// @route   GET /walk/all
// @desc    Get all dogs
// @access  Private admin

router.get('/all', authCheck, (req, res) => {
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
})


module.exports = router