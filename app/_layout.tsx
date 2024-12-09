import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';

import {useColorScheme} from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const darkTheme = {
    color: 'white',
    bgColor: 'rgb(50,50,50)',
    containerColor: 'rgb(30,30,30)',
    textAlign: 'flex-end',
  };

  const lightTheme = {
    color: 'red',
    containerColor: 'rgb(220,220,220)',
    textAlign: 'flex-start',
    bgColor: 'white',
  };

  const isDark = colorScheme === 'dark';

  return (
    <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{headerShown: false}} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </StyledThemeProvider>
    </ThemeProvider>
  );
}
