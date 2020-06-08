
exports.up = async knex => {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
  return knex.schema.createTable('users', t => {
    t.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary()
    t.string('dni', 16).unique().notNullable()
    t.string('email', 255).unique().notNullable()
    t.string('password', 100).notNullable()
    t.timestamp('created_at').defaultTo(knex.fn.now())
    t.timestamp('updated_at').defaultTo(knex.fn.now())
    t.timestamp('deleted_at').nullable()
  })
};

exports.down = async knex => {
  return knex.schema.dropTable('users')
};
