import { IUser } from './types';

export function addUser(user: IUser) {
  return {
    type: 'ADD_USER',
    payload: user,
  };
}
