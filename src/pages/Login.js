import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground,
  View,
  Text,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {
  modificaEmail,
  modificaSenha,
  autenticaUsuario,
} from '../actions/AutenticacaoActions';

import logo from '../assets/logoLetras.png';

class formLogin extends Component {
  _autenticaUsuario() {
    const {email, senha} = this.props;

    this.props.autenticaUsuario({email, senha});
  }

  renderBtnAcessar() {
    if (this.props.loading_login) {
      return <ActivityIndicator size="large" />;
    }
    return (
      <TouchableOpacity
        style={styles.btnLogin}
        onPress={() => this._autenticaUsuario()}>
        <Text style={styles.btnLoginText}>Login</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <ImageBackground
        style={{flex: 1, width: null}}
        source={require('../imgs/shade8.png')}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled={Platform.OS == 'ios'}
          style={styles.viewPrincipal}>
          <StatusBar backgroundColor="#0056BA" />

          <View style={styles.viewLogo}>
            <Image source={logo} />
          </View>

          <View style={styles.viewInputs}>
            <TextInput
              value={this.props.email}
              style={styles.inputEmail}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="E-mail"
              placeholderTextColor="#ddd"
              onChangeText={texto => this.props.modificaEmail(texto)}
            />
            <TextInput
              value={this.props.senha}
              style={styles.inputSenha}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Password"
              placeholderTextColor="#ddd"
              onChangeText={texto => this.props.modificaSenha(texto)}
              secureTextEntry
            />

            <Text style={{color: '#ff0000', fontSize: 17}}>
              {this.props.erroLogin}
            </Text>

            <TouchableOpacity onPress={() => Actions.cadastro()}>
              <Text style={styles.textCadastro}>
                Don't have an account? Sign In
              </Text>
            </TouchableOpacity>

            <View>{this.renderBtnAcessar()}</View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroLogin: state.AutenticacaoReducer.erroLogin,
  loading_login: state.AutenticacaoReducer.loading_login,
});

export default connect(
  mapStateToProps,
  {modificaEmail, modificaSenha, autenticaUsuario},
)(formLogin);

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    padding: 10,
  },
  btnLogin: {
    marginTop: 20,
    height: 40,
    width: 220,
    backgroundColor: '#3700B3',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLoginText: {
    color: '#ddd',
    fontSize: 16,
  },
  viewBotaoLogin: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  textCadastro: {
    color: '#ddd',
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
    marginTop: 5,
    alignSelf: 'stretch',
    borderColor: '#9e9e9e',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  viewInputs: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  viewLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
