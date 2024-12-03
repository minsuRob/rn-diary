import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
export default function TabTwoScreen() {
  return (
    <View style={{height: '100%', backgroundColor: '#044244'}}>
      <View
        style={{
          height: '50%',
          backgroundColor: '#FFF',
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          paddingHorizontal: 40,
        }}>
        <View style={{marginTop: 40, width: '100%', flexDirection: 'row'}}>
          <TouchableOpacity style={{width: '50%'}}>
            <Icon name="chevron-left" size={24} color="#044244" />
          </TouchableOpacity>
          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <Icon name="dots-three-vertical" size={24} color="#044244" />
          </View>
        </View>
        <Image
          source={require('@/images/socials/1.jpg')}
          style={{
            width: 100,
            height: 100,
            alignSelf: 'center',
            marginVertical: 20,
            borderRadius: 20,
          }}
        />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: '#044244',
            alignSelf: 'center',
          }}>
          Sibal
        </Text>
        <Text style={{fontSize: 16, color: '#9ca1a2', alignSelf: 'center'}}>
          Kiev, Ukraine
        </Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#044244',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              280
            </Text>
            <Text style={{fontSize: 16, color: '#9ca1a2', alignSelf: 'center'}}>
              photos
            </Text>
          </View>
          <View style={{marginHorizontal: 40}}>
            <Text
              style={{
                fontSize: 16,
                color: '#044244',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              280
            </Text>
            <Text style={{fontSize: 16, color: '#9ca1a2', alignSelf: 'center'}}>
              photos
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#044244',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              280
            </Text>
            <Text style={{fontSize: 16, color: '#9ca1a2', alignSelf: 'center'}}>
              photos
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
