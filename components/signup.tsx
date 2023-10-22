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
    const signupFormSchema = yup.object().shape({
        name: yup
            .string()
            .min(2, 'Name must be minimum 2 characters')
            .max(30, 'Name must be maximum 30 characters')
            .required('Name is required'),
        email: yup
            .string()
            .email('Email must be a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .matches(
                RegExp(
                    '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
                ),
                'Password must be at least 8 characters long, must contain at least one uppercase letter, one lowercase letter, one number and one special character',
            )
            .required('Password is required'),
    });

    const {
        handleSubmit,
        control,
        formState: { isSubmitSuccessful },
    } = useForm<SignupForm>({ resolver: yupResolver(signupFormSchema) });

    const onSignup: SubmitHandler<SignupForm> = async (
        value: SignupForm,
    ): Promise<void> => {
        /**
         * Send request to backend with the data and store the token in some storage
         * After storing the token, redirect the user to the main page.
         */
        return navigation.navigate('HomeScreen');
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
                    <PreviousButton
                        onPressEvent={() =>
                            navigation.goBack()
                        }></PreviousButton>
                </View>

                {/* Pandering Text */}
                <View
                    style={{
                        width: '100%',
                        marginTop: 80,
                        paddingHorizontal: 20,
                    }}>
                    <Text style={styles.text}>{'Create\nAccount'}</Text>
                    <Text style={styles.subText}>
                        One account to hold all your passwords
                    </Text>
                </View>

                {/* Signup Container */}
                <View style={styles.container}>
                    {/* Name */}
                    <Controller
                        name="name"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <BasicInput
                                placeholder="Name"
                                icon="user"
                                spellCheck={true}
                                id="name"
                                onChangeText={value => onChange(value)}
                                value={value}
                                invalid={control.getFieldState('name').invalid}
                                isDirty={
                                    control.getFieldState('name').isDirty ||
                                    !isSubmitSuccessful
                                }
                                invalidMsg={
                                    control.getFieldState('name').error?.message
                                }
                            />
                        )}
                    />
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
                                isDirty={
                                    control.getFieldState('email').isDirty ||
                                    !isSubmitSuccessful
                                }
                                invalidMsg={
                                    control.getFieldState('email').error
                                        ?.message
                                }
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
                                secureTextEntry={true}
                                onChangeText={value => onChange(value)}
                                value={value}
                                invalid={
                                    control.getFieldState('password').invalid
                                }
                                isDirty={
                                    control.getFieldState('password').isDirty ||
                                    !isSubmitSuccessful
                                }
                                invalidMsg={
                                    control.getFieldState('password').error
                                        ?.message
                                }
                            />
                        )}
                    />

                    {/* Buttons */}
                    <PrimaryButton
                        buttonText="Sign up"
                        buttonStyle="OUTLINED"
                        additonalBtnStyles={{
                            marginTop: 20,
                        }}
                        onPressEvent={handleSubmit(onSignup)}
                    />
                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 10,
                        }}>
                        -------------------------------- OR
                        --------------------------------
                    </Text>
                    <PrimaryButton
                        buttonText="Log in"
                        buttonStyle="NORMAL"
                        additonalBtnStyles={{
                            borderColor: COLORS.PRIMARY,
                            marginTop: 20,
                        }}
                        onPressEvent={() => navigation.navigate('Login')}
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
