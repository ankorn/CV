import { Map } from 'immutable';

import { ADD_TASK, DELETE_TASK } from '../constants';

export default (state = Map(), action) => {
  const { type, id } = action;

  switch(type) {
    case ADD_TASK:
      
  }
}