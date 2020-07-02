const INIT_STATE = { memes: [] };

const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, memes: [...state.memes, action.payload] };

    case 'REMOVE':
      return { ...state, memes: state.memes.filter(m => m.name !== action.payload) };

    default:
      return state;
  }
}


export default rootReducer;