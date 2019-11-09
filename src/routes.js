import React from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import BoasVindas from './pages/BoasVindas';
import Principal from './pages/Principal';

export default props => (
  <Router
    navigationBarStyle={{backgroundColor: '#0056BA'}}
    titleStyle={{color: '#ddd'}}>
    <Stack key="root">
      <Scene key="login" component={Login} title="Login" hideNavBar={true} />

      <Scene
        key="cadastro"
        component={Cadastro}
        title="Sign In"
        hideNavBar={false}
      />

      <Scene
        key="boasVindas"
        component={BoasVindas}
        title="Welcome"
        hideNavBar={true}
      />

      <Scene
        key="principal"
        component={Principal}
        title="Home Screen"
        hideNavBar={true}
        initial
      />
    </Stack>
  </Router>
);
