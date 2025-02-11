import 'dotenv/config'
import Admin from '../model/adminModel.js';
// import jwt from "jsonwebtoken";
// import { verifyToken } from '../middleware/verifyToken.js';


export const createAdmin = async (req, res) => {
    try {
      const { email, password} = req.body;
  
      const admin = await Admin.create({
        email,
        password,
      });
  
      res.status(201).json(admin);
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
      const { name, email, password } = req.body;
      const [updated] = await Admin.update(
        { name, email, password },
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

  // export const loginAdmin = async (req, res) => {
  //   try {
  //       const admin = await Admin.findOne({
  //           where: {
  //               email: req.body.email
  //           }
  //       })
  //       if (admin !== null) {

  //           const match = req.body.password === admin.password
  //           console.log(match)
  //           if (!match) {
  //               console.log('password')
  //               res.status(400).json("password salah")
  //           }else {
  //               const adminId = admin.id
  //               const email = admin.email
  //               const password = admin.password

  //           //? payload
  //           const accessToken = jwt.sign({ adminId, email, password }, process.env.SECRET_ACCESS_TOKEN, {
  //               expiresIn: '1h'
  //           })
  //           const refreshToken = jwt.sign({ adminId, email, password }, process.env.SECRET_REFRESH_TOKEN, {
  //               expiresIn: '1d'
  //           })

  //           //? simpan refresh token dalam database
  //           await Admin.update({ refresh_token: refreshToken }, {
  //               where: {
  //                   id: adminId
  //               }
  //           })
            
  //           res.cookie('refreshToken', refreshToken, {
  //               httpOnly: true,
  //               maxAge: 24 * 60 * 60 * 1000,
                
  //           })
            

  //           res.json({ accessToken })
  //       }
  //       } else {

  //           res.status(500).json("Email belum terdaftar")
  //       }
  //   } catch (err) {
  //       res.status(500).json(err)
