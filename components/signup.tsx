import React, { useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  View,
} from 'react-native';
import PrimaryBackground from './UI/primary-background';
import { COLORS, RootStackParamsList } from '../models/util';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PreviousButton } from './UI/navigation_buttons';
import { BasicInput } from './UI/inputs';
import PrimaryButton from './UI/button';

import { useForm, Controller, SubmitErrorHandler, FieldValues, FieldErrors } from 'react-hook-form';

type Props = NativeStackScreenProps<RootStackParamsList, 'Signup'>;

type SignupForm = {
  name: string;
  email: string;
  password: string;
};

/**
 * Main component
 */
function Signup({ navigation }: Props): JSX.Element {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<SignupForm>();

  const onError: SubmitErrorHandler<FieldValues> = (
    errors: FieldErrors<FieldValues>,
    e?: React.BaseSyntheticEvent<object, any, any>,
  ) => {};

  const [signupForm, setSignupForm] = useState<SignupForm>({
    name: '',
    email: '',
    password: '',
  });

  const [isValidated, setIsValidated] = useState<boolean>(true);

  const onFormChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    id: keyof SignupForm,
  ) => {
    const updatedForm: SignupForm = { ...signupForm };
    updatedForm[id] = e.nativeEvent.text;
    setSignupForm(updatedForm);
  };

  const validatorFn = (key: keyof SignupForm, value: string): boolean => {
    // Return true if correct value and false if invalid
    switch (key) {
      case 'name':
        return value.length > 2 && value.length < 30;
      case 'email':
        return value.includes('@') && value.includes('.');
      case 'password':
        return !value.match('^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$');
      default:
        return false;
    }
  };

  const signup = () => {
    // Validate the form
    Object.keys(signupForm).forEach((k: string) => {
      if (!isValidated) return;
      const key: keyof SignupForm = k as keyof SignupForm;
      setIsValidated(isValidated && validatorFn(key, signupForm[key]));
    });
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
          <Text style={styles.text}>{'Create\nAccount'}</Text>
          {/* <Text style={styles.subText}>One account to hold all your passwords</Text> */}
        </View>

        {/* Signup Container */}
        <View style={styles.container}>
          <BasicInput
            placeholder="Name"
            icon="user"
            spellCheck={true}
            bindingFunction={onFormChange}
            bindingValue={signupForm.name}
            id="name"
          />
          <BasicInput
            placeholder="Email"
            icon="mail"
            keyboardType="email-address"
            bindingFunction={onFormChange}
            bindingValue={signupForm.email}
            id="email"
          />
          <BasicInput
            placeholder="Password"
            secureInput={true}
            icon="lock"
            bindingFunction={onFormChange}
            bindingValue={signupForm.password}
            id="password"
          />

          <PrimaryButton
            buttonText="Sign up"
            buttonStyle="OUTLINED"
            additonalBtnStyles={{
              marginTop: 20,
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
            }}>
            -------------------------------- OR --------------------------------
          </Text>
          <PrimaryButton
            buttonText="Log in"
            buttonStyle="NORMAL"
            additonalBtnStyles={{
              borderColor: COLORS.PRIMARY,
              marginTop: 20,
            }}
            onPressEvent={signup}
          />
        </View>
      </View>
    </>
  );
}

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
});

export default Signup;
