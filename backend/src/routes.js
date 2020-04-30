const express = require('express');

const UserController = require('./controllers/UsersController');
const SchedulesController = require('./controllers/SchedulesController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Login
routes.post('/session', SessionController.create);


// usuarios
routes.get('/users', UserController.index);
routes.post('/users', UserController.create);

//listar horarios de um cliente
routes.get('/profile', ProfileController.index);


// agendanmentos
routes.get('/schedules', SchedulesController.index);
routes.post('/schedules', SchedulesController.create);
routes.delete('/schedules/:id', SchedulesController.delete);


module.exports = routes;