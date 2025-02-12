import { DataTypes } from "sequelize";
import db from "../utils/database.js";
// import User from "./UserModel.js";
import Transaction from "./transaksiModel.js";

const Property = db.define(
    "Property", //memberikan nama model dengan nama user secara default
    //  jika tidak memberikan table name maka akan menjadi nama jamak
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
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  // PropertyId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'property',
  //     key: 'id'
  //   },
  //   allowNull: false
  // },
  // UserId: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'user', 
  //     key: 'id'
  //   },
  //   allowNull: false
  // },
  status: {
    type: DataTypes.ENUM,
    values: ['available', 'sold', 'rented'],
    allowNull: false,
    defaultValue: 'available',
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, 
    {
        tableName: "property",
    }
);

// Property.hasMany(User, {
//     foreignKey: 'UserId',
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE'
//   });

  
//   Property.belongsTo(Transaction, {
//     foreignKey: 'PropertyId',
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE'
//   });

// await Book.sync({ force: true });
export default Property;