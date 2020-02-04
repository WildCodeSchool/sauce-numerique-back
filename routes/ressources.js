const { Ressources, Sequelize }  = require('../models');
const express = require('express');
const router  = express.Router();
const { Op } = Sequelize

router.get('/:id', async(req,res) => {
    const { id } = req.params;
    const oneRessources = await Ressources.findOne({where: { id }})
    res.send(oneRessources)
    });
    
router.get('/', async(req, res) => {
    const { limit, q, _order, term, _sort, _end, _start } = req.query
    const { count, rows } = await Ressources.findAndCountAll({
         where: {
            ...q && {
                title: {
                    [Op.substring]: q
                }
            },
            ...term && {
                id: {
                    [Op.substring]: term
                }
            }       
        },
        limit: _end - _start,
        offset: Number(_start),
        order: [
            [
                _sort, _order
            ]
        ]
    })
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.header('X-Total-Count', count);
    res.send(rows) 
});

  
router.post('/', async (req, res) => {
    const { title, theme, description, lien } = req.body
    const NewRessources =await Ressources.create({ title, theme, description, lien})
    res.send(NewRessources);
  });

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, theme, description, lien } = req.body;
    const UpdateRessources = await Ressources.update({ title, theme, description, lien }, {where: { id }});
    res.send(UpdateRessources);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Ressources.destroy({ where: { id }});
    res.send(id);
});


module.exports = router;