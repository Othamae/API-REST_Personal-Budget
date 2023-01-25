const express = require ('express');
const router = express.Router();
const  {login, Register, getItems, getItem} = require('../controllers/users')
const {validatorGetUser, validatorCreateUser} = require('../validators/users')

/**
 * Two routers:
 * http:localhost:3001/api/users/login
 * http://localhost:3001/api/users/register
 * http:localhost:3001/api/users
 */
router.post('/register', validatorCreateUser, Register);

router.post('/login',  login);

router.get('/', getItems);

router.get('/:id', validatorGetUser,getItem);

module.exports = router;