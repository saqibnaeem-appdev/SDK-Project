import React from 'react';
// import FavorX from './android/app/libs/favorX.aar';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
const App = () => {
  return <WebView source={{uri: 'https://reactnative.dev/'}} />;
  //https://localhost:1633 not working
};
export default App;
