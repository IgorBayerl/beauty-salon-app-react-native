const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('schedules').count();

        const schedules = await connection('schedules')
            .join('users', 'user_id', '=', 'schedules.user_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'schedules.*',
                'users.name',
                'users.phone',
                'users.email',
                'users.fidelity'
            ]);


        response.header('X-Total-Count', count['count(*)']);

        return response.json(schedules);
    },



    async create(request, response) {

        const { services, date, hour, value } = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection('schedules').insert({
            services,
            date,
            hour,
            value,
            user_id,
        });

        return response.json({ id });
    },


    async delete(request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;


        const schedules = await connection('schedules')
            .where('id', id)
            .select('user_id')
            .first();

        if (schedules.user_id !== user_id) {
            return response.status(401).json({ error: 'Opperation not permitted. ' });
        }

        await connection('schedules').where('id', id).delete();

        return response.status(204).send();
    }
};