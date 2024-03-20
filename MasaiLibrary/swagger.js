const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');

const swaggerDefinition = yaml.load('./swagger.yaml');

const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'], // Path to the API routes folder
};

const swaggerSpec = swaggerJsdoc(options);


module.exports={
    swaggerSpec
}

