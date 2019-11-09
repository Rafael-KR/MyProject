import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default props => (
  <ImageBackground
    style={{flex: 1, width: null}}
    source={require('../imgs/shade8.png')}>
    <View style={styles.viewPrincipal}>
      <StatusBar backgroundColor="#0056BA" />
      <View style={styles.viewLogo}>
        <Text style={styles.textBemVindo}>Welcome</Text>
        <Image source={require('../assets/logo13.png')} />
      </View>

      <View style={styles.viewBotao}>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => Actions.login()}>
          <Text style={styles.btnLoginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    padding: 15,
  },
  textBemVindo: {
    fontSize: 20,
    color: '#fff',
  },
  viewLogo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewBotao: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    color: '#bfb6f5',
    fontSize: 16,
  },
});
