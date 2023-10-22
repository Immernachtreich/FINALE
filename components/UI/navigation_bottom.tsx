import React from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from './icon_button';
import { COLORS } from '../../models/util';

function NavigationBottom(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <IconButton
                icon="home-outline"
                activeIcon="home"
                isActive={true}
                additionalIconStyle={styles.iconText}
            />
            <IconButton
                icon="plus-circle-outline"
                activeIcon="plus-circle"
                isActive={false}
                additionalIconStyle={styles.iconText}
            />
            <IconButton
                icon="account-outline"
                activeIcon="account"
                isActive={false}
                additionalIconStyle={styles.iconText}
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
