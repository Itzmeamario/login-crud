const Sequelize = require('sequelize');

const connection = new Sequelize('users', 'postgres', 'foobar', {
  dialect: 'postgres',
  logging: false
});

connection.authenticate()
  .then(() => {
    console.log('Connection to postgres db has been established successfully!');
  })
  .catch(() => {
    console.error('Unable to connect to the db.');
  });

module.exports = connection;