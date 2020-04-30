
exports.up = function (knex) {
    return knex.schema.createTable('schedules', function (table) {
        table.increments();

        table.string('services').notNullable();
        table.string('date').notNullable();
        table.string('hour').notNullable();
        table.decimal('value').notNullable();

        table.string('user_id').notNullable();

        table.foreign('user_id').references('id').inTable('Users');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('schedules');
};
