import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Icon({name, size = 45, iconColor = '#000'}) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Ionicons name={name} color={iconColor} size={size / 2} />
    </View>
  );
}

const styles = StyleSheet.create({});
