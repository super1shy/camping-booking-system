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
      name: DataTypes.STRING,
      overview: DataTypes.TEXT,
      capacity: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
      images: DataTypes.ARRAY(DataTypes.TEXT),
      location_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Place',
    }
  );
  return Place;
};
