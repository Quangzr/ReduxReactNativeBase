import {DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {navigate} from '../rootNavigation';
import {LOGIN_SCREEN, SETTING_SCREEN} from '../screenNames';
import styles from './styles';

const DrawerContent = ({navigation}: DrawerContentComponentProps) => {
  // const navigate = (screenName: string, params?: any) => {
  //   navigation.navigate(screenName, params);
  //   navigation.closeDrawer();
  // };

  return (
    <>
      <DrawerContentScrollView contentContainerStyle={{flexGrow: 1}}>
        <SafeAreaView style={{flexGrow: 1}}>
          <TouchableOpacity
            onPress={() => navigate(LOGIN_SCREEN)}
            style={{width: 100, height: 100, backgroundColor: 'red'}}>
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate(SETTING_SCREEN)}
            style={{width: 100, height: 100, backgroundColor: 'red'}}>
            <Text>Setting</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </DrawerContentScrollView>
    </>
  );
};

export default DrawerContent;
