const repl = require('repl');
const Knex = require('knex')
const { dev } = require('./db/knexfile')
const knex = Knex(dev)

const r = repl.start('Knex console > ');
const run = async () => {
   r.context.knex = await knex;
};
run();