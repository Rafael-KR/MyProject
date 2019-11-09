import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  modificaNome,
  cadastraUsuario,
} from '../actions/AutenticacaoActions';
import {thisExpression} from '@babel/types';

class formCadastro extends Component {
  _cadastraUsuario() {
    const {nome, email, senha} = this.props;

    this.props.cadastraUsuario({nome, email, senha});
  }

  renderBtnCadastro() {
    if (this.props.loading_cadastro) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <TouchableOpacity
        style={styles.btnCadastro}
        onPress={() => this._cadastraUsuario()}>
        <Text style={styles.textBtnCadastro}>Sign In</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ImageBackground
        style={{flex: 1, width: null}}
        source={require('../imgs/shade8.png')}>
        <View style={styles.viewPrincipal}>
          <View style={styles.viewInputs}>
            <TextInput
              value={this.props.nome}
              placeholder="Name"
              placeholderTextColor="#ddd"
              style={styles.inputNome}
              onChangeText={texto => this.props.modificaNome(texto)}
            />
            <TextInput
              value={this.props.email}
              placeholder="E-mail"
              placeholderTextColor="#ddd"
              style={styles.inputEmail}
              onChangeText={texto => this.props.modificaEmail(texto)}
            />
            <TextInput
              value={this.props.senha}
              placeholder="Password"
              placeholderTextColor="#ddd"
              style={styles.inputSenha}
              onChangeText={texto => this.props.modificaSenha(texto)}
              secureTextEntry
            />

            <Text style={{color: 'red', fontSize: 14}}>
              {this.props.erroCadastro}
            </Text>

            <View style={styles.viewBtnCadastro}>
              {this.renderBtnCadastro()}
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  nome: state.AutenticacaoReducer.nome,
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroCadastro: state.AutenticacaoReducer.erroCadastro,
  loading_cadastro: state.AutenticacaoReducer.loading_cadastro,
});

export default connect(
  mapStateToProps,
  {modificaEmail, modificaSenha, modificaNome, cadastraUsuario},
)(formCadastro);

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    padding: 10,
  },
  viewInputs: {
    color: '#fff',
    flex: 10,
    justifyContent: 'center',
    marginBottom: 80,
    marginTop: 100,
    alignItems: 'center',
  },
  inputNome: {
    color: '#ddd',
    fontSize: 16,
    height: 46,
    alignSelf: 'stretch',
    borderColor: '#9e9e9e',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  inputEmail: {
    color: '#ddd',
    fontSize: 16,
    height: 46,
    alignSelf: 'stretch',
    borderColor: '#9e9e9e',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  inputSenha: {
    color: '#ddd',
    fontSize: 16,
    height: 46,
    alignSelf: 'stretch',
    borderColor: '#9e9e9e',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  viewBtnCadastro: {
    paddingBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  btnCadastro: {
    height: 40,
    width: 220,
    backgroundColor: '#3700B3',
    marginTop: 22,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtnCadastro: {
    color: '#ddd',
    fontSize: 16,
  },
});
