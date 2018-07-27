let initState = {
  lists: []
};

// ACTION TYPES - variables that tell us what to do
const ADD_LIST = 'ADD_LIST';

export default function reducer(state = initState, action) {
  // HANDLE ACTIONS
  switch(action.type) {
    case ADD_LIST: 
      return Object.assign({}, state, { lists: [...state.lists, action.payload] });
    default:
      return state;
  }
}

// ACTION CREATORS - functions that carry the "payload"
// list will be an object with keys id, title, and items
export function addList(list) {
  return {
    type: ADD_LIST,
    payload: list
  };
}