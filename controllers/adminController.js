import User from "../model/UserModel.js";
// import Transaction from "../model/transaksiModel.js";
// import Property from "../model/propertyModel.js";
import Admin from "../model/adminModel.js";



export const createAdmin = async (req, res) => {
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

  export const getAdmin = async (req, res) => {
    try {
      const admin = await Admin.findAll();
      res.status(200).json(admin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const getAdminById = async (req, res) => {
    try {
      const { id } = req.params;
      const admin = await Admin.findByPk(id);
      if (!admin) return res.status(404).json({ message: "Admin tidak dapat ditemukan" });
      res.status(200).json(admin);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const updateAdmin = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, phone, role } = req.body;
      const [updated] = await Admin.update(
        { name, email, phone, role },
        { where: { id } }
      );
      if (updated) {
        const updateAdmin = await User.findByPk(id);
        res.status(200).json(updateAdmin);
      } else {
        res.status(404).json({ message: "Admin Tidak Ditemukan" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const deleteAdmin = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Admin.destroy({ where: { id } });
      if (deleted) {
        res.status(404).json({ message: "Data Admin Berhasil Dihapus Dari Database"});
      } else {
        res.status(404).json({ message: "Admin Tidak Ditemukan" });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };