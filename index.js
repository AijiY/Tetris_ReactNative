import { AppRegistry } from 'react-native';
import App from './src/App'; // srcフォルダ内のApp.jsをインポート
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);