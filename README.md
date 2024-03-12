# API REST - Node.js / Express.js

First of all, clone the repository using the following command:
```
git clone https://github.com/davidcpatricio/api_rest_js
```

In order to run the API with SQLite, copy the content from `.env_example` to `.env`.  

You also need to add a secret key in `.env`:

```
TOKEN_SECRET='INSERT_YOUR_SECRET_KEY_HERE'
```

Execute the following commands:

```
npm i
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```
Your API should be running in the following address: http://127.0.0.1:3001/.
Use the following configurations in `src/config/database.js:
```javascript
require('dotenv').config();
module.exports = {
  dialect: 'sqlite',
  storage: './db.sqlite',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};
```

NOTE: All configurations starting with `process.env.` come from `.env`.
The username and password data from seed files are as followed:
- email = admin@email.com
- password = 123456

You can obtain JWT token in route `/tokens` using the following JSON data:
```json
{
	"email": "admin@email.com",
	"password": "123456"
}
```
Headers:
```
Content-Type	application/json; charset=utf-8
```
