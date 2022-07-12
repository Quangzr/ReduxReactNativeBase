import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context';
import {store} from './store';
import Navigation from './navigation';

const BootScreen: React.FC = () => {
  //   const [initialRouteName, setInitialRouteName] = useState(HOME_DRAWER);
  //   const [initialRouteId, setInitialRouteId] = useState<any>(null);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Navigation />
    </SafeAreaProvider>
  );
};

const EntryPoint: React.FC = () => {
  return (
    <Provider store={store}>
      <BootScreen />
    </Provider>
  );
};

export default EntryPoint;
