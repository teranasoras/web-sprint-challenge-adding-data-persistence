// build your `/api/tasks` router here
const router = require('express').Router();
const Tasks = require('./model.js');


router.get('/', (req, res) => {
    Tasks.getall()
        .then(tasks =>{
            res.json(tasks);
        })
        .catch(err => {
            res.status(500).json({message: err.message});
        })
})

router.post('/', async(req, res) => {
    const resource = req.body;

    Tasks.add(resource)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
})