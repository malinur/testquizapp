import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ListItem from '../components/ListItem';
import Icon from '../components/Icon';

export default function CollapsibleListItem({title, description}) {
  const [isSelected, setIsSelected] = useState(false);
  const [isChevronDown, setIsChevronDown] = useState(false);

  return (
    <View>
      <ListItem
        title={title}
        chevron={
          isChevronDown ? 'chevron-down-outline' : 'chevron-forward-outline'
        }
        IconComponent={<Icon name="star-outline" iconColor="#989898" />}
        onPress={() => {
          setIsSelected(!isSelected);
          setIsChevronDown(!isChevronDown);
        }}
      />
      {isSelected ? (
        <Text style={styles.detailsText}>{description}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  detailsText: {
    fontSize: 18,
    color: 'black',
    padding: 15,
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
});
