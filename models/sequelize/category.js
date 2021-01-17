/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('category', {
		id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ner: {
			type: DataTypes.STRING(45),
			allowNull: false
		},
		aver_price: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		},
		aver_rate: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false
		}
	}, {
		tableName: 'category',
		timestamps: false
	});
};
