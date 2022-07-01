import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SECOND_TAB} from '../screenNames';
import TabContent from './TabContent';
import SecondTabComponent from './SecondTab';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={() => <TabContent />}>
      {/* Add options={{unmountOnBlur: true}} to remove screen from stack if exit the screen */}
      <Tab.Screen name={SECOND_TAB} component={SecondTabComponent} />
    </Tab.Navigator>
  );
};

export default HomeTab;
