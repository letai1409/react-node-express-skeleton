import swaggerJSDoc from 'swagger-jsdoc';
import swaggerTools from 'swagger-tools';
import { API } from './settings';

// swagger definition
const swaggerDefinition = {
  info: {
    title: 'Security Selfie',
    version: '1.0.0',
    description: 'Security Selfie API specification'
  },
  host: API.endpoint,
  basePath: '/api/v1/'
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['api/swagger.yaml']
};

// initialize swagger-jsdoc
export const swaggerSpec = swaggerJSDoc(options);

const swagger = () => {
  return new Promise((resolve, reject) => {
    swaggerTools.initializeMiddleware(swaggerSpec, function(middleware) {
      // Serve the Swagger documents and Swagger UI
      if (middleware.swaggerUi()) {
        resolve(middleware.swaggerUi());
      } else {
        reject('Swagger failed installing');
      }
    });
  });
};

export default swagger;
