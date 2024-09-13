import { DataTypes } from "sequelize";
import db from "../utils/database.js";
import Property from "./propertyModel.js";
import Transaction from "./transaksiModel.js";
import Ulasan from "./ulasanModel.js";

const User = db.define(
  // memberikan nama model dengan nama User, secara default jika tidak memberikan tablename maka akan menjadi nama jamak
  "User",
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
    tableName: "user",
  }
);

// await User.sync({ force: true });

export default User;