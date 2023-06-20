import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUser = (req, res) => {
  const userId = req.params.userId;
  const q = "SELECT * FROM users WHERE id=?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(500).json(err);
    const { password, ...info } = data[0];
    return res.json(info);
  });
};

export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).json("Nao esta autenticado!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token invalido!");

    if (req.params.userId !== userInfo.id) {
      return res.status(403).json("Voce so pode atualizar seu proprio perfil!");
    }

    const q =
      "UPDATE users SET `name`=?,`city`=?,`website`=?,`experience`=?,`job`=?,`profilePic`=?,`coverPic`=? WHERE id=?";

    db.query(
      q,
      [
        req.body.name,
        req.body.city,
        req.body.website,
        req.body.experience,
        req.body.job,
        req.body.coverPic,
        req.body.profilePic,
        userInfo.id,
      ],
      (err, data) => {
        if (err) res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Atualizado!");
        return res.status(403).json("Voce so pode atualizar seu proprio perfil!");
      }
    );
  });
};
