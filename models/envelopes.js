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

module.exports = Envelopes;