const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'user_id' });
      this.belongsTo(models.Place, { foreignKey: 'place_id' });
    }
  }
  Reservation.init(
    {
      checkInDate: DataTypes.DATEONLY,
      checkOutDate: DataTypes.DATEONLY,
      status: DataTypes.BOOLEAN,
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
