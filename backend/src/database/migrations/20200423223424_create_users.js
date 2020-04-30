
exports.up = function (knex) {
    return knex.schema.createTable('Users', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.string('email').notNullable();
        table.string('fidelity').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('Users');
};

// npx knex migrate:latest
// npx knex migrate:make create_

// table.foreign('ong_id').references('id').inTable('ongs')