import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabContent from './TabContent';
import {DIRECTORY_SCREEN, HOME_SCREEN} from '../screenNames';
import Home from 'app/screens/Home';
import Directory from 'app/screens/Directory';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={() => <TabContent />}>
      {/* Add options={{unmountOnBlur: true}} to remove screen from stack if exit the screen */}
      <Tab.Screen name={HOME_SCREEN} component={Home} />
      <Tab.Screen name={DIRECTORY_SCREEN} component={Directory} />
    </Tab.Navigator>
  );
};

export default HomeTab;
