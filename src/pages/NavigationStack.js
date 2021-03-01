import * as React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const { HomeScreenTab, Home, Cadastro, Orcamento, Settings } = require('./pages.js');


const Stack = createStackNavigator();
const StackConfig = {
    headerShown: false,
    headerStyle: { backgroundColor: '#ffd573',  },
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

function Pages() { 
  return (
       
      <NavigationContainer>
        <Stack.Navigator screenOptions={StackConfig} headerMode="float" animation="spring" >

        <Stack.Screen name="LM Constru" component={ HomeScreenTab } />
        <Stack.Screen name="Settings" component={ Settings } />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default Pages;