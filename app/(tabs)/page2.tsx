import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="chevron-left" color="#FFF" size={25} />
        </TouchableOpacity>
        <Feather name="shopping-cart" color="#FFF" size={25} />
      </View>
      <Image source={require('@/images/motorcycle2.png')} style={styles.img} />
      <View style={styles.cont3}>
        <Text style={styles.title}>Maxx Scooter</Text>
        <Text style={styles.subtitle}>Model S1</Text>
        <View style={styles.cont2}>
          <Text style={{...styles.title, flex: 2, margin: 0}}>Colors</Text>
          <View style={styles.selected}>
            <View style={styles.c1} />
          </View>
          <View style={styles.c2} />
          <View style={styles.c3} />
        </View>
        <Text style={styles.text}>lorem ipsum dododo</Text>
        <View style={styles.cont1}>
          <FontAwesome name="heart-o" color="#000" size={25} />
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  cont3: {
    backgroundColor: '#FFF',
    width: '100%',
    borderRadius: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  title: {fontSize: 25, marginTop: 30},
  subtitle: {
    fontSize: 20,
    color: '#474747',
    marginTop: 10,
    fontFamily: 'Montserrat_400Regular',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Montserrat_400Regular',
    paddingRight: 80,
    lineHeight: 25,
  },
  btn: {
    backgroundColor: '#E2443B',
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 30,
  },
  btnText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 20,
    color: '#FFF',
  },
  detail: {},
  cont1: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 40,
    flexDirection: 'row',
  },
  cont2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 25,
  },
  selected: {},
  c1: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#529CC0',
  },
  c2: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#529C47',
    marginHorizontal: 15,
  },
  c3: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: '#E2443B',
  },
  img: {width: '45%', height: '50%'},
});
