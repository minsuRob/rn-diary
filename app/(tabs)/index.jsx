import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
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
  return (
    <ImageBackground
      source={require('@/images/home.png')}
      style={{width: '100%', height: '100%'}}></ImageBackground>
  );
};

export default App;
