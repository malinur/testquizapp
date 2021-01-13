import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ListItem({
  badgeNumber,
  chevron,
  title,
  IconComponent,
  onPress,
}) {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={10}>
            {title}
          </Text>
        </View>
        {badgeNumber && (
          <View style={styles.badge}>
            <Text style={styles.badgeNumber}>{badgeNumber}</Text>
          </View>
        )}
        <Ionicons name={chevron} size={22} color="#989898" />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginRight: 5,
    backgroundColor: '#989898',
  },
  badgeNumber: {
    color: 'white',
    fontSize: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
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
