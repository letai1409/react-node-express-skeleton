import co from 'co';
import { TopicServices } from './services/index';
import { Topic } from './models/index';
import topicData from './sample-data/topics.json';

export const importData = () => {
  return co(function* () {
    // topics
    const topics = Object.values(topicData);
    for (var i = 0; i <= topics.length - 1; i++) {
      yield TopicServices().create(Topic(topics[i]));
    }
  });
};

