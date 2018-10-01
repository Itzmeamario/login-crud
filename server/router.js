const router = require('express').Router();
const controller = require('./controller');

router.route('/users/:username')
.get(controller.users.get)
.post(controller.users.post)
.delete(controller.users.delete);

router.route('/userslist/')
.get(controller.userslist.get)

router.route('/users/:id')
.put(controller.users.put)

router.route('/auth/:username')
.get(controller.auth.get)

module.exports = router;