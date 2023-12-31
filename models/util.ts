import { NavigatorScreenParams } from '@react-navigation/native';
import { TextStyle, ViewStyle, ImageStyle } from 'react-native';

/**
 * List of all the routes with their corresponding parameters
 */
export type RootStackParamsList = {
    SplashScreen: undefined;
    Welcome: undefined;
    Login: undefined;
    Signup: undefined;
    HomeScreen: NavigatorScreenParams<HomeStackParamsList>;
};

/**
 * List of all nested routes in the Home component
 */
export type HomeStackParamsList = {
    home: undefined;
    create: undefined;
    profile: undefined;
    vault: undefined;
};

export const COLORS = {
    PRIMARY: 'rgba(197,177,250,255)',
    SECONDARY: 'rgba(242, 109, 209, 255)',
    WHITE: 'rgba(250,250,250, 255)',
    GREY: 'rgba(180,180,180, 255)',
};

export type ComponentStyle = TextStyle | ViewStyle | ImageStyle;
