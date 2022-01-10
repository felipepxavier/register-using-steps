import { Reducer } from 'redux';
import { IUser } from './types';

const users: Reducer<IUser[]> = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER': {
      const user = action.payload;
      return [...state, user];
    }

    default: {
      return state;
    }
  }
};

export default users;
