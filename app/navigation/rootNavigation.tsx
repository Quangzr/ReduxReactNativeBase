import {createNavigationContainerRef, DrawerActions, StackActions} from '@react-navigation/native';
import {HOME_DRAWER} from './screenNames';

export const navigationRef = createNavigationContainerRef();

export const navigate = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
};

// if the current screen is navigated from a screen from the drawer,
// and the about-to-navigate-to screen which is also from the drawer,
// navigate to that screen, else to that screen but in the stack navigator.
// Mean for the screen that's navigated from a drawer's screen to use.
// Warning: this function is still experimental
export const shortDistanceDrawerAwareNavigate = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    const routes = navigationRef.getState()?.routes; // return screen history array
    const lastRoute = routes[routes.length - 2];

    // if the last screen is in the drawer
    if (lastRoute?.state?.type === 'drawer' && lastRoute.state.routeNames?.includes(name)) {
      navigate(HOME_DRAWER, {
        screen: name,
        params,
      });
    } else navigate(name, params);
  }
};

export const push = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
};

export const replace = (name: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
};

export const goBack = () => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  } else {
    navigationRef.dispatch(StackActions.replace(HOME_DRAWER)); // if open app from dymamic link, after that press go back => Home
  }
};

export const goBackRoot = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
};

export const openDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.openDrawer());
  }
};

export const closeDrawer = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(DrawerActions.closeDrawer());
  }
};
