import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';

import commonStyles from './src/styles/common-styles'

const App = () => {

  return (
    <View style={commonStyles.container}>
      
      <Text style={commonStyles.textTitle}>Hello World</Text>

      <Text>Hello World</Text>

    </View>
  );
};

export default App;
