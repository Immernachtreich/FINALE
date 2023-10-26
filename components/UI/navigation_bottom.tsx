import React from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from './icon_button';
import { COLORS, RootStackParamsList } from '../../models/util';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
    navigation: NativeStackNavigationProp<
        RootStackParamsList,
        'HomeScreen',
        undefined
    >;
};

function NavigationBottom({ navigation }: Props): React.JSX.Element {
    return (
        <View style={styles.container}>
            <IconButton
                icon="home-outline"
                activeIcon="home"
                isActive={true}
                additionalIconStyle={styles.iconText}
                iconType="MATERIAL"
            />
            <IconButton
                icon="plus-circle-outline"
                activeIcon="plus-circle"
                isActive={false}
                additionalIconStyle={styles.iconText}
                iconType="MATERIAL"
            />
            <IconButton
                icon="account-outline"
                activeIcon="account"
                isActive={false}
                additionalIconStyle={styles.iconText}
                iconType="MATERIAL"
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
