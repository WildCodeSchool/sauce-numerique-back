const { Partners }  = require('../models');
const express = require('express');
const router  = express.Router();

router.get('/:id', async(req,res) => {
    const { id } = req.params;
    const onePartners = await Partners.findOne({where: { id }})
    res.headers['X-Total-Count'] = 30
    res.headers['Access-Control-Expose-Headers'] = 'X-Total-Count'
    res.send(onePartners)
    });
      
router.get('/', async(req, res) => {
    const AllPartners = await Partners.findAll()
    res.headers['X-Total-Count'] = 30
    res.headers['Access-Control-Expose-Headers'] = 'X-Total-Count'
    res.send(AllPartners) 
    });
    
    
router.post('/', async (req, res) => {
    const { name, logo } = req.body
    const NewPartners =await Partners.create({name, logo})
    res.headers['X-Total-Count'] = 30
    res.headers['Access-Control-Expose-Headers'] = 'X-Total-Count'
    res.send(NewPartners);
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, logo} = req.body;
    const UpdatePartners = await Partners.update({ name, logo }, {where: { id }});
    res.headers['X-Total-Count'] = 30
    res.headers['Access-Control-Expose-Headers'] = 'X-Total-Count'
    res.send(UpdatePartners);

});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Partners.destroy({ where: { id }});
    res.headers['X-Total-Count'] = 30
    res.headers['Access-Control-Expose-Headers'] = 'X-Total-Count'
    res.send(id);
});

module.exports = router;