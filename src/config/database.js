require('dotenv').config();

module.exports = {
  /* SQLite */
  dialect: 'sqlite',
  storage: './db.sqlite',

  /* MySQL / MariaDB */
  // dialect: 'mariadb',
  // host: process.env.DATABASE_HOST,
  // port: process.env.DATABASE_PORT,
  // username: process.env.DATABASE_USERNAME,
  // password: process.env.DATABASE_PASSWORD,
  // database: process.env.DATABASE,
  // dialectOptions: {
  //   timezone: 'Europe/Lisbon',
  // },
  // timezone: 'Europe/Lisbon',

  /* ALL */
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    firstName: 'first_name',
    lastName: 'last_name',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },

};
