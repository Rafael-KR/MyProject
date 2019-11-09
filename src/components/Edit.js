//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {editEvento, deleteEvento} from '../actions';
import {connect} from 'react-redux';

// create a component
class Edit extends Component {
  state = {
    title: this.props.navigation.state.params.title,
    local: this.props.navigation.state.params.local,
    dataEvento: this.props.navigation.state.params.dataEvento,
    key: this.props.navigation.state.params.key,
  };

  submit = () => {
    this.props.editEvento(
      this.state.title,
      this.state.local,
      this.state.dataEvento,
      this.state.key,
    );

    this.setState({
      title: '',
      local: '',
      dataEvento: '',
      key: '',
    });

    this.props.navigation.navigate('Blogs');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.viewForm}>
          <Text style={styles.textosEdit}>Event Name:</Text>
          <TextInput
            style={styles.inputTxt}
            placeholderTextColor="#ccc"
            placeholder="title"
            onChangeText={title => this.setState({title})}
            value={this.state.title}
          />

          <Text style={styles.textosEdit}>Place:</Text>
          <TextInput
            style={styles.inputTxt}
            placeholderTextColor="#ccc"
            placeholder="local"
            onChangeText={local => this.setState({local})}
            value={this.state.local}
          />

          <Text style={styles.textosEdit}>Date:</Text>
          <TextInput
            style={styles.inputTxt}
            placeholderTextColor="#ccc"
            placeholder="dataEvento"
            onChangeText={dataEvento => this.setState({dataEvento})}
            value={this.state.dataEvento}
          />
          <TouchableOpacity onPress={this.submit} style={styles.btnCadastro}>
            <Text style={styles.btnCadastroText}>Apply Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: '#F5F5FC',
  },
  textosEdit: {
    paddingLeft: 3,
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnCadastro: {
    height: 40,
    width: 300,
    backgroundColor: '#00A9F4',
    marginTop: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  btnCadastroText: {
    color: '#FFF',
    fontSize: 16,
  },
  inputTxt: {
    color: '#000',
    fontSize: 16,
    height: 46,
    alignSelf: 'stretch',
    borderColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 5,
    marginBottom: 30,
  },
  submit: {
    backgroundColor: 'red',
    overflow: 'hidden',
  },
  btnLoginText: {
    color: '#ddd',
    fontSize: 16,
  },
  viewForm: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    borderRadius: 15,
  },
});

//make this component available to the app
export default connect(
  null,
  {editEvento},
)(Edit);
