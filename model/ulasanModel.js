import { DataTypes } from "sequelize";
import db from "../utils/database.js";
import Transaction from "./transaksiModel.js";

const Ulasan = db.define(
    "Ulasan",
    {
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {min: 1, max: 100},
        },
        comment: {
            type: DataTypes.TEXT,
        },

        UserId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user', 
              key: 'id'
            },
            allowNull: false
          },
        
    },
    {
        tableName: "ulasan",
    }
);

export default Ulasan;