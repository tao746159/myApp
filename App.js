import * as React from 'react';
import { View, Button } from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/FontAwesome';

import Home from './src/pages/Home'
import Sort from './src/pages/Sort'
import Cart from './src/pages/Project'
import My from './src/pages/My'
import Login from './src/pages/Login/Login'
import Register from './src/pages/Login/Register'
import Defail from './src/pages/defail'
import SearchList from './src/pages/searchList'
const Tab = createBottomTabNavigator();

function HomeTabs({ navigation, route }) {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === '首页') {
              return (
                <MaterialIcons
                  name="home"
                  size={size}
                  color={color}
                />
              );
            }
           else if (route.name === '分类') {
              return (
                <MaterialIcons
                  name="th-list"
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === '购物车') {
              return (
                <MaterialIcons
                  name="shopping-cart"
                  size={size}
                  color={color}
                />
              );
            }
            else if (route.name === '我的') {
              return (
                <MaterialIcons
                  name="user"
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#1bbf80',
          inactiveTintColor: 'gray',
        }}
        navigationOptions={
          {
          header:null
      }
       }
      >
      <Tab.Screen name="首页" component={Home}  />
        <Tab.Screen name="分类" component={Sort} />
        <Tab.Screen name="购物车" component={Cart} />
        <Tab.Screen name="我的" component={My} />
      </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App({ navigation, route }) {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" mode="modal">
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Defail" component={Defail} {...route} />
        <Stack.Screen name="SearchList" component={SearchList} {...navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App