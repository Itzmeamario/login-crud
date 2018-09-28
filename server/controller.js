const { User } = require('../database/model');

const controller = {
  get: (req, res) => {
    console.log(req.params);
  },
  
  post: (req, res) => {
    console.log(req.params);
    
  },
  
  put: (req, res) => {
    console.log(req.params);
    
  },
  
  delete: (req, res) => {
    console.log(req.params);

  }
}

module.exports = controller;