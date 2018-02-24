import express from 'express';
import path from 'path';

import httpContext from 'express-http-context';
import { httpStatus, corsHandler } from './api/middleware/index';

import routes from './api/routes';
import swagger from './api/swagger';
import { initDB, dropDB } from './api/db';
import { importData } from './api/importData';
import { API } from './api/settings';
import { fail } from 'assert';

export const app = express(),
  bodyParser = require('body-parser'),
  expressValidator = require('express-validator'),
  port = API.port;

const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(httpContext.middleware);
app.use(corsHandler);
app.use(httpStatus); // This middleware have to run before routes
app.use(expressValidator());

app.use('/api/v1', routes);

app.use('/static', express.static(path.join(__dirname, 'client/build/static')));

// Serve static files from the React app
app.get('*', (req, res, next) => {
  if (req.path.includes('/docs/') || req.path.includes('/api-docs')) {
    next();
  } else {
    res.sendFile(path.join(__dirname + '/client/build/index.html'), null, err => {
      if (err)
        console.log('Client build files are not found.');
      next();
    });
  }
});

swagger().then(swagger => {
  app.use(swagger);
}, err => {
  console.log(err);
});

let isServerRunning = false;

initDB().then(() => {
  dropDB().then(result => {
    console.log('Dropped DB');
    importData().then(() => {
      console.log('Import data successfully')
      app.listen(port, () => {
        isServerRunning = true;
        console.log('listening at port: ', port);
      })
    })
  })
}).catch(err => {
  reject(err);
});

export const serverReady = () => isServerRunning;
