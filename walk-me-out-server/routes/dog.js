const express = require('express')
const authCheck = require('../config/auth-check')
const Profile = require('../models/Profile')
const User = require('../models/User');
const Dog = require('../models/Dog');

const router = new express.Router()

function validateDogForm(payload) {
    const errors = {}
    let isFormValid = true
    let message = ''

    if (!payload || typeof payload.name !== 'string' || payload.name.trim().length < 1) {
        isFormValid = false
        errors.name = 'Name must be at least 1 characters long'
    }

    if (!payload || typeof payload.breed !== 'string' || payload.breed.trim().length < 3) {
        isFormValid = false
        errors.breed = 'Breed must be at least 3 characters long'
    }

    if (!payload || typeof payload.age !== 'number') {
        isFormValid = false
        errors.address = 'Age must be at least 0.3'
    }

    if (!payload || typeof payload.weight !== 'number') {
        isFormValid = false
        errors.address = 'Weight must be at least 1'
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

// @route   POST /dog/add
// @desc    Add dog
// @access  Private
router.post('/add', authCheck, (req, res) => {
    const dog = req.body;
    const dogObj = {
        owner: req.user._id,
        dog
    }
    const validationResult = validateDogForm(dogObj)
    if (!validationResult.success) {
        return res.status(200).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        })
    }

    Dog.create(dogObj).then((dog) => {
        res.status(200).json({
            success: true,
            message: "Pet added successfully",
            data: dog
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

// @route   POST /dog/edit/:id
// @desc    Edit pet
// @access  Private
router.post('/dog/edit/id', authCheck, (req, res) => {
    const dogId = req.params.id;
    const dogObj = req.body;
    const validationResult = validateDogForm(dogObj)
    if (!validationResult.success) {
        return res.status(200).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        })
    }

    Dog.findById({ dogId }).then((editedDog) => {
        editedDog.name = dogObj.name;
        editedDog.breed = dogObj.breed;
        editedDog.age = dogObj.age;
        editedDog.weight = dogObj.weight;
        editedDog.castration = dogObj.castration;
        editedDog.desease = dogObj.desease;
        editedDog.character = dogObj.character;

        editedDog.save().then(updatedDog => {
            res.status(200).json({
                success: true,
                message: "Dog updated successfully",
                data: updatedDog
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

// @route   DELETE /dog/id
// @desc    Delete user and profile
// @access  Private
router.delete('/dog', authCheck, (req, res) => {

    Dog.findOneAndRemove({ dog: req.params_id }).then(() => {
        res.status(200).json({
            success: true,
            message: "Profile wad deleted"
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

// @route   GET /dog/all
// @desc    Get all dogs
// @access  Private admin

router.get('/all', authCheck, (req, res) => {
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
})


module.exports = router