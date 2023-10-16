import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { COLORS, RootStackParamsList } from '../models/util';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PrimaryButton from './UI/button';
import PrimaryBackground from './UI/primary-background';

type Props = NativeStackScreenProps<RootStackParamsList, 'Welcome'>;

function Welcome({ navigation }: Props): JSX.Element {
  return (
    <>
      <PrimaryBackground></PrimaryBackground>
      <View style={styles.outerContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/finale-logo-nobg.png')}
            style={styles.logoImg}></Image>
        </View>

        {/* Login Box */}
        <View>
          <Text style={styles.loginTitle}>Password Manager</Text>
          <Text style={styles.loginSubtitle}>One place to manage all your passwords</Text>
          <PrimaryButton
            buttonStyle="NORMAL"
            onPressEvent={() => navigation.navigate('Login')}
            buttonText="Log in"
            additonalBtnStyles={{
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          />
          <PrimaryButton
            buttonStyle="OUTLINED"
            onPressEvent={() => navigation.navigate('Signup')}
            buttonText="Sign up"
            additonalBtnStyles={{
              marginHorizontal: 20,
              marginVertical: 10,
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  /** Logo */
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    height: 200,
    width: 200,
  },

  loginTitle: {
    fontFamily: 'Kanit-Regular',
    color: COLORS.WHITE,
    fontSize: 30,
    paddingLeft: 20,
  },

  loginSubtitle: {
    fontFamily: 'Kanit-Regular',
    color: COLORS.WHITE,
    fontSize: 15,
    paddingLeft: 20,
    paddingBottom: 20,
  },
});

export default Welcome;
