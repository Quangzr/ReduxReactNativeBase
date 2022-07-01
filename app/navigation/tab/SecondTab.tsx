import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ALO_SCREEN, BLO_SCREEN, DIRECTORY_SCREEN, HOME_SCREEN} from '../screenNames';
import Home from '../../screens/TestBase/Home';
import Directory from '../../screens/TestBase/Directory';
import SecondTabContent from './SecondTabContainer';
import Blo from '../../screens/TestBase/Blo';
import Alo from '../../screens/TestBase/Alo';

const SecondTab = createBottomTabNavigator();

const SecondTabComponent = () => {
  return (
    <SecondTab.Navigator screenOptions={{headerShown: false}} tabBar={() => <SecondTabContent />}>
      {/* Add options={{unmountOnBlur: true}} to remove screen from stack if exit the screen */}
      <SecondTab.Screen name={HOME_SCREEN} component={Home} />
      <SecondTab.Screen
        name={DIRECTORY_SCREEN}
        component={Directory}
        options={{unmountOnBlur: true}}
      />
      <SecondTab.Screen name={BLO_SCREEN} component={Blo} />
      <SecondTab.Screen name={ALO_SCREEN} component={Alo} />
    </SecondTab.Navigator>
  );
};

export default SecondTabComponent;
