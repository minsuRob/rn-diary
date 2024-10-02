import {Movie, TV} from '@/api';
import Poster from '@/components/Poster';
import {BLACK_COLOR} from '@/constants/Colors';
import {makeImgPath} from '@/utils';
import {LinearGradient} from 'expo-linear-gradient';
import {useLocalSearchParams} from 'expo-router';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native';

// const {isLoading: moviesLoading, data: moviesData} = useQuery(
//   ['movies', params.id],
//   moviesApi.detail,
//   {
//     enabled: 'original_title' in params,
//   },
// );
// const {isLoading: tvLoading, data: tvData} = useQuery(
//   ['tv', params.id],
//   tvApi.detail,
//   {
//     enabled: 'original_name' in params,
//   },
// );

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Container = styled.ScrollView`
  background-color: ${props => props.theme.mainBgColor};
`;

const Header = styled.View`
  height: ${SCREEN_HEIGHT / 4}px;
  justify-content: flex-end;
  padding: 0px 20px;
`;
const Background = styled.Image``;
const Column = styled.View`
  flex-direction: row;
  width: 80%;
`;
const Title = styled.Text`
  color: white;
  font-size: 36px;
  align-self: flex-end;
  margin-left: 15px;
  font-weight: 500;
`;
const Overview = styled.Text`
  color: white;
  margin-top: 20px;
  padding: 0px 20px;
`;

type RootStackParamList = {
  Detail: Movie | TV;
};
const Detail = () => {
  const {query, posterPath} = useLocalSearchParams<{
    query?: string;
    posterPath?: string;
  }>();

  console.log(posterPath);

  return (
    <Container>
      <Header>
        <Background
          style={StyleSheet.absoluteFill}
          source={{uri: makeImgPath(posterPath || '')}}
        />
        <LinearGradient
          colors={['transparent', BLACK_COLOR]}
          style={StyleSheet.absoluteFill}
        />
        <Column>
          <Poster path={posterPath || ''} />
          <Title>{query}</Title>
        </Column>
      </Header>
      <Overview>{'OverView'}</Overview>
    </Container>
  );
};
export default Detail;
