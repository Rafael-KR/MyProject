import {combineReducers} from 'redux';
import AutenticacaoReducer from './AutenticacaoReducer';
import BlogReducer from './BlogReducer';
import LoadingReducer from './LoadingReducer';

export default combineReducers({
  AutenticacaoReducer: AutenticacaoReducer,
  blogsList: BlogReducer,
  loadingReducer: LoadingReducer,
});
