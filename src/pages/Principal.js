//import liraries
import React, {Component} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
//import Post from './Post';

import {Actions} from 'react-native-router-flux';
import {getEvento, deleteEvento} from '../actions';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import Routes from '../components/App';

class Blogs extends Component {
  componentDidMount() {
    this.props.getEvento();
  }

  render() {
    return <Routes />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
});

function mapStateToProps(state) {
  const listaDeEventos = _.map(state.blogsList.blogsList, (val, key) => {
    return {
      ...val,
      key: key,
    };
  });

  return {
    listaDeEventos,
    loadingReducer: state.loadingReducer.loadingReducer,
  };
}

export default connect(
  mapStateToProps,
  {getEvento, deleteEvento},
)(Blogs);
