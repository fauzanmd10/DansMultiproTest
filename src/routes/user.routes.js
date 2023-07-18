const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controllers');

router.post('/user-register', userController.register);
router.post('/user-login', userController.login);
router.post('/admin-refresh-token', userController.refreshToken);

module.exports = router;
