const { matchedData } = require('express-validator');
const { where } = require('sequelize');
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

const login = async (req, res)=>{
    try{
        req = matchedData(req);
        const user = await usersModel.findOne({ email: req.email });
        console.log('Este es el usuario que ha sacado desde: usersModel.findOne({ email: req.email })')
        console.log(user)
        if (!user){
            handleHttpError(res, 'USER_NOT_EXIST',404);
            return
        }
        const data = {
            user
        }
        res.send({data});
        
    }catch(e){
        console.log('Este es el error')
        console.log(e)
        console.log('Aqui acaba')
        handleHttpError(res, 'ERROR_LOGIN_USER')
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

module.exports = {Register, login, getItems, getItem};