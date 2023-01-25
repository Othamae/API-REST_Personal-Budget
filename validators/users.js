const {check} = require('express-validator');
const {validateResult} = require('../utils/handleValidators');

const validatorCreateUser = [
    check("name").exists().notEmpty(),
    check("email").exists().notEmpty(), 
    check("totalAmount").exists().notEmpty(),
    (req, res, next)=>{
       return validateResult(req, res, next);
    }
]

const validatorGetUser = [ 
    check("id").exists().notEmpty(),
    (req, res, next)=>{
       return validateResult(req, res, next);
    }
]
module.exports =  {validatorGetUser, validatorCreateUser}