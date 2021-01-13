import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import Button from '../components/Button';
import CollapsibleListItem from '../components/CollapsibleListItem';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

export default function QuizListScreen() {
  const sections = [
    {
      title:
        'Top Google Seaches in 2018 nsjdsjd lorem kskdslkds sdjks kjdksjd ksjdksjd ksjdksjd skjdlsjkd',
      correctAnswer: 'dksjk skdjskjsss kjsdksdj kjsdjs',
    },
    {
      title:
        'Top sdjskjdsk Sehjhjh jhjhhjh jhjhh jhjjjhh kjghjg fdfghbn dfghjaches in sasasas nsjdsdsdssjd lorem kskdslkds sdjks kjdksjd ksjdksjd ksjdksjd skjdlsjkd',
      correctAnswer: 'dksjk skdjskjff kjsdksdj kjsdjs',
    },
    {
      title:
        'Asdsdsds dsdsd akdjsjs in 2018 nsjdsjd lorem kskdslkds sdjks kjdksjd ksjdksjd ksjdksjd skjdlsjkd',
      correctAnswer: 'dksjk skdjseekj kjsdksdj kjsdjs',
    },
    {
      title:
        'Ffdfdfd Google Seaches in sdsdsds nsjdsjd lorem kskdslkds sdjks kjdksjd ksjdksjd ksjdksjd skjdlsjkd',
      correctAnswer: 'dksjk skdvvjskj kjsdksdj kjsdjs',
    },
    {
      title:
        'Ffdfdfd Google Seacghhhes in sdsdsds nsjdsjd lorem kskdslkds sdjks kjdksjd ksjdksjd ksjdksjd skjdlsjkd',
      correctAnswer: 'dksjk skhjhjdvvjskj kjsdksdj kjsdjs',
    },
  ];

  return (
    <ScrollView>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.testButton}
          title="Тестування 5 питань за 5 хвилин"
        />
      </View>
      <Text style={styles.secondText}>
        Навчальне тестування по даному роздiлу розбите на блоки за перелiком
        питань
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Button
          style={styles.optionsButton}
          textColor="dodgerblue"
          title="1-20"
        />
        <Button
          style={styles.optionsButton}
          textColor="dodgerblue"
          title="21-40"
        />
        <Button
          style={styles.optionsButton}
          textColor="dodgerblue"
          title="41-60"
        />
        <Button
          style={styles.optionsButton}
          textColor="dodgerblue"
          title="61-85"
        />
        <Button
          style={styles.optionsButton}
          textColor="dodgerblue"
          title="20 випадково"
        />
      </ScrollView>
      <View>
        <Text style={styles.sectionHeader}>I. Безпека життэдiяльностi</Text>
      </View>

      <FlatList
        data={sections}
        renderItem={({item}) => (
          <CollapsibleListItem
            title={item.title}
            description={item.correctAnswer}
          />
          // <ListItem
          //   title={item.title}
          //   IconComponent={<Icon name="star-outline" iconColor="#989898" />}
          // />
        )}
        keyExtractor={(index) => index}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  optionsButton: {
    borderColor: 'dodgerblue',
    borderWidth: 1,
    backgroundColor: '#F0F0F0',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 3,
    flexWrap: 'wrap',
  },
  optionsButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  secondText: {
    color: '#606060',
    padding: 15,
  },
  sectionHeader: {
    padding: 15,
    fontSize: 20,
    color: '#606060',
    backgroundColor: '#f5f5f5',
  },
  testButton: {
    backgroundColor: 'dodgerblue',
  },
});
