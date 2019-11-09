//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableHighlight,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Post from './Post';
import firebase from 'firebase';

import {getEvento, deleteEvento} from '../actions';
import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';

class Blogs extends Component {
  componentDidMount() {
    this.props.getEvento();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#0097DA" />
        {this.props.loadingReducer ? (
          <Text
            style={{
              marginTop: 250,
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            Loading... Please wait!
          </Text>
        ) : (
          <FlatList
            style={{width: '100%', paddingTop: 5}}
            data={this.props.listaDeEventos}
            keyExtractor={item => item.key}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Edit', {...item})
                  }>
                  <View style={styles.item}>
                    <View style={styles.foto}>
                      <Image
                        style={{
                          height: 70,
                          width: 70,
                          borderRadius: 15,
                        }}
                        source={require('../assets/ulbra2.png')}
                        aspectRatio={1}
                        resizeMode="cover"
                      />
                    </View>

                    <View style={styles.destalhesItem}>
                      <Text style={styles.txtTitulo}>{item.title}</Text>
                      <Text style={styles.txtData}>
                        Date: {item.dataEvento}
                      </Text>
                      <Text style={styles.txtLocal}>Place: {item.local}</Text>
                      {/*<View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                          paddingRight: 20,
                        }}>
                        <TouchableHighlight
                          onPress={() =>
                            this.props.navigation.navigate('Edit', {...item})
                          }>
                          <View style={{marginRight: 20, paddingTop: 2}}>
                            <Icon size={30} color="black" name="edit" />
                          </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                          onPress={() => this.props.deleteEvento(item.key)}>
                          <View>
                            <Icon size={30} color="black" name="trash" />
                          </View>
                        </TouchableHighlight>
                      </View> */}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FC',
  },
  item: {
    backgroundColor: '#FFF',
    borderWidth: 0.8,
    borderColor: 'lightgray',
    margin: 6,
    padding: 5,
    flexDirection: 'row',
    borderRadius: 10,
    paddingBottom: 10,
    //marginHorizontal: 10,
  },
  foto: {
    justifyContent: 'center',
    width: 70,
    height: 70,
    alignItems: 'center',
    marginLeft: 10,
    marginVertical: 5,
    borderRadius: 15,
    borderWidth: 0.1,
    //paddingLeft: 10,
  },
  destalhesItem: {
    marginLeft: 20,
    flex: 1,
  },
  txtTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0097DA',
    marginBottom: 5,
    paddingLeft: 10,
  },
  txtData: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  txtLocal: {
    fontSize: 16,
    paddingLeft: 10,
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
