import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {navigate} from '../rootNavigation';
import {DIRECTORY_SCREEN, HOME_SCREEN} from '../screenNames';
import styles from './styles';

const TabContent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigate(HOME_SCREEN)}>
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate(DIRECTORY_SCREEN)}>
        <Text>Directory</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TabContent;
