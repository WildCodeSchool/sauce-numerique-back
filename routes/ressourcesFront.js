const { Ressources }  = require('../models');
const express = require('express');
const router  = express.Router();


router.get('/', async(req, res) => {
    const { limit } = req.query
    const { count, rows } = await Ressources.findAndCountAll(limit && { limit: Number(limit) })
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.header('X-Total-Count', count);
    res.send(rows) 
});





module.exports = router;