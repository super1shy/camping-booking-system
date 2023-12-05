const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      this.hasMany(models.Place, { foreignKey: 'location_id' });
    }
  }
  Location.init(
    {
      name: DataTypes.STRING,
      fullAddress: DataTypes.STRING,
      postcode: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Location',
    }
  );
  return Location;
};
