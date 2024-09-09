import express from "express";
import { createProperty, deleteProperty, getProperty, getPropertyById, updateProperty } from "../controllers/propertyController.js";
import { createUser, deleteUser, getUser, getUserById, updateUser } from "../controllers/userController.js";
import { createTransaction, deleteStatusTransaction, getTransaction, getTransactionById, updateStatusTransaction } from "../controllers/transaksiController.js";

const router = express.Router();

//PROPERTY
router.post("/property/post", createProperty);
router.get("/property", getProperty);
router.delete("/property/delete/:id", deleteProperty);
router.get("/property/find/:id", getPropertyById);
router.put("/property/update/:id", updateProperty);


// USER
router.get("/user", getUser);
router.get("/user/find/:id", getUserById);
router.post("/user/post", createUser);
router.delete("/user/delete/:id", deleteUser);
router.put("/user/update/:id", updateUser);


//TRANSAKSI
router.get("/transaction", getTransaction);
router.get("/transaction/find/:id", getTransactionById);
router.post("/transaction/post", createTransaction);
router.delete("/transaction/delete/:id", deleteStatusTransaction);
router.put("/transaction/update/:id", updateStatusTransaction);



export default router;