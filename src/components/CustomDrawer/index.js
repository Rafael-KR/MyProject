import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

function CustomDrawer({...props}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.userArea}>
        <Image
          source={require('../../assets/foto-perfil.jpg')}
          style={styles.user}
        />
        <Text style={styles.nome}>Rafael Kuhn Rodrigues</Text>
        <Text style={styles.email}>rafael.kuhn@rede.ulbra.br</Text>
      </View>
      <ScrollView>
        <DrawerNavigatorItems {...props} />
      </ScrollView>
      <View style={styles.footerView}>
        <Text style={styles.footerDrawer}>EVENTOS - ULBRA TORRES</Text>
        <TouchableOpacity
          onPress={() =>
            firebase
              .auth()
              .signOut()
              .then(() => Actions.login())
          }>
          <Text style={styles.botaoLogout}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userArea: {
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: '#0097DA',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
  user: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  nome: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    marginBottom: 10,
    fontSize: 15,
    color: '#ddd',
  },
  footerView: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  botaoLogout: {
    flex: 2,
    textAlign: 'right',
    textAlignVertical: 'center',
    marginRight: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  footerDrawer: {
    textAlign: 'left',
    flex: 6,
    marginLeft: 20,
    fontSize: 13,
    color: '#000',
  },
});

export default CustomDrawer;
