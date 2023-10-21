// Package imports
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  useForm,
  Controller,
  SubmitErrorHandler,
  FieldErrors,
  SubmitHandler,
} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Component imports
import PrimaryBackground from './UI/primary-background';
import { PreviousButton } from './UI/navigation_buttons';
import { BasicInput } from './UI/inputs';
import PrimaryButton from './UI/button';

// Model imports
import { COLORS, RootStackParamsList } from '../models/util';
import AnchorLink from './UI/link';

type Props = NativeStackScreenProps<RootStackParamsList, 'Login'>;

type LoginForm = {
  email: string;
  password: string;
};

const Login = ({ navigation }: Props): React.JSX.Element => {
  const loginFormSchema = yup.object().shape({
    email: yup.string().email('Email must be a valid email').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const {
    handleSubmit,
    control,
    formState: { isSubmitSuccessful },
  } = useForm<LoginForm>({ resolver: yupResolver(loginFormSchema) });

  const onLogin: SubmitHandler<LoginForm> = (value: LoginForm) => {
    /**
     * Send request to backend with the data and store the token in some storage
     * After storing the token, redirect the user to the main page.
     */
    navigation.navigate('HomeScreen');
  };

  return (
    <>
      <PrimaryBackground></PrimaryBackground>
      <View
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: '100%',
        }}>
        <View
          style={{
            alignSelf: 'flex-start',
          }}>
          <PreviousButton onPressEvent={() => navigation.goBack()}></PreviousButton>
        </View>

        {/* Pandering Text */}
        <View
          style={{
            width: '100%',
            marginTop: 80,
            paddingHorizontal: 20,
          }}>
          <Text style={styles.text}>{'Welcome\nBack'}</Text>
          <Text style={styles.subText}>Glad to have you back!</Text>
        </View>

        {/* Signup Container */}
        <View style={styles.container}>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <BasicInput
                placeholder="Email"
                icon="mail"
                spellCheck={true}
                id="email"
                onChangeText={value => onChange(value)}
                value={value}
                invalid={control.getFieldState('email').invalid}
                isDirty={control.getFieldState('email').isDirty || !isSubmitSuccessful}
                invalidMsg={control.getFieldState('email').error?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <BasicInput
                placeholder="Password"
                icon="lock"
                spellCheck={true}
                onChangeText={value => onChange(value)}
                secureTextEntry={true}
                value={value}
                invalid={control.getFieldState('password').invalid}
                isDirty={control.getFieldState('password').isDirty || !isSubmitSuccessful}
                invalidMsg={control.getFieldState('password').error?.message}
              />
            )}
          />

          <View style={styles.linkContainer}>
            <AnchorLink text="Forgot password?" />
          </View>

          {/* Buttons */}
          <PrimaryButton
            buttonText="Login"
            buttonStyle="OUTLINED"
            additonalBtnStyles={{
              marginTop: 20,
            }}
            onPressEvent={handleSubmit(onLogin)}
          />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
            }}>
            -------------------------------- OR --------------------------------
          </Text>
          <PrimaryButton
            buttonText="Sign up"
            buttonStyle="NORMAL"
            additonalBtnStyles={{
              borderColor: COLORS.PRIMARY,
              marginTop: 20,
            }}
            onPressEvent={() => navigation.navigate('Signup')}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 50,
    padding: 30,
    height: '100%',
    backgroundColor: COLORS.WHITE,
  },

  text: {
    fontFamily: 'Kanit-Regular',
    fontSize: 40,
    textAlign: 'justify',
    color: COLORS.WHITE,
    lineHeight: 45,
  },
  subText: {
    fontFamily: 'Kanit-Regular',
    fontSize: 20,
    textAlign: 'left',
    color: COLORS.WHITE,
    lineHeight: 25,
  },
  linkContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
});

export default Login;
