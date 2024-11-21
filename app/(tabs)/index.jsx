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

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const styles = StyleSheet.create({
  img: {},
  container: {},
  title: {
    gap: 8,
  },
  detail: {},
  btn: {},
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
        onPress={() => props.navigation.navigate('onboarding')}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
