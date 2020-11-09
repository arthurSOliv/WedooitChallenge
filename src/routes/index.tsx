import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/Home';
import Consults from '../views/Consults';
import Notes from '../views/Notes';
import Config from '../views/Config';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false
    }}>
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="Consults" component={Consults} />
    <Auth.Screen name="Notes" component={Notes} />
    <Auth.Screen name="Config" component={Config} />
  </Auth.Navigator>
)

export default AuthRoutes;
