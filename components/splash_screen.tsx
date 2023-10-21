import React, { useEffect } from 'react';
import { Button, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { COLORS, RootStackParamsList } from '../models/util';

type Props = NativeStackScreenProps<RootStackParamsList, 'SplashScreen'>;

function SplashScreen({ navigation }: Props): JSX.Element {
  useEffect(() => {
    setTimeout(() => navigation.navigate('HomeScreen'), 3000);
  }, []);

  return (
    <View style={styles.backgroundDiv}>
      <StatusBar
        translucent={false}
        animated={true}
        barStyle={'light-content'}
        networkActivityIndicatorVisible={false}
        backgroundColor={COLORS.PRIMARY}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/finale-logo-nobg.png')}
          style={styles.logoImg}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundDiv: {
    backgroundColor: COLORS.PRIMARY,
    height: '100%',
  },
  logoImg: {
    height: 200,
    width: 200,
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default SplashScreen;
