const User = require('../models/user')

module.exports = {
	// get all users
	async getAllUsers(req, res) {
		console.log('hey are you running to get all of the users?')
		try {
			const users = await User.find()
			res.status(200).json(users);
		} catch (error) {
			res.status(500).json({ error: 'Could not find any users' });
		}
	},

	//get user by id
	async getUserById(req, res) {
		try {
			const user = await User.findById(req.params.userId)
			if (!user) {
				return res.status(404).json({ error: 'That user was not found' })
			}
			res.status(200).json(user);
		} catch (error) {
			res.status(500).json(error)
		}
	},

	//create a new user
	async createUser(req, res) {
		console.log('are you creating a user?')
		try {
			console.log('Request Body:', req.body)
			const newUser = await User.create(req.body)
			res.status(200).json(newUser)
		} catch (error) {
			console.error(error)
			res.status(500).json({ message: 'An error occurred', error })
		}
	},

	//update user by id
	async updateUser(req, res) {
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.userId,
				req.body,
				{
					runValidators: true,
					new: true
				}
			)

			if (!updatedUser) {
				throw Error;
			} else {
				res.status(201).json(updatedUser)
			}
		} catch (error) {
			res.status(500).json({ error })
		}
	},

	//delete user by id
	async deleteUser(req, res) {
		try {
			await User.findOneAndDelete({ _id: req.params.userId })
			res.status(200).json('The user has been deleted')
		} catch (error) {
			res.status(500).json({ error })
		}
	},


}


