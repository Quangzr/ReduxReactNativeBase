import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Alo')}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function AloScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Alo</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>alo Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Alo" component={AloScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
