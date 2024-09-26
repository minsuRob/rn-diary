import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, Image} from 'react-native';
import * as Font from 'expo-font';
import {Asset, useAssets} from 'expo-asset';
import {Ionicons} from '@expo/vector-icons';

const loadFonts = (fonts: any) =>
  fonts.map((font: any) => Font.loadAsync(font));

const loadImages = (images: any) =>
  images.map((image: any) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.loadAsync(image);
    }
  });

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => setReady(true);
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    const images = loadImages(['https://reactnative.dev/img/oss_logo.png']);
    await Promise.all([...fonts, ...images]);
  };

  return <Text>We are done loading!</Text>;
}
