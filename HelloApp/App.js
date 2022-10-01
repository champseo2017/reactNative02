import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

const App = () => {
  /* 
    การกำหนด StyleSheet

    <Text style={{
      color: 'blue'
    }}></Text>

    - รูปแบบที่ต้องกำหนดเป็นตัวเลข ระบุเฉพาะตัวเลข
    ไม่ต้องใส่หน่วย React Native กำหนดหน่วยที่เหมาะสมให้

    <Text style={{
      padding: 10,
      fontSize: 20
    }}>
      Hello
    </Text>

    - ควรสร้าง StyleSheet แยก จากนั้นค่อยมากำหนดให้
    คอมโพเนนต์

    - กำหนด style ให้แตกต่างกันระหว่าง Android และ iOS
      - Platform
  
  */

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Hello World</Text>
      <Text style={styles.textPlain}>Hello World</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    padding: 20,
    ...Platform.select({ /* ต้องมี (Spread) ข้างหน้า platform */
      android: {
        paddingTop: 30,
        ios: {
          paddingTop: 45
        }
      }
    })
  },
  textTitle: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  textPlain: {
    fontSize: 16,
  },
});

export default App;
