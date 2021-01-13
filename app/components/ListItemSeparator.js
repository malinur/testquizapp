import React from 'react';
import {StyleSheet, View} from 'react-native';

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#C0C0C0',
  },
});

export default ListItemSeparator;
