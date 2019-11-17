require('dotenv').config();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const helpers = {};

helpers.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

helpers.matchPassword = async(password, savedPassword) => {
    try {
        return await bcrypt.compare(password, savedPassword);
    } catch (e) {
        console.log(e);
    }
};

// helpers.tokenVerify = async(req, res, next) => {
//     try {
//         //Obtener los headers y el nombre del header que estoy buscando especificamente
//         // let token = req.get("token");
//         let { email, password, token } = req.body;

//         for (let i = 0; i < token.length; i++) {

//             /* Verificar el token, recibe el token de los headers, SEED, semilla o llave secreta y un callBack con un error y la informacion decodificad(ESTO ES OPCIONAL Y SE PUEDE REEMPLAZAR CON ASYNC AWAIT),
//             en simple palabras el decoded es todo el payload */
//             const decoded = await jwt.verify(token[i].token, process.env.SECRETE_KEY);
//             // const validPassword = await helpers.matchPassword(password, decoded.usuarioDB.password);

//             if (decoded.usuarioDB.email === email) {
//                 req.usuarioDB = decoded.usuarioDB
//                 console.log(req.usuarioDB);
//                 return next();
//             } else {
//                 console.log(`El token # ${i} no es Compatible`);
//             }
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

helpers.tokenVerify = async(req, res, next) => {
    try {
        /* Obtener los headers y el nombre del header que estoy buscando especificamente */
        let token = req.get("token");

        /* Verificar el token, recibe el token de los headers, SEED, semilla o llave secreta y un callBack con un error y la informacion decodificad(ESTO ES OPCIONAL Y SE PUEDE REEMPLAZAR CON ASYNC AWAIT).En simple palabras el decoded es todo el payload */
        const decoded = await jwt.verify(token, process.env.SECRETE_KEY);

        req.usuario = decoded; //Cualquier petición obtiene la información del usuario
        return console.log(req.usuario);
        next();

    } catch (error) {
        console.log(error);
    }
}

module.exports = helpers;