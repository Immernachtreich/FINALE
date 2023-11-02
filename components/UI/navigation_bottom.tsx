import React from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from './icon_button';
import {
    COLORS,
    HomeStackParamsList,
    RootStackParamsList,
} from '../../models/util';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
    navigation: NativeStackNavigationProp<
        RootStackParamsList,
        'HomeScreen',
        undefined
    >;
};

function NavigationBottom({ navigation }: Props): React.JSX.Element {
    const navigateToHomeScreenPage = (screen: keyof HomeStackParamsList) => {
        navigation.navigate('HomeScreen', { screen: screen });
    };

    return (
        <View style={styles.container}>
            <IconButton
                icon="home-outline"
                activeIcon="home"
                isActive={true}
                additionalIconStyle={styles.iconText}
                iconType="MATERIAL"
                onPress={() => navigateToHomeScreenPage('home')}
            />
            <IconButton
                icon="key-outline"
                activeIcon="key"
                isActive={false}
                additionalIconStyle={styles.iconText}
                iconType="MATERIAL"
                onPress={() => navigateToHomeScreenPage('profile')}
            />
            <IconButton
                icon="plus-circle-outline"
                activeIcon="plus-circle"
                isActive={false}
                additionalIconStyle={styles.iconText}
                iconType="MATERIAL"
                onPress={() => navigateToHomeScreenPage('create')}
            />
            <IconButton
                icon="account-outline"
                activeIcon="account"
                isActive={false}
                additionalIconStyle={styles.iconText}
                iconType="MATERIAL"
                onPress={() => navigateToHomeScreenPage('profile')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: COLORS.PRIMARY,
    },
    iconText: {
        fontSize: 30,
    },
});

export default NavigationBottom;
