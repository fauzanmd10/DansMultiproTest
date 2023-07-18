const User = require('../models/user.models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register
const register = (req, res, next) => {
	bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
		if (err) {
			res.status(500).json({
				error: err
			});
        }
        const id = Math.floor(Math.random() * 1000000);

        let user = new User({
            id:id,
			name: req.body.name,
			email: req.body.email,
			password: hashedPass
		});
		// console.log(req.body.role);

		user
			.save()
			.then(() => {
				res.status(200).json({
                    message: 'User added successfully!'
                });
			})
			.catch((error) => {
				res.status(500).json({
					message: 'An error occured!'
				});
			});
	});
};

// Login
const login = (req, res, next) => {
	let username = req.body.username;
	let password = req.body.password;

	User.findOne({ where: { email: username } }).then((user) => {
		// console.log(admin)
		if (user) {
			bcrypt.compare(password, user.password, function(err, result) {
				if (err) {
					res.json({
						error: err
					});
				}
				if (result) {
					let token = jwt.sign({ name: user.name }, process.env.ACCESS_TOKEN_SECRET, {
						expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME
					});
					let refreshtoken = jwt.sign({ name: user.name }, process.env.REFRESH_TOKEN_SECRET, {
						expiresIn: process.env.REFRESH_TOKEN_EXPIRE_TIME
					});
					res.json({
						message: 'Login successful!',
						name: user.name,
						user_id: user.id,
						email: user.email,
						token,
						refreshtoken
					});
				} else {
					res.status(400).json({
						message: 'Password does not matched!'
					});
				}
			});
		} else {
			res.status(400).json({
				message: 'No admin found!'
			});
		}
	});
};

// Token
const refreshToken = (req, res, next) => {
	const refreshToken = req.body.refreshToken;
	jwt.verify(refreshToken, 'refreshtokensecret', function(err, decode) {
		if (err) {
			res.status(401).json({
				err
			});
		} else {
			let token = jwt.sign({ name: decode.name }, process.env.ACCESS_TOKEN_SECRET, {
				expiresIn: process.env.ACCESS_TOKEN_EXPIRE_TIME
			});
			let refreshToken = req.body.refreshToken;
			res.status(200).json({
				message: 'Token refreshed succesfully',
				token,
				refreshToken
			});
		}
	});
};


module.exports = {
	register,
	login,
	refreshToken,
};
