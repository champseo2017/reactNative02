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

     Method ที่น่าสนใจ
     เมธอดที่น่าสนใจของ TextInput

     - focus() ให้โฟกัสที่ TextInput อันนั้น
     - blur() ให้ย้ายโฟกัสออกจาก TextInput นั้น
     - clear() ลบข้อมูลทั้งหมดออกจาก TextInput
     - isFocused() ตรวจสอบว่าโฟกัสอยู่ที่ TextInput นั้นหรือไม่

     การใช้งานคือ ให้สร้างชื่ออ้างอิงกับ TextInput ด้วย useRef() หรือ 
     createRef() 

     const input = React.useRef()
     input.current.clear()

     return <TextInput ref={input} />
    
  */
   
  return <ColumnItems />;
};

export default App;
