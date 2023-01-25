const express = require('express')

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
router.post('/', (req, res) => {
    res.json({
        msg: 'POST a new workout'
    })
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