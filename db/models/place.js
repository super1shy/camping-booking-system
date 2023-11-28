'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {
    static associate(models) {
      this.hasMany(models.Reservation, { foreignKey: 'place_id' });
      this.belongsTo(models.Location, { foreignKey: 'location_id' });
    }
  }
  Place.init(
    {
      capacity: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      location_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Place',
    }
  );
  return Place;
};
