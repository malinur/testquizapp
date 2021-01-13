import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './app/components/Button';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import CategoryScreen from './app/screens/CategoryScreen';
import QuizListScreen from './app/screens/QuizListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <QuizListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    flex: 1,
  },
});
