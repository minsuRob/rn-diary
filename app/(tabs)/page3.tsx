import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

const EmojiGrid = () => {
  const emojis = [
    '😀1',
    '😂2',
    '😍3',
    '🥳4',
    '🤩5',
    '😎6',
    '🤔7',
    '😴8',
    '😇',
    '🥺9',
    '😡10',
    '🤯11',
    '🤗12',
    '🤪13',
    '🤓14',
    '😱15',
    '😭16',
    '😅17',
    '🙃18',
    '🤤19',
    '😀20',
    '😂21',
    '😍22',
    '🥳23',
    '🤩24',
    '😀25',
    '😂26',
    '😍27',
    '🥳28',
    '🤩29',
  ];

  const renderItem = ({item}: {item: string}) => (
    <View style={styles.emojiContainer}>
      <Text style={styles.emoji}>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={emojis}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={5}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 150,
  },
  grid: {
    alignItems: 'center',
  },
  emojiContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: 60,
    height: 60,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  emoji: {
    fontSize: 24,
  },
});

export default EmojiGrid;
