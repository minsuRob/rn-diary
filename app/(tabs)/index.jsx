import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Swiper from 'react-native-swiper';
// import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import {router} from 'expo-router';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const styles = StyleSheet.create({
  img: {
    height: '50%',
    width: '120%',
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  title: {
    color: '#FFF',
    fontFamily: 'Montserrat_700Bold',
    fontSize: 30,
    marginTop: 20,
  },
});

const App = props => {
  const [popularSelected, setPopularSelected] = React.useState();
  const onTabPressed = () => {
    setPopularSelected(!popularSelected);
  };
  return (
    <ScrollView
      style={{
        height: '100%',
        backgroundColor: '#044244',
      }}>
      <View
        style={{
          height: 260,
          paddingHorizontal: 35,
          // backgroundColor: '#FFF',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            paddingTop: 40,
            alignItems: 'center',
          }}>
          <View style={{width: '50%'}}>
            <Image
              source={require('@/images/picstack/Untitled.png')}
              style={{
                width: 20,
                height: 20,
              }}
            />
          </View>
          <View style={{width: '50%', alignItems: 'flex-end'}}>
            <Icon
              size={22}
              name="dots-two-vertical"
              color="#d2d2d2"
              style={{marginTop: 7, marginRight: -7}}
            />
          </View>
        </View>
        <Text style={{fontSize: 25, color: '#FFF', paddingVertical: 25}}>
          Find Awesome Photos
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderColor: '#9ca1a2',
            borderRadius: 20,
            borderWidth: 0.2,
            paddingVertical: 5,
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="search inispriation..."
            style={{
              color: '#9ca1a2',
              fontSize: 14,
              paddingHorizontal: 20,
              width: '90%',
              // backgroundColor: '#FAF',
            }}
          />
          <Icon name="magnifying-glass" size={18} color="#9ca1a2" />
        </View>
      </View>
      <View>
        <View>
          <TouchableOpacity
            style={{
              borderBottomColor: popularSelected ? '#FAF' : '#FFF',
              borderBottomWidth: 4,
              paddingVertical: 6,
            }}>
            <Text>MOST POPULAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
