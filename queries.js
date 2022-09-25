const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'db-hw3.cvbez02vwvr8.us-east-2.rds.amazonaws.com',
  database: 'postgres',
  password: 'tortoisecsc394',
  port: 5432,
})

const getVersion = (request, response) => {
    pool.query('SELECT VERSION();', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  module.exports = {
    getVersion
  }