import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Button({title, style, textColor = 'white'}) {
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
