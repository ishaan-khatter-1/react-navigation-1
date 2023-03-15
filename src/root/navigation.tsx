import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import Button from '../components/Button';
import PageOne from '../components/PageOne';
import PageTwo from '../components/PageTwo';
import Welcome from '../components/Welcome';
import Signup from '../components/Signup';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Imagepicker from '../components/ImagePicker';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Button" component={Button} />
        <Stack.Screen name="PageOne" component={PageOne} />
        <Stack.Screen name="PageTwo" component={PageTwo} />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
      </Stack.Navigator> */}

      <Tab.Navigator initialRouteName="Welcome">
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="Button" component={Button} />
        <Tab.Screen name="PageOne" component={PageOne} />
        <Tab.Screen name="PageTwo" component={PageTwo} />
        <Tab.Screen name="Imagepicker" component={Imagepicker} />

        <Tab.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
