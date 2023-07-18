const { Model, DataTypes } = require('sequelize');
const sequelize = require('./db.sql');

class user extends Model {}
user.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
			// autoIncrement: true
		},
		name: {
			type: String
		},
		email: {
			type: String
		},

		password: {
			type: String
		}
	},
	{
		timestamps: false,
		sequelize,
		modelName: 'user',
		tableName: 'user'
	}
);

module.exports = user;
