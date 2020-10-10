import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './app/components/Button';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import CategoryScreen from './app/screens/CategoryScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        title="My title"
        IconComponent={<Icon name="email" badgeNumber={40} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
