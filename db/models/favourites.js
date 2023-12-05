const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favourites extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Place, { foreignKey: 'place_id' });
    }
  }
  Favourites.init(
    {
      user_id: DataTypes.INTEGER,
      place_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favourites',
    }
  );
  return Favourites;
};
