const router = require('express').Router();

const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

router.route('/').get(getUser).post(createUser);

router.route('/:id').getSingleUser.put(updateUser);

router.route('/:id').delete(deleteUser);

router.route('/:userID/friends/:friendID').post(addFriend).delete(deleteFriend);

module.exports = router;