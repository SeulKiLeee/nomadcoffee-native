
import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme, Appearance } from 'react-native';
import LoggedOutNav from './navigators/LoggedOutNav';
import LoggedInNav from './navigators/LoggedInNav';

export default function App() {
  const colorScheme = useColorScheme();

  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const preload = () => {
    const fontsToLoad = [Ionicons.font]
    const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
    const imagesToLoad = [require('./assets/Logo2x.png'), 'https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_US&gl=US'];
    const imagesPromises = imagesToLoad.map((image) => Asset.loadAsync(image));
    console.log(fontPromises);
      return Promise.all([...fontPromises, ...imagesPromises]);
  };
  if(loading) {
    return (<AppLoading startAsync={preload} onError={console.warn} onFinish={onFinish} />);
  }

  // const colorScheme = Appearance.getColorScheme();
  const subscription = Appearance.addChangeListener(({colorScheme}) => {
    console.log(colorScheme)
  });
  if (colorScheme === 'dark') {
    // Use dark color scheme
  }

  return (
    <NavigationContainer>
      <LoggedOutNav />
      {/* <LoggedInNav /> */}
    </NavigationContainer>);
}


