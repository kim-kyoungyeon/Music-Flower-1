'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MusicData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.MusicData.hasMany(models.Post_MusicData, { foreignKey: 'musicDatumId', sourceKey: 'id'});
    }
  }
  MusicData.init({
    musicTitle: DataTypes.STRING,
    artist: DataTypes.STRING,
    musicImage: DataTypes.TEXT,
    musicUrl: DataTypes.TEXT,
    genre: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'MusicData',
  });
  return MusicData;
};