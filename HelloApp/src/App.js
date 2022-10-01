import React from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';

import commonStyles from './styles/common-styles';
import ColumnItems from './components/column-items';
import RowItems from './components/row-items'

const App = () => {
  /* 
    - การแสดง items ในแนวนอนหรือ row เหมาะกับ
    items ที่มีหลายรายการ ในแถวเดียวกัน
  
  */

  return <RowItems />;
};

export default App;
