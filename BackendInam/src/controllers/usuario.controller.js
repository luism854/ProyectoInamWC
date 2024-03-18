import {pool} from '../database/conexion.js';
import jwt from 'jsonwebtoken';

export const obtenerUsuarios = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuario');
    if(rows.length >0){
      return res.status(200).json(rows);
    }else{
      return res.status(200).json({message: 'No se encontraron usuarios'});
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

export const obtenerUsuarioPorId = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await pool.query(`SELECT * FROM usuario WHERE identificacion = ${id}`);
    if (rows.length > 0) {
      return res.status(200).json(rows);
    } else {
      return res.status(403).json({ mensaje: 'Usuario no encontrado' });
    }
  } catch(e){
    res.status(500).json({ mensaje: e.message });
  }
};

// Crear un nuevo usuario
export const crearUsuario = async (req, res) => {
  try {
    const { tipo_usuario, nombre, correo, telefono, identificacion, contraseña, estado_usuario } = req.body;
    const [rows] = await pool.query(
      `INSERT INTO usuario (tipo_usuario, nombre, correo, telefono, identificacion, contraseña, estado_usuario) VALUES ('${tipo_usuario}','${nombre}','${correo}','${telefono}','${identificacion}','${contraseña}','${estado_usuario}')`
    );
      if(rows.affectedRows > 0){
        return res.status(200).json({ message: 'Usuario registrado con exito' })
      }
  } catch (e) {
    return res.status(500).json({ mensaje: e.message });
  }
};

export const actualizarUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const { nombre,identificacion,telefono,correo,contraseña,tipo_usuario,estado_usuario } = req.body;
    const sql = `UPDATE usuario SET  nombre = ?, identificacion = ?, telefono = ?, correo = ?,contraseña = ?,tipo_usuario = ?, estado_usuario = ? WHERE id_usuario = ?`
    const [rows] = await pool.query(sql,[nombre,identificacion,telefono,correo,contraseña,tipo_usuario,estado_usuario,id]);
    if(rows.affectedRows > 0){
      return res.status(200).json({ message: 'Se actualizó el usuario' });
    }else{
      return res.status(403).json({ message: 'El usuario no se actualizó' })
    }
  } catch(e){
    return res.status(500).json({ mensaje: e.message });
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const sql = `DELETE FROM usuario WHERE id_usuario = ${id}`;
    const [rows] = await pool.query(sql);
    if(rows.affectedRows > 0){
      return res.json({ mensaje: 'Usuario eliminado exitosamente' });
    }else{
      return res.json({ mensaje: 'El usuario no se eliminó' });
    }
  } catch(e){
    return res.status(500).json({ mensaje: e.message });
  }
};

export const validarUsuario = async(req,res)=> {
    try{
        let {identificacion,contraseña} = req.body;
        let sql = `SELECT id_usuario,nombre,telefono,correo,tipo_usuario,estado_usuario from usuario WHERE identificacion=? AND contraseña=?`;
        let [rows] = await pool.query(sql,[identificacion,contraseña]);
        if(rows.length>0){
            let token = jwt.sign({user:rows},process.env.SECRET,{expiresIn:process.env.TIME});
            return res.status(200).json({"message": "Usuario autorizado","token":token});
        }else{
            return res.status(404).json({"message": "Usuario no autorizado"});
        }
    }catch(e){
        return res.status(500).json({"message": e.message});
    }
}

export const validarToken = async(req,res,next)=> {
    try{
        let token_cliente = req.headers['token'];
        if(!token_cliente){
            return res.status(402).json({"message":"El token es requerido"});
        }else{
            let decode = jwt.verify(token_cliente,process.env.SECRET,(error,decoded)=>{
                if(error){
                    return res.status(402).json({"message":"El token es invalido"});
                }else{
                    next();
                }
            });
        }
    }catch(e){
        return res.status(500).json({"message": e.message});
    }
}

