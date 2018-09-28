const connection = require('./');
const Sequelize = require('sequelize');

const User = connection.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  surname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {timestamps: false});

connection.sync({force: false})
.then(() => console.log('Table created in postgres!'))
.catch((error) => console.error(`Error creating table: ${error}`));

module.exports = { User };