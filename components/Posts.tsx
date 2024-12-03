import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
              color: '#044244',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            MAX AA
          </Text>
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
          <Text
            style={{
              color: '#9ca1a2',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            <Icon name="sound-mix" size={24} color="#9ca1a2" />
          </Text>
        </View>
      </View>
      <View style={{width: '100%', flexDirection: 'row', paddingTop: 20}}>
        <ImageBackground
          source={require('@/images/socials/2.jpg')}
          style={{width: '100%', height: 220}}
          imageStyle={{
            borderRadius: 30,
          }}>
          <View
            style={{
              height: '100%',
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={onLikePressed}
              style={{
                marginBottom: 20,
                borderRadius: 10,
                padding: 5,
                backgroundColor: '#e8e8e8',
              }}>
              <Icon name="forward" size={24} color="#044244" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onLikePressed}
              style={{
                marginBottom: 20,
                borderRadius: 10,
                padding: 5,
                backgroundColor: '#e8e8e8',
                marginLeft: 10,
                marginRight: 20,
              }}>
              <Icon name="heart" size={24} color="#044244" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
