import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { IUser } from './modules/users/types';

export type IState = {
  users: IUser[];
};

const store = createStore(rootReducer);

export default store;
