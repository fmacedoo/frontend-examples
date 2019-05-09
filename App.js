import React from 'react';
import { StatusBar } from 'react-native';

import Main from './src/screens/Main';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0000008a" />
      <Main />
    </>
  );
}
