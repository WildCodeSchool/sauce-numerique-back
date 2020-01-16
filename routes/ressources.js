const { Ressources }  = require('../models');
const express = require('express');
const router  = express.Router();


router.get('/:id', async(req,res) => {
    const { id } = req.params;
    const oneRessources = await Ressources.findOne({where: { id }})
    res.send(oneRessources)
    });

// resources?limit=7
router.get('/', async(req, res) => {
    const { count, rows } = await Ressources.findAndCountAll({ limit: Number(req.query.limit) })
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.header('X-Total-Count', count);
    res.send(rows) 
});
    
  
router.post('/', async (req, res) => {
    const { title, theme, description } = req.body
    const NewRessources =await Ressources.create({ title, theme, description})
    res.send(NewRessources);
  });

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, theme, description } = req.body;
    const UpdateRessources = await Ressources.update({ title, theme, description }, {where: { id }});
    res.send(UpdateRessources);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Ressources.destroy({ where: { id }});
    res.send(id);
});


module.exports = router;