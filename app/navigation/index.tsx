import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './rootNavigation';
import MyProfile from 'app/screens/MyProfile';
import ClaimGift from 'app/screens/ClaimGift';
import HomeDrawer from './drawer';
import {CLAIM_GIFT, HOME_DRAWER, MY_PROFILE} from './screenNames';

const Stack = createNativeStackNavigator();

function NavigationStack() {
  return (
    // Add screenOptions={{headerShown: false}} to hide header
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={HOME_DRAWER} component={HomeDrawer} />
        <Stack.Screen name={MY_PROFILE} component={MyProfile} />
        <Stack.Screen name={CLAIM_GIFT} component={ClaimGift} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
