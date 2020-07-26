/**
 * @format
 */

import {AppRegistry, SectionList} from 'react-native';
import {name as appName} from './app.json';
import NavigationScreen from './component/Navigation/NavigatorScreen.js';
import Home from './component/Navigation/HomeScreen.js';
import 'react-native-gesture-handler';


AppRegistry.registerComponent(appName, () => NavigationScreen);
