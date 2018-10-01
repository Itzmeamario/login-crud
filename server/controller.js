const { User } = require('../database/model');
const bcrypt = require('bcryptjs');

const controller = {
  users: {
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
      const { username } = req.params;
      const { password, name, surname, age } = req.body;
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
          User.create({
            username,
            password: hash,
            name,
            surname,
            age
          })
          .then(user => res.status(201).send({id: user.id}))
          .catch(error => res.status(400).send(error.errors[0].message));
        });
      });
    },
    
    put: (req, res) => {
      const { id } = req.params;
      const { username, password, name, surname, age } = req.body;
      console.log(username, password, name, surname, age)
      if(password) {
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(password, salt, function(err, hash) {
            User.update({
              username,
              password: hash,
              name,
              surname,
              age
            }, {
              where: {
                id
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
          });
        });
      } else {
        User.update({
          username,
          name,
          surname,
          age
        }, {
          where: {
            id
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
      }

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
  },

  userslist: {
    get: (req, res) => {
      User.findAll()
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error.errors[0].message));
    },
  },

  auth: {
    get: (req, res) => {
      const { username } = req.params;
      const { password } = req.query;
      User.findOne({
        where: {
          username
        }
      })
      .then(user => {
        const hash = user.password;
          if(bcrypt.compareSync(password, hash)) {
            res.status(200).send(user)
          } else {
            res.status(200).send();
          }
      })
      .catch(error => res.status(400).send('Password might not be hashed'));
    }
  }
}

module.exports = controller;