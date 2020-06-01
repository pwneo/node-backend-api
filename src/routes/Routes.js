const express = require('express');
const routes = express.Router();
const ProjectController = require('../controllers/ProjectController');

routes.get('/projects', ProjectController.findAll);
routes.get('/projects/:id', ProjectController.findById);
routes.post('/projects', ProjectController.save);
routes.put('/projects/:id', ProjectController.update);
routes.delete('/projects/:id', ProjectController.delete);

module.exports = routes;