import React from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';

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
    <EmojiContainer>
      <Emoji>{item}</Emoji>
    </EmojiContainer>
  );

  return (
    <Container>
      <FlatList
        data={emojis}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={5}
        contentContainerStyle={{alignItems: 'center'}}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const EmojiContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 50px;
  height: 50px;
  background-color: #f0f0f0;
  border-radius: 10px;
  shadow-color: #000;
  /* shadow-offset: { width: 0, height: 2 }; */
  shadow-opacity: 0.1;
  shadow-radius: 3px;
  elevation: 2;
`;

const Emoji = styled.Text`
  font-size: 24px;
`;

export default EmojiGrid;
