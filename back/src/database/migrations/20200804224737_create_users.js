
exports.up = function (knex) {
    return knex.schema.createTable('schedules', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('date').notNullable();
        table.string('array').notNullable();
    });
};

exports.down = function (knex) {
    knex.schema.dropTable('schedules');
};
