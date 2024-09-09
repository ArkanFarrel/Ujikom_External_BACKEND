import "../model/index.js";
import Property from "./propertyModel.js";
import User from "./UserModel.js";
import Transaction from "./transaksiModel.js";
import db from "../utils/database.js";

await User.sync();
await Property.sync();
await Transaction.sync()

await db.sync();