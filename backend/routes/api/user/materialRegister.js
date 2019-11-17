const { Router } = require('express');
const router = Router();

const poolConnection = require('../../../lib/dbConnect');

router.get('/typeMaterials', async(req, res, next) => {
    const materials = await poolConnection.query('SELECT * FROM typeMaterials');
    res.json({ ok: true, materials });
});

router.post('/createMaterial', async(req, res, next) => {
    const { codigoScanner, quantity, typeMaterial_id } = req.body;

    const newMaterial = {
        codigoScanner,
        quantity,
        typeMaterial_id
    }

    // await poolConnection.query('INSERT INTO collects SET ?', [newMaterial]);
    console.log(codigoScanner, typeMaterial_id, quantity);

    console.log(newMaterial)
    res.json({
        ok: true,
        materialRegistered: newMaterial
    });
});

module.exports = router;