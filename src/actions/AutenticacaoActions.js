import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';
import b64 from 'base-64';
import {
  MODIFICA_NOME,
  NODIFICA_EMAIL,
  MODIFICA_SENHA,
  CADASTRO_USUARIO_SUCESSO,
  CADASTRO_USUARIO_ERRO,
  LOGIN_USUARIO_SUCESSO,
  LOGIN_USUARIO_ERRO,
  LOGIN_EM_ANDAMENTO,
  CADASTRO_EM_ANDAMENTO,
} from './types';

export const modificaNome = texto => {
  return {
    type: MODIFICA_NOME,
    payload: texto,
  };
};

export const modificaEmail = texto => {
  return {
    type: NODIFICA_EMAIL,
    payload: texto,
  };
};

export const modificaSenha = texto => {
  return {
    type: MODIFICA_SENHA,
    payload: texto,
  };
};

export const cadastraUsuario = ({nome, email, senha}) => {
  return dispatch => {
    dispatch({type: CADASTRO_EM_ANDAMENTO});

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(user => {
        let emailB64 = b64.encode(email);

        firebase
          .database()
          .ref(`/usuarios/${emailB64}`)
          .push({nome})
          .then(value => cadastroUsuarioSucesso(dispatch))
          .catch(err => err);
      })
      .catch(erro => cadastroUsuarioErro(erro, dispatch));
  };
};

const cadastroUsuarioSucesso = dispatch => {
  dispatch({
    type: CADASTRO_USUARIO_SUCESSO,
  });
  Actions.boasVindas();
};

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({
    type: CADASTRO_USUARIO_ERRO,
    payload: erro.message,
  });
};

export const autenticaUsuario = ({email, senha}) => {
  return dispatch => {
    dispatch({type: LOGIN_EM_ANDAMENTO});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(value => loginUsuarioSucesso(dispatch))
      .catch(erro => loginUsuarioErro(erro, dispatch));
  };
};
const loginUsuarioSucesso = dispatch => {
  dispatch({
    type: LOGIN_USUARIO_SUCESSO,
  });
  Actions.principal();
};

const loginUsuarioErro = (erro, dispatch) => {
  console.log(erro);
  dispatch({
    type: LOGIN_USUARIO_ERRO,
    payload: erro.message,
  });
};

//CRUD EVENTOS

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

export function postEvento(title, content, dataEvento) {
  return dispatch => {
    firebase
      .database()
      .ref('/eventos')
      .push({title, content, dataEvento});
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

export function editEvento(title, content, dataEvento, key) {
  return dispatch => {
    firebase
      .database()
      .ref(`/eventos`)
      .child(key)
      .update({title, content, dataEvento});
  };
}
