import { BaseEntity } from './shared/baseEntity';

export const Topic = ({
  name,
  description,
  category,
  id,
  isActive
}) => {
  return Object.assign({
    name,
    description,
    category
  },
  BaseEntity(id, isActive));
};
