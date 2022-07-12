import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import {HOME_TAB, LOGIN_SCREEN, SETTING_SCREEN} from '../screenNames';
import HomeTab from '../bottomTab';
import Login from 'app/screens/Login';
import Setting from 'app/screens/Setting';

const Drawer = createDrawerNavigator();

const HomeDrawer = () => {
  return (
    // Add drawerPosition to choose side, Add headerShown: false to delete button
    // Add drawerContent={props => <DrawerContent {...props} />} to customize the drawer
    <Drawer.Navigator
      screenOptions={{drawerPosition: 'right', headerShown: false, drawerType: 'front'}}
      drawerContent={props => <DrawerContent {...props} />}>
      {/* Add options={{unmountOnBlur: true}} to remove screen from stack if exit the screen */}
      <Drawer.Screen name={HOME_TAB} component={HomeTab} />
      <Drawer.Screen name={LOGIN_SCREEN} component={Login} />
      <Drawer.Screen name={SETTING_SCREEN} component={Setting} />
    </Drawer.Navigator>
  );
};

export default HomeDrawer;
