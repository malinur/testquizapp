import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import ListItem from '../components/ListItem';

export default function CategoryScreen() {
  return (
    <View>
      <SectionList
        sections={[
          {
            title: 'Top Google Seaches in 2018',
            data: [
              'World Cup',
              'Avicii',
              'Mac Miller',
              'Stan Lee',
              'Black Panther',
            ],
          },
          {
            title: 'Top News Trends of 2018',
            data: [
              'World Cup',
              'Hurricane Florence',
              'Mega Millions Result',
              'Royal Wedding',
              'Election Results',
            ],
          },
          {
            title: 'Top Searched Movies of 2018',
            data: [
              'Black Panther',
              'Dead Pool 2',
              'Venom',
              'Avengers: Infinity War',
              'Bohemian Rhapsody',
            ],
          },
          {
            title: 'Top Searched Athletes of 2018',
            data: [
              'Tristan Thompson',
              'Alexis Sánchez',
              'Lindsey Vonn',
              'Shaun White',
              'Khabib Nurmagomedov',
            ],
          },
        ]}
        renderItem={({item}) => <ListItem title={item} />}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#F55145',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
