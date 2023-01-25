const { matchedData } = require('express-validator');
const User = require('../models/users');
const {handleHttpError} = require('../utils/handleError')

const Register = async (req, res)=>{
    try {
        const body = req.body;
        const data = await User.create(body);
        res.send(data)        
    } catch (e) {
        handleHttpError(res, 'ERROR_REGISTER_USER')
    }

}


const getItems = async (req, res)=>{ 
    try {
        const data = await User.findAll({});
        res.send(data)
    } catch (e) {
        handleHttpError(res, 'ERROR_GETTING_USERS')
    }
}

const getItem = async (req, res)=>{ 
    try {
        req = matchedData(req)
        const {id} = req;
        const data = await User.findByPk(id);
        res.send(data)
    } catch (e) {
        console.log(e)
        handleHttpError(res, 'ERROR_GET_USER')
    }
}

module.exports = {Register, getItems, getItem};