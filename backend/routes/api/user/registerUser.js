const { Router } = require('express');
const router = Router();

/* Hace referencia a la conexion de la BD */
const poolConnection = require('../../../lib/dbConnect');

router.get('/typeDocuments', async(req, res, next) => {
    const documents = await poolConnection.query('SELECT * FROM documents');
    res.json({documents});
});

router.get('/neighborhoods', async(req, res, next) => {
    const neighborhoods = await poolConnection.query('SELECT * FROM neighborhoods');
    res.json({neighborhoods});
});

router.get('/houses', async(req, res, next) => {
    const houses = await poolConnection.query('SELECT * FROM houses');
    res.json({houses});
});

router.post('/createUser', async (req, res, next) => {
    let { fullName, numberDocument, mobilePhone, email, password, confirmPassword, addressHome, membersHome,
         document_id, neighborhood_id, house_id } = req.body;

         /* Este espacio es para realizar las validaciones de los datos
         antes de que entren o lleguen a la base de datos */

    const newUser = {
        fullName,
        numberDocument,
        mobilePhone,
        email,
        password,
        confirmPassword,
        addressHome,
        membersHome,
        document_id,
        neighborhood_id,
        house_id
        // user_id: req.user.id //aqui toma la session del usuario
        // que se definio de forma global.
    }

    console.log(newUser);
    // await poolConnection.query('INSERT INTO users SET ?', [newUser]);
});

module.exports = router;