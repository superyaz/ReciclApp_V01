const { Router } = require('express');
const router = Router();

const poolConnection = require('../../../lib/dbConnect');

router.get('/appointments', async(req, res, next) => {
    const appointments = await poolConnection.query('SELECT users.id, documents.typeDocument, numberDocument, fullName, email, addressHome, neighborhoods.neighborhood FROM users INNER JOIN documents ON users.document_id = documents.id INNER JOIN neighborhoods ON neighborhoods.id = users.neighborhood_id ORDER BY id ASC');
    res.json({ appointments });
});

module.exports = router;