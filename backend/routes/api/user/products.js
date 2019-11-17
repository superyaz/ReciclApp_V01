const { Router } = require('express');
const router = Router();

const poolConnection = require('../../../lib/dbConnect');

router.get('/listProducts', async(req, res, next) => {
    // const productsDB = poolConnection.query('SELECT');
    res.json({
        // productsDB
    });
});

router.delete('/deleteProduct/:id', async(req, res, next) => {
    const { id } = req.params;
    // const productDB = await poolConnection.query('DELETE');

    res.json({
        id,
        // productDB
    });
});

module.exports = router;