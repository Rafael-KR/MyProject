import firebase from '../../fb';

export function getEvento() {
  return dispatch => {
    dispatch({
      type: 'EVENTOS_LOADING_STATUS',
      payload: true,
    });

    firebase
      .database()
      .ref('/eventos')
      .on('value', snapshot => {
        dispatch({
          type: 'EVENTOS_FETCH',
          payload: snapshot.val(),
        });

        dispatch({
          type: 'EVENTOS_LOADING_STATUS',
          payload: false,
        });
      });
  };
}

export function postEvento(title, local, dataEvento) {
  return dispatch => {
    firebase
      .database()
      .ref('/eventos')
      .push({title, local, dataEvento});
  };
}

export function deleteEvento(key) {
  return dispatch => {
    firebase
      .database()
      .ref(`/eventos/${key}`)
      .remove();
  };
}

export function editEvento(title, local, dataEvento, key) {
  return dispatch => {
    firebase
      .database()
      .ref(`/eventos`)
      .child(key)
      .update({title, local, dataEvento});
  };
}
