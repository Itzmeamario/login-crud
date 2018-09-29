const { User } = require('../database/model');

const controller = {
  get: (req, res) => {
    const { username } = req.params;
    User.findOne({
      where: {
        username
      }
    })
    .then(user => res.status(200).send(user))
    .catch(error => res.status(400).send(error.errors[0].message));
  },
  
  post: (req, res) => {
    console.log('POST');
    const { username } = req.params;
    const { password, name, surname, age } = req.body;
    console.log(password, name, surname, age);
    User.create({
      username,
      password,
      name,
      surname,
      age
    })
    .then(user => res.status(201).send({id: user.id}))
    .catch(error => res.status(400).send(error.errors[0].message));
  },
  
  put: (req, res) => {
    const { username } = req.params;
    const { password, name, surname, age } = req.body;
    User.update({
      username,
      password,
      name,
      surname,
      age
    }, {
      where: {
        username
      }
    })
    .then(user => {
      if(user[0] !== 0) {
        res.sendStatus(202);
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => res.status(400).send(error.errors[0].message));
  },
  
  delete: (req, res) => {
    const { username } = req.params;
    User.destroy({
      where: {
        username
      }
    })
    .then(user => {
      if(user !== 0) {
        res.sendStatus(202);
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => res.status(400).send());
  }
}

module.exports = controller;