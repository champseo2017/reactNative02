import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

import commonStyles from './src/styles/common-styles'

const App = () => {

  /* 
    การใช้ Flexbox ร่วมกับ React Native
    - flexDirection React Native ค่าดีฟอลต์คือ column เรียงจากบนลงล่าง

    - container ชั้นนอกสุดหรือกรอบหน้าจอ
      - ควรกำหนดเป็น flex:1 เพื่อให้มีขนาดเต็มจอ

    - หากจะเรียงข้อมูลแต่ละรายการ (items) จากบน
    ลงล่าง กำหนด flexDirection:'column'
    ให้กับ container หรือไม่กำหนดเลยเพราะเป็นค่าดีฟอลต์สำหรับ react native

    - เรียงจากซ้ายไปขวา ให้กำหนด flexDirection: 'row' กรณีนี้ต้องระบุเสมอ
  
  */

  return (
    <View style={commonStyles.container}>
      
      <Text style={commonStyles.textTitle}>Hello World</Text>

      <Text>Hello World</Text>

    </View>
  );
};

export default App;
