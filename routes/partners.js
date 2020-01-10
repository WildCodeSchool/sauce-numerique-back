const { Partners }  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/:id', async(req,res) => {
    const { id } = req.params;
    const onePartners = await Partners.findOne({where: { id }})
    res.send(onePartners)
    });
      
router.get('/', async(req, res) => {
    const { count, rows } = await Partners.findAndCountAll()
    const AllPartners = await Partners.findAll()
    res.header('Access-Control-Expose-Headers', 'X-Total-Count');
    res.header('X-Total-Count', count);
    res.send(AllPartners) 
    });
    
    
router.post('/', async (req, res) => {
    const { name, logo } = req.body
    const NewPartners =await Partners.create({name, logo})
    res.send(NewPartners);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, logo} = req.body;
    const UpdatePartners = await Partners.update({ name, logo }, {where: { id }});
    res.send(UpdatePartners);

});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Partners.destroy({ where: { id }});
    res.send(id);
});

module.exports = router;