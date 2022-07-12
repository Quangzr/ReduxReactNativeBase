import {DrawerContentComponentProps, DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {navigate} from '../rootNavigation';
import {LOGIN_SCREEN, SETTING_SCREEN} from '../screenNames';
import styles from './styles';

const DrawerContent = ({navigation: _}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigate(LOGIN_SCREEN)}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate(SETTING_SCREEN)}>
          <Text>Setting</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
