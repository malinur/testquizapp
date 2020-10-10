import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListItem({badgeNumber, title, IconComponent, onPress}) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeNumber}>{badgeNumber}</Text>
        </View>
        <MaterialCommunityIcons
          name="chevron-right"
          size={25}
          color="#e2e2e2"
        />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#e2e2e2',
  },
  badgeNumber: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
});
