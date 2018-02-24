import { Router } from 'express';
import { apiValidator } from './middleware';
import { TopicController } from './controllers/index';

const routes = new Router();

// Topics
routes.get('/topics', TopicController.getTopics);

export default routes;
