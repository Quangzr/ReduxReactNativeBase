/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/Entrypoint';
import {name as appName} from './app.json';

// patch local compare crashing: https://github.com/facebook/react-native/issues/32174 (fix crash when compare string vs null)
function patchLocalCompare() {
  const originalLocalCompare = String.prototype.localeCompare;
  const compareStrings = (a, b, locales, options) => {
    if (a === b) {
      return 0;
    } else if (a === '') {
      return -1;
    } else if (b === '') {
      return 1;
    } else {
      return originalLocalCompare.call(a, b, locales, options);
    }
  };

  // eslint-disable-next-line no-extend-native
  String.prototype.localeCompare = function (other, locales, options) {
    return compareStrings(this.toString(), other, locales, options);
  };
}

patchLocalCompare();

// console.disableYellowBox = true; // turn off warning in console log

AppRegistry.registerComponent(appName, () => App);
