import {tvApi} from '@/api';
import Loader from '@/components/Loader';
import VMedia from '@/components/VMedia';
import React from 'react';
import {FlatList, ScrollView, Text} from 'react-native';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';
import {useQuery} from 'react-query';

const Tv = () => {
  const {isLoading: todayLoading, data: todayData} = useQuery(
    ['tv', 'today'],
    tvApi.airingToday,
  );
  const {isLoading: topLoading, data: topData} = useQuery(
    ['tv', 'top'],
    tvApi.topRated,
  );
  const {isLoading: trendingLoading, data: trendingData} = useQuery(
    ['tv', 'trending'],
    tvApi.trending,
  );
  const loading = todayLoading || topLoading || trendingLoading;
  if (loading) {
    return <Loader />;
  }

  return (
    <ScrollView>
      <FlatList
        data={trendingData.results}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <VMedia
            posterPath={item.poster_path}
            originalTitle={item.original_name}
            voteAverage={item.vote_average}
          />
        )}
      />
      <FlatList
        data={todayData.results}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <VMedia
            posterPath={item.poster_path}
            originalTitle={item.original_name}
            voteAverage={item.vote_average}
          />
        )}
      />
      <FlatList
        data={topData.results}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <VMedia
            posterPath={item.poster_path}
            originalTitle={item.original_name}
            voteAverage={item.vote_average}
          />
        )}
      />
    </ScrollView>
  );
};

export default Tv;
