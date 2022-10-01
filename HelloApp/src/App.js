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

    - Nested Text
     - การวางคอมโฟเนนต์ Text ซ้อนกัน หรือ การจัดรูปแบบ
     ข้อความในบางช่วง สามารถแทรก {'\n'} ขึ้นบรรทัดใหม่
     หรือ {''} แทนช่องว่าง

  */
   
  return <ColumnItems />;
};

export default App;
