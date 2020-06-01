const mongoose = require('mongoose');
const Project = mongoose.model('Project');

module.exports = {
    async findAll(request, response) {
        const {page = 1} = request.query;
        const projects = await Project.paginate({}, {page: page, limit: 10});
        return response.json(projects);
    },

    async findById(request, response){
        const project = await Project.findById(request.params.id);
        return response.json(project);
    },

    async save(request, response){
        const project = await Project.create(request.body);
        return response.json(project);
    },

    async update(request, response){
        const project = await Project.findByIdAndUpdate(request.params.id, request.body, {new : true});
        return response.json(project);
    },

    async delete(request, response){
        await Project.findByIdAndRemove(request.params.id);
        return response.json({resposta: "Item deletado"});
    }
};