// require('dotenv').config();
const { Router } = require('express');
// const jwt = require('jsonwebtoken');
const router = Router();

/* Hace referencia a la conexion de la BD */
const poolConnection = require('../../../lib/dbConnect');
const { encryptPassword, matchPassword } = require('../../../lib/helpers');

router.post('/loginUser', async(req, res, next) => {

    const { email, password } = req.body;
    const responseEmail = await poolConnection.query('SELECT * FROM users WHERE email = ?', [email]);

    if (responseEmail == '') {
        return res.status(404).json({
            ok: false,
            error: {
                message: "El email del Usuario no existe en la BD"
            }
        });
    }

    /* Obtenemos un true o un false depende del match */
    const user = responseEmail[0]; //Del arreglo de la consulta obtengo la posicion CERO.
    const validPassword = await matchPassword(password, user.password);
    // console.log(validPassword); //me devuelve un true o false

    if (!validPassword) {
        return res.status(404).json({
            ok: false,
            error: {
                message: "Las contraseñas en la BD no coinciden"
            }
        });
    }

    /* let token = jwt.sign({
        usuarioDB: user
    }, process.env.SECRETE_KEY, { expiresIn: process.env.FINAL_TOKEN });
 */
    res.status(200).json({
        ok: true,
        usuario: user,
        token
    });
});

module.exports = router;