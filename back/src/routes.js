const express = require('express')
const crypto = require('crypto')

const connection = require('./database/connection');
const { request } = require('http');

const routes = express.Router();

routes.get('/list', async (request, response) => {
    const schedules = await connection('schedules').select('*');

    return response.json(schedules);
})

routes.post('/agendar', async (request, response) => {
    const { name, date, array } = request.body;
    const id = crypto.randomBytes(1).toString('HEX');
    await connection('schedules').insert({
        id,
        name,
        array,
        date
    })
    return response.json({ id })
});

routes.delete('/delete', async (request, response) => {
    await connection('schedules').delete('*')

    return response.json({ 'deleted': 'success' })
});

module.exports = routes
