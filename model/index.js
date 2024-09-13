import "../model/index.js";
import Property from "./propertyModel.js";
import User from "./UserModel.js";
import Transaction from "./transaksiModel.js";
import db from "../utils/database.js";
import Ulasan from "./ulasanModel.js";
import Admin from "./adminModel.js";

await User.sync();
await Property.sync();
await Transaction.sync();
await Ulasan.sync();
await Admin.sync();

Ulasan.belongsTo(Transaction, {
    foreignKey: 'UserId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

await db.sync();