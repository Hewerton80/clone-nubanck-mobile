import 'react-native-gesture-handler';
import React from 'react';
import Routes from './route';
import { StatusBar } from 'react-native';
import colors from './assets/colors';

const App: React.FC = () => {
  return (
    <>
    <StatusBar 
      barStyle='light-content'
      backgroundColor={colors.purple}
    />
    <Routes />
    </>
  );
}



export default App;
