import React from 'react';

import {View, Text} from 'react-native';

const App = () => {
  /* 
    View 
    ใช้เป็น Container เพื่อกำหนดขอบเขตในการแสดงผล
    ภายใน View สามารถเพิ่มคอมโพเนนต์อื่นๆ ได้

    Text ใช้แสดงข้อความ ใน React ต้องแสดงข้อความในคอม
    โพเนนต์ Text เท่านั้น
  
  */
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
};

export default App;
