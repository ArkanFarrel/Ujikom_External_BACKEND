import db from '../utils/database.js';

import { DataTypes } from 'sequelize'; // Atur koneksi database
// import User from './userModel.js';
// import Property from './propertyModel.js';
// import User1 from './UserModel.js';
import Property from './propertyModel.js';
import User from './UserModel.js';


const Transaction = db.define(
    "Transaction",
    {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  PropertyId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'property',  // Nama tabel Properti (sesuaikan dengan model yang kamu punya)
      key: 'id'
    },
    allowNull: false
  },
  UserId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',  // Nama tabel Pengguna
      key: 'id'
    },
    allowNull: false
  },
  TransactionDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Status: {
    type: DataTypes.ENUM('Sukses', 'Pending', 'Batal'),
    allowNull: false
  },
  Agent: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, 
{
  tableName: 'transaction',  // Nama tabel di database
//   timestamps: false
}
);

// Transaction.belongsTo(Property, {
//     foreignKey: 'PropertyId',
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE',
// });

// Transaction.belongsTo(User, {
//     foreignKey: 'UserId',
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE',
// });


// Transaction.belongsTo(User, {
//     foreignKey: 'UserId',
//     onDelete: 'CASCADE',
//     onUpdate: 'CASCADE',
//   });

export default Transaction;
