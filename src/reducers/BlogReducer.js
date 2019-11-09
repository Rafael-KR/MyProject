export default function(state = {}, action) {
  switch (action.type) {
    case 'EVENTOS_FETCH':
      return {
        ...state,
        blogsList: action.payload,
      };

    default:
      return state;
  }
}
