import { DataTypes } from "sequelize";
import db from "../utils/database.js";
import Property from "./propertyModel.js";
import Transaction from "./transaksiModel.js";

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

// relasi User ke Book

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

export default User;