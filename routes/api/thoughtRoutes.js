const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  removeThought,
} = require('../../controllers/thoughtController.js');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateThought);

router.route('/:thoughtId/reactions').delete(removeThought);

module.exports = router;
