import React from 'react';

import {View, Text, StyleSheet, Platform} from 'react-native';

import commonStyles from './styles/common-styles';
import ColumnItems from './components/column-items';

const App = () => {
  /* 
    - การแสดง items ในแนวตั้ง หรือ column เหมาะสำหรับกรณีที่ความกว้างของ
    แต่ละรายการ (items) มีขนาดเท่ากับหน้าจอ หรือ แสดงแถวล่ะ 1 รายการนั่นเอง
  
  */

  return <ColumnItems />;
};

export default App;
