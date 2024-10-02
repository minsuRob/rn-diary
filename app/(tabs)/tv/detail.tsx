import {useLocalSearchParams} from 'expo-router';
import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const Detail = () => {
  const {query} = useLocalSearchParams<{
    query?: string;
  }>();

  <View>
    <Text>Detail</Text>
  </View>;
};
export default Detail;
