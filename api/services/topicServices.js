import { getDB } from '../db';
import { BaseServices } from './shared/baseServices';

export const TopicServices = () => {
  return Object.assign(
    {
      getTopicsByCategory: category => {
        return new Promise((resolve, reject) => {
          getDB().collection('topic').find({
            $and: [{ isActive: { $nin: [false] } }, { category: category }]
          }).toArray((err, result) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
      }
    },
    BaseServices('topic')
  );
};
