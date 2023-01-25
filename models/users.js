const { sequelize } = require("../DB/postgres");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    totalAmount: {
      type: DataTypes.INTEGER,
    },
    envelopes: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User;