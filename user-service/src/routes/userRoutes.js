const express = require('express');
const { signup, login, updateUser, deleteUser, getUsers, searchUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.put('/users', auth, updateUser);
router.delete('/users', auth, deleteUser);
router.get('/users', getUsers);
router.get('/users/search', searchUser);

module.exports = router;
