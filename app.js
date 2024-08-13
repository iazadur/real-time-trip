const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('js-yaml');

const app = express();
const port = 3000;

// Load Swagger YAML file
const swaggerDocument = yaml.load(fs.readFileSync('./swagger.yaml', 'utf8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
  res.send('Hello, visit /api-docs to see the API documentation.');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Run the app.js file using the following command:
// node app.js
// Open your browser and visit http://localhost:3000/api-docs

