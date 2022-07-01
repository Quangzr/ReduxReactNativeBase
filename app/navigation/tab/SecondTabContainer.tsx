import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {navigate} from '../rootNavigation';
import {ALO_SCREEN, BLO_SCREEN} from '../screenNames';
import styles from './styles';

const SecondTabContent = () => {
  // const navigate = (screenName: string, params?: any) => {
  //   navigation.navigate(screenName, params);
  //   navigation.closeDrawer();
  // };

  return (
    <>
      <SafeAreaView
        style={{backgroundColor: 'blue', position: 'absolute', width: '100%', top: 100}}>
        <TouchableOpacity onPress={() => navigate(BLO_SCREEN)}>
          <Text>BLO</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate(ALO_SCREEN)}>
          <Text>ALO</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default SecondTabContent;
