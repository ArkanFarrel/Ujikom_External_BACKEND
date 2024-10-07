import { DataTypes } from "sequelize";
import db from "../utils/database.js";
// import Property from "./propertyModel.js";
// import Transaction from "./transaksiModel.js";
// import User from "./UserModel.js";

const Admin = db.define(
  // memberikan nama model dengan nama User, secara default jika tidak memberikan tablename maka akan menjadi nama jamak
  "Admin",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "admin",
  }
);

// Admin.hasMany(Property, {
//     foreignKey: 'PropertyId',
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE',
//   });


// await User.sync({ force: true });

export default Admin;