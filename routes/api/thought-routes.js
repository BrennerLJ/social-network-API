const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    deleteThought
} = require('../../controllers/thoughtController');

router.router('/').get(getThoughts).post(createThought);

router.route('/::id').get(getSingleThought);

router.route('/:id').delete(deleteThought);

module.exports = router;