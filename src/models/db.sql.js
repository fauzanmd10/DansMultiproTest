const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const sequelize = new Sequelize(process.env.DATABASESQL, process.env.USERSQL, process.env.PASSWORDSQL, {
	host: process.env.HOSTSQL,
	port: process.env.PORTSQL,
	dialect: process.env.DIALECTSQL
});

module.exports = sequelize;
