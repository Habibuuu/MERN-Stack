const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

// GET All workouts
router.get('/', (req, res) => {
    res.json({
        msg: 'GET All workouts'
    })
})

// GET a single workouts
router.get('/:id', (req, res) => {
    res.json({
        msg: 'GET a single workouts'
    })
})

// POST a new workout
router.post('/', async (req, res) => {
    const { title, reps, load } = req.body

    try {
        const workout = await Workout.create({ title, reps, load })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({
        msg: 'DELETE a new workout'
    })
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({
        msg: 'UPDATE a new workout'
    })
})

module.exports = router