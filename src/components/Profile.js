//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import {postEvento} from '../actions/';
import {connect} from 'react-redux';
import {Header} from 'native-base';

// create a component
class Profile extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          style={{
            backgroundColor: '#00A9F4',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              marginLeft: 7,
              marginRight: 7,
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 20,
              }}>
              My Profile
            </Text>
          </View>
        </Header>
        <View style={styles.container}>
          <StatusBar backgroundColor="#0097DA" />

          <Text style={{fontSize: 16, paddingBottom: 3, textAlign: 'center'}}>
            THAT WOULD BE THE PROFILE SCREEN. button log out is working, but I
            don't want it here
          </Text>
          <View>
            <TouchableOpacity
              style={styles.btnLogout}
              onPress={() =>
                firebase
                  .auth()
                  .signOut()
                  .then(() => Actions.login())
              }>
              <Text style={styles.textBtnLogout}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flex: 1,
    backgroundColor: '#F5F5FC',
  },
  textBtnLogout: {
    color: '#FFF',
    fontSize: 16,
  },
  btnLogout: {
    height: 40,
    width: 300,
    backgroundColor: '#00A9F4',
    marginTop: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

//make this component available to the app
export default Profile;
