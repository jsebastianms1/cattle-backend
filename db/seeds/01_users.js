
exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('users').del()
  // Inserts seed entries
  await knex('users').insert({ dni: '1234', email: 'test@mock.com', 'password': 'shouldbehashed'  })
}
