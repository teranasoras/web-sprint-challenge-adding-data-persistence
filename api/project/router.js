// build your `/api/projects` router here
const router = require('express').Router();
const Projects = require('./model.js');


router.get('/', (req, res) => {
    Projects.getall()
    .then(projects => {
        res.status(200).json(projects);
      })
      .catch(error => {
        res.status(500).json(error);
      });
})

router.post('/', (req, res) => {
    const project = req.body;

    Projects.add(project)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
})