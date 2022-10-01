import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const RowItems = () => {
  const items = ['One', 'Two', 'Three', 'Four', 'Five'];

  return (
    <View style={styles.container}>
      {items.map((item, i) => {
        return (
          <View key={i} style={styles.items}>
            <Text style={styles.text}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    padding: 10,
    flexWrap: 'wrap'
  },
  items: {
    height: 100,
    width: 100,
    justifyContent: 'center', // เนื้อหาอยู่กึ่งกลางซ้ายขวา
    alignItems: 'center', // เนื้อหาอยู่กึ่งกลาง บน-ล่าง
    backgroundColor: 'lightgray',
    margin: 10,
  },
  text: {
    color: 'blue',
    fontSize: 20,
  },
});

export default RowItems;
