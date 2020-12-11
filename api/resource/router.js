// build your `/api/resources` router here
const router = require('express').Router();
const Resources = require('./model.js');



router.get('/', (req, res) => {
    Resources.getall()
        .then(tasks =>{
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({message: err.message});
        })
})

router.post('/', async(req, res) => {
    const resource = req.body;

    Resources.add(resource)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
})