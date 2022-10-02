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

    Component Button Props
     - title
       ข้อความปุ่ม (ต้องกำหนดเสมอ)

    - onPress
      - กำหนดตัวจัดการอีเวนต์เมื่อคลิกที่ปุ่ม (ต้องกำหนดเสมอ)

    - disabled
      - ใช้งานปุ่มได้หรือไม่ (ถ้าใช้ไม่ได้กำหนดค่า เป็น true ใช้ได้กำหนดเป็น false)

    - color
      - Android เป็นสีพื้นหลังของปุ่ม (ปกติข้อความจะเป็นสีขาว)
      ios จะเป็นสีข้อความบนปุ่ม

    props title และ OnPress เป็น props ที่ต้องระบุเสมอ
    ไม่สามารถกำหนด style ให้กับคอมโพเนนต์ Button ได้
    
  */
   
  return <ColumnItems />;
};

export default App;
