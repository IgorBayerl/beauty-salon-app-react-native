const connection = require('../database/connection');

module.exports = {
    async create(request, response) {

        const { id } = request.body;

        const user = await connection('Users')
            .where('id', id)
            .select('name')
            .first();

        if (!user) {
            return response.status(400).json({ error: 'No User found with this ID' });
        }

        return response.json(user);
    }
}