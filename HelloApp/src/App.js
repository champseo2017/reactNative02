import React, { useEffect } from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';

import commonStyles from './styles/common-styles';
import ColumnItems from './components/column-items';
import RowItems from './components/row-items'

import {
  Alert
} from 'react-native'

const App = () => {
  /* 
   - Component Alert
  */

   useEffect(() => {
     
    Alert.alert('Hello alert')


     return () => {}
   }, [])
   
  return <RowItems />;
};

export default App;
