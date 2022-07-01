import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import {HOME_TAB, LOGIN_SCREEN, SECOND_DRAWER, SETTING_SCREEN} from '../screenNames';
import Setting from '../../screens/TestBase/Setting';
import HomeTab from '../tab';
import Login from '../../screens/TestBase/Login';
import SecondDrawerComponent from './SecondDrawer';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    // Add drawerPosition to choose side, Add headerShown: false to delete button
    // Add drawerContent={props => <DrawerContent {...props} />} to customize the drawer
    <Drawer.Navigator
      screenOptions={{drawerPosition: 'right', headerShown: false, drawerType: 'front'}}
      drawerContent={props => <DrawerContent {...props} />}>
      {/* Add options={{unmountOnBlur: true}} to remove screen from stack if exit the screen */}
      <Drawer.Screen name={SECOND_DRAWER} component={SecondDrawerComponent} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
