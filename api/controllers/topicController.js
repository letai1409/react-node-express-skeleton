import { TopicServices } from '../services/index';

export const TopicController = {
  getTopics(req, res) {
    TopicServices().getAll().then(result => {
      res.ok(result);
    }).catch(err => {
      res.badRequest(err);
    });
  },

  getTopicById(req, res) {
    TopicServices().getById(req.params.id).then(result => {
      res.ok(result);
    }).catch(err => {
      res.badRequest(err);
    });
  },

  createTopic(req, res) {
    TopicServices().create(req.body).then(result => {
      res.ok(result);
    }).catch(err => {
      res.badRequest(err);
    });
  },

  updateTopic(req, res) {
    TopicServices().update(req.params.id, req.body).then(result => {
      res.ok(result);
    }).catch(err => {
      res.badRequest(err);
    });
  },

  deleteTopic(req, res) {
    TopicServices().delete(req.params.id).then(result => {
      res.ok(result);
    }).catch(err => {
      res.badRequest(err);
    });
  }
};
