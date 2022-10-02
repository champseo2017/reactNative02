import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const ColumnItems = () => {
  const items = ['One', 'Two', 'Three', 'Four', 'Five'];

  return (
    <View style={styles.container}>
      <Text
        numberOfLines={2}
        ellipsizeMode='tail'
        selectable={true}
        style={{
          fontSize: 18,
          textTransform: 'capitalize'
        }}>
        
        Ea voluptate in fugiat aliqua tempor dolor ad nostrud pariatur nostrud officia commodo deserunt.
        Ea voluptate in fugiat aliqua tempor dolor ad nostrud pariatur nostrud officia commodo deserunt.
        
      </Text>
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
    height: 60,
    backgroundColor: 'lightgray',
    justifyContent: 'center', // เนื้อหากึ่งกลาง (บน-ล่าง)
    marginBottom: 15,
    paddingLeft: 10,
  },
  text: {
    color: 'blue',
    fontSize: 20,
  },
});

export default ColumnItems;
