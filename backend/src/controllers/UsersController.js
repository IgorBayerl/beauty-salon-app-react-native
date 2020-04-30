const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json(users);
    },


    async create(request, response) {
        const { name, phone, email } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        const fidelity = "0"

        await connection('users').insert({
            id,
            name,
            phone,
            email,
            fidelity,
        })

        return response.json({ id });
    }
};





// module.exports = {
//     async create(request, response) {

//     }
// };