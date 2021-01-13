import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';

import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

export default function CategoryScreen() {
  const sections = [
    {
      title: 'Top Google Seaches in 2018',
      data: ['World Cup', 'Avicii', 'Mac Miller', 'Stan Lee'],
    },
    {
      title: 'Top News Trends of 2018',
      data: [
        'World Cup',
        'Hurricane Florence',
        'Mega Millions Result',
        'Royal Wedding',
      ],
    },
    {
      title: 'Top Searched Movies of 2018',
      data: ['Black Panther', 'Dead Pool 2', 'Venom', 'Avengers: Infinity War'],
    },
    {
      title: 'Top Searched Athletes of 2018',
      data: [
        'Tristan Thompson',
        'Alexis Sánchez',
        'Lindsey Vonn',
        'Shaun White',
      ],
    },
  ];

  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title="Тестування по обраних" />
        <Button title="Тестування по помилках" />
      </View>
      <SectionList
        sections={sections}
        renderItem={({item}) => (
          <ListItem
            title={item}
            badgeNumber={40}
            chevron="chevron-forward-outline"
            IconComponent={
              <Icon
                name="help-circle-outline"
                iconColor="dodgerblue"
                size={60}
              />
            }
          />
        )}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(index) => index}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'gold',
    marginBottom: 10,
  },
  buttonContainer: {
    padding: 10,
    paddingBottom: 15,
    backgroundColor: '#F0F0F0',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    padding: 15,
    fontSize: 20,
    color: '#606060',
  },
});
