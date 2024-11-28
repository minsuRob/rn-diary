import React from 'react';
import {Image, Text, View} from 'react-native';
import Icon from '@expo/vector-icons/Entypo';

export default function Posts() {
  const [liked, setLiked] = React.useState(false);
  const onLikePressed = () => {
    setLiked(!liked);
  };
  return (
    <View>
      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          flexDirection: 'row',
          // backgroundColor: '#AA1515',
        }}>
        <View
          style={{
            width: '20%',
          }}>
          <Image
            source={require('@/images/socials/1.jpg')}
            style={{width: 50, height: 50, borderRadius: 13}}
          />
        </View>
        <View
          style={{
            width: '60%',
            //  backgroundColor: '#AA1515'
          }}>
          <Text
            style={{
              color: '#9ca1a2',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            2 Mins ago
          </Text>
        </View>
        <View
          style={{
            width: '20%',
            alignItems: 'flex-end',
            // backgroundColor: '#AA1515',
          }}>
          <Text style={{color: '#9ca1a2', fontSize: 16, fontWeight: 'bold'}}>
            <Icon name="sound-mix" size={24} color="#9ca1a2" />
          </Text>
        </View>
      </View>
    </View>
  );
}
