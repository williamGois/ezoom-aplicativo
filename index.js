/**
 * @format
 */

import {AppRegistry,YellowBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
YellowBox.ignoreWarnings( ['Che']);
YellowBox.ignoreWarnings( ['Warning:']);
YellowBox.ignoreWarnings( ['Possible:']);
YellowBox.ignoreWarnings( ['Possible ']);
YellowBox.ignoreWarnings( ['VirtualizedList:']);
YellowBox.ignoreWarnings( ['VirtualizedList']);
YellowBox.ignoreWarnings( ['Deprecation']);
AppRegistry.registerComponent(appName, () => App);
YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);
