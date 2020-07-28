/**
 * @format
 */

import {AppRegistry, SectionList} from 'react-native';
import {name as appName} from './app.json';
import NavigationScreen from './component/Navigation/NavigatorScreen.js';
import Home from './component/Navigation/HomeScreen.js';
import 'react-native-gesture-handler';
import ListUser from './component/Networking/DemoGetMethod.js';
import DemoSlider from './component/Slider/DemoSlider.js';
import DemoDefaultAndPropType from './component/DefaultAndPropsType/DemoDefaultAndPropsType'


AppRegistry.registerComponent(appName, () => DemoDefaultAndPropType);
