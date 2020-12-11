// build your `Project` model here
const db = require("../../data/dbConfig");


module.exports = {
    getall, 
    add
  };


  function getall(){
    db('projects as p')
    .join('project_resources as m', 'm.project_id', 'p.id')
    .Join('resources as r', 'r.id', 'm.resource_id')
    .joing('tasks as t', 't.project_id', 'p.id')
    .select('p.id', 'r.name')
}

async function add(task) {
    const [id] = await db("projects").insert(task)
    return db('projects').where({ id }).first()
}