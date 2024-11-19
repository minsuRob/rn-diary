import React from 'react';
import {StyleSheet, Image, Dimensions, Text, View} from 'react-native';
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

const h = Dimensions.get('window').width;
const w = Dimensions.get('window').height;
const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
  },
  PrevNextBtn: {
    height: 60,
    borderRadius: 30,
    backgroundColor: '#8A56AC',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
});

export default function TabTwoScreen() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  return (
    <>
      <View style={styles.PrevNextBtn}>
        <AntDesign name="arrowleft" size={22} color="#FFF" />
      </View>
      <View style={styles.PrevNextBtn}>
        <AntDesign name="arrowright" size={22} color="#FFF" />
      </View>
    </>
    // <Swiper
    //   nextButton={
    //   }></Swiper>
  );
}
