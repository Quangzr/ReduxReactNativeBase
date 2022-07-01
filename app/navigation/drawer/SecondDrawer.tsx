import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import {HOME_TAB, LOGIN_SCREEN, SETTING_SCREEN} from '../screenNames';
import Setting from '../../screens/TestBase/Setting';
import HomeTab from '../tab';
import Login from '../../screens/TestBase/Login';

const SecondDrawer = createDrawerNavigator();

const SecondDrawerComponent = () => {
  return (
    // Add drawerPosition to choose side, Add headerShown: false to delete button
    // Add drawerContent={props => <DrawerContent {...props} />} to customize the drawer
    <SecondDrawer.Navigator
      screenOptions={{drawerPosition: 'left', headerShown: false, drawerType: 'back'}}
      drawerContent={props => <DrawerContent {...props} />}>
      {/* Add options={{unmountOnBlur: true}} to remove screen from stack if exit the screen */}
      <SecondDrawer.Screen name={HOME_TAB} component={HomeTab} />
      <SecondDrawer.Screen name={LOGIN_SCREEN} component={Login} />
      <SecondDrawer.Screen
        name={SETTING_SCREEN}
        component={Setting}
        options={{unmountOnBlur: true}}
      />
    </SecondDrawer.Navigator>
  );
};

export default SecondDrawerComponent;
