import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
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
    return <AppLoading startAsync={preload} onError={console.warn} onFinish={onFinish} />;
  }
  return (
    <View style={styles.container}>
      <Text>Nomad Coffee Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
