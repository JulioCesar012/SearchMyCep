import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import IonicIcons from 'react-native-vector-icons/Ionicons';

import React from 'react';
import Home from './src/pages/home';
import About from './src/pages/about';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Procurar') {
            iconName = focused ? 'search-outline' : 'search-outline'
          } else if (route.name === 'Sobre o app') {
            iconName = focused ? 'help-circle-outline' : 'help-circle-outline'
          }

          return <IonicIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFF',
        tabBarActiveBackgroundColor: '#26a0da',
        tabBarInactiveBackgroundColor: 'gray',
        tabBarInactiveTintColor: '#FFF',
      })}>
        <Tab.Screen name="Procurar" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="Sobre o app" component={About} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}