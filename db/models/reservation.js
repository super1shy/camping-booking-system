'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    static associate(models) {}
  }
  Reservation.init(
    {
      check_in: DataTypes.DATEONLY,
      checkout: DataTypes.DATEONLY,
      user_id: DataTypes.INTEGER,
      place_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Reservation',
    }
  );
  return Reservation;
};
