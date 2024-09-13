import { DataTypes } from "sequelize";
import db from "../utils/database.js";
import Property from "./propertyModel.js";
import Transaction from "./transaksiModel.js";
import User from "./UserModel.js";

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

Admin.belongsTo(User, {
    foreignKey: 'UserId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
Admin.hasMany(Property, {
    foreignKey: 'PropertyId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });


// artinya User bisa memiliki banyak buku
// User.hasMany (Property, {
//     //* cascade digunakan ketika data di tabel referensi dihapus, maka data yang terkait di tabel ini juga akan dihapus
//     onDelete: "CASCADE",
//     onUpdate: "CASCADE",
// })

// //  Buku dimiliki satu user
// Property.belongsTo(User, {
//     foreignKey: "UserId",
//     onDelete: "CASCADE",
//     onUpdate: "CASCASE",
// })

// User.hasMany(Property, {
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE',
//   });
  
//   User.hasMany(Transaction, {
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE',
//   });


// await User.sync({ force: true });

export default Admin;