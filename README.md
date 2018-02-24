# Run the Application

## Prerequisite

* Node/npm installed
* MongoDB installed - https://docs.mongodb.com/manual/administration/install-community/
* MongoDB up and running at port 27017

## Development

### Running with hot reloading webpack

**Backend**

At root folder
```
npm install

npm start // Build for server side only

```

Swagger served at: http://localhost:3001/docs/

Unit test
```
npm test
```
**Frontend**

On a new Terminal window:

```
cd client
npm install
npm start
```
Client served at http://localhost:3000/ 


### Running with built files on node server

**Create build files**

```
cd client
npm install
npm run build
```
**Running on node server**

Go to root folder
```
npm install
npm start
```
Client served at http://localhost:3001/ 

API served at: http://localhost:3001/api/v1/

Swagger served at: http://localhost:3001/docs/

**How this works**

The key to use an Express backend with a project created with create-react-app is on using a proxy. We have a proxy entry in client/package.json

This tells Webpack development server to proxy our API requests to our API server, given that our Express server is running on localhost:3100



