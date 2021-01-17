/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "comment",
    {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      bookId: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        references: {
          model: "book",
          key: "id",
        },
      },
      comment: {
        type: DataTypes.STRING(450),
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Заавал имэйл оруулна уу",
          },
          notContains: {
            args: ["миа"],
            msg: "Энэ мэссэжд хориглогдсон үг байна.",
          },
          // min: {
          //   args: [20],
          //   msg: "Хамгийн багадаа 20 байх ёстой",
          // },
        },
        // get() {
        //   let comment = this.getDataValue("comment").toLowerCase();
        //   return comment.charAt(0).toUpperCase() + comment.slice(1);
        // },
        // set(value) {
        //   this.setDataValue("comment", value.replace("миа", "тиймэрхүү"));
        // },
      },
    },
    {
      tableName: "comment",
      timestamps: true,
    }
  );
};
