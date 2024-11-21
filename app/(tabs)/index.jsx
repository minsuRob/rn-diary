import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
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
  detail: {
    color: '#FFF',
    fontFamily: 'Montserrat_400Regular',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 30,
    marginTop: 30,
  },
  btn: {
    marginTop: 80,
    backgroundColor: '#E2443B',
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  text: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 30,
    color: '#FFF',
  },
});

const App = props => {
  return (
    <View style={styles.container}>
      <Image source={require('@/images/motorcycle1.png')} style={styles.img} />
      <Text style={styles.title}>Maxx Scooter</Text>
      <Text style={styles.detail}>
        With an updated motor, and integrated anti-theft tech the maxx scooters
        are custom-tuned for the ultimate riding experience.
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => router.push('/onboarding')}>
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
