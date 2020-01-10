const { Ressources }  = require('../models');
const express = require('express');
const router  = express.Router();


router.get('/:id', async(req,res) => {
    const { id } = req.params;
    const oneRessources = await Ressources.findOne({where: { id }})
    res.headers['X-Total-Count'] = '30'
    res.headers['Access-Control-Expose-Headers'] = 'X-Total-Count'
    res.send(oneRessources)
    });

router.get('/', async(req, res) => {
    const AllRessources = await Ressources.findAll()
    res.header('Access-Control-Expose-Headers X-Total-Count') 
    res.send(AllRessources) 
    });
  
router.post('/', async (req, res) => {
    const { title, theme, description } = req.body
    const NewRessources =await Ressources.create({ title, theme, description})
    res.headers['X-Total-Count'] = '30'
    res.headers['Access-Control-Expose-Headers'] = 'X-Total-Count'
    res.send(NewRessources);
  });

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, theme, description } = req.body;
    const UpdateRessources = await Ressources.update({ title, theme, description }, {where: { id }});
    res.headers['X-Total-Count'] = '30'
    res.headers['Access-Control-Expose-Headers'] = 'X-Total-Count'
    res.send(UpdateRessources);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Ressources.destroy({ where: { id }});
    res.headers['X-Total-Count'] = '30'
    res.headers['Access-Control-Expose-Headers'] = 'X-Total-Count'
    res.send(id);
});











module.exports = router;