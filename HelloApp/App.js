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

    - กำหนด Style แบบ Array
  
  */

  return (
    <View>
      
      <Text style={
        [styles.textBold, 
        styles.textBold, 
        styles.text20]
      }>Hello World</Text>

      <Text style={
        [styles.textBlack, styles.text16]
      }>Hello World</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  textBold: {
    fontWeight: 'bold'
  },
  textBlue: {
    color: 'blue'
  },
  textBlack: {
    color: 'black'
  },
  text20: {
    fontSize: 20
  },
  text16: {
    fontSize: 16
  }
})

export default App;
