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
  text: {},
  title: {},
  img: {},
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
    <Swiper
      showsButtons={true}
      activeDotColor="#8A56AC"
      dotColor="#998FA2"
      nextButton={
        <View style={styles.PrevNextBtn}>
          <AntDesign name="arrowright" size={22} color="#FFF" />
        </View>
      }
      prevButton={
        <View style={styles.PrevNextBtn}>
          <AntDesign name="arrowleft" size={22} color="#FFF" />
        </View>
      }>
      <View>
        <Image source={require('@/images/img1.png')} style={styles.img} />
        <Text style={styles.title}>Meet Up UI-Kit</Text>
        <Text style={styles.text}>
          When I was 5 years old, my mother always told me that happiness was
          the key to life. When I went to school, they asked me what I wanted to
          be when I grew up.
        </Text>
      </View>
      <View>
        <Text>Meet up UI-KIT2</Text>
      </View>
      <View>
        <Text>Meet up UI-KIT3</Text>
      </View>
    </Swiper>
  );
}
