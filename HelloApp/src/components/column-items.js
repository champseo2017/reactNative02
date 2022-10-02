import React, { useCallback } from 'react';

import {
  View, 
  Text, 
  StyleSheet, 
  Alert,
  Button
} from 'react-native';

const ColumnItems = () => {

  const items = ['One', 'Two', 'Three', 'Four', 'Five'];

  const handlerOnpressButton1 = useCallback(() => {
    Alert.alert('Click Hello')
  }, [])

  return (
    <View style={styles.container}>

      <View style={styles.items}>
        <Button 
          title="Button 1"
          color="blue"
          onPress={handlerOnpressButton1}
        />
      </View>
      <View style={styles.items}>
        <Button 
          title="Button 2"
          color="blue"
          onPress={() => Alert.alert('Click Hello 2')}
        />
      </View>
      {/* {
        items.map((items, i) => {
          return (
            <View key={i} style={styles.items}>
              <Text style={styles.text}>{items}</Text>
            </View>
          )
        })
      } */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // default
    // alignItems: 'stretch' // ขยายเต็มความกว้าง default
    marginTop: 50,
    padding: 10,
  },
  items: {
    width: 150,
    marginBottom: 15
  }
});

export default ColumnItems;
