const {sequelize} = require("../DB/postgres");
const { DataTypes } = require("sequelize");


const Envelopes = sequelize.define(
    "envelopes",
    {
        name: {
            type: DataTypes.STRING,
        },
        amount: {
            type: DataTypes.INTEGER,
        }, 
        userid: {
            type: DataTypes.INTEGER,
        }
    },
    {
        timestamps: true,
      }
);

// Envelopes.findAllData = function(){
//     //Envelopes.belongsTo({foreignKey: 'userId'})
//     return Envelopes.findAll({include: 'userId'})
// };

// Envelopes.findAllData = function(){    
//     return Envelopes.findAll({where:{id}, include: 'userId'})
// };

module.exports = Envelopes;