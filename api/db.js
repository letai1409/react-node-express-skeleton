import MongoClient from 'mongodb';
import co from 'co';
import { DATABASE } from './settings';

let state = {
  db: null
};

export const initDB = () => {
  return co(function*() {
    // Connection URL
    const url = DATABASE.urlConnection;
    // Use connect method to connect to the Server
    state.db = yield MongoClient.connect(url);
  });
};

export const getDB = () => {
  return state.db;
};

export const dropDB = () => {
  return state.db.dropDatabase();
};

export const closeDB = () => {
  if (state.db) {
    state.db.close(function() {
      state.db = null;
    });
  }
};

export const getCollectionNames = () => {
  return state.db.getCollectionNames;
};
