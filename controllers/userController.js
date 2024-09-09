import User from "../model/UserModel.js";
import Transaction from "../model/transaksiModel.js";
import Property from "../model/propertyModel.js";

export const createUser = async (req, res) => {
    try {
      const { name, email, phone, role } = req.body;
  
      const user = await User.create({
        name,
        email,
        phone,
        role
      });
  
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const getUser = async (req, res) => {
    try {
      const user = await User.findAll();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) return res.status(404).json({ message: "User tidak dapat ditemukan" });
      res.status(200).json(film);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, phone, role } = req.body;
      const [updated] = await User.update(
        { name, email, phone, role },
        { where: { id } }
      );
      if (updated) {
        const updateUser = await User.findByPk(id);
        res.status(200).json(updateUser);
      } else {
        res.status(404).json({ message: "User Tidak Ditemukan" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await User.destroy({ where: { id } });
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "User Tidak Ditemukan" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };