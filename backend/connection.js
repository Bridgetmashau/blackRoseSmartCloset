
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'blackrosesmartcloset',
  password: 'Letsdoit!',
  port: 5432,
})

module.exports = pool;