import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../models/util';
import IconButton from './icon_button';

function Header(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/finale-only-logo-nobg.png')}
                    style={styles.logo}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    flex: 0.4,
                }}>
                <IconButton
                    iconType="ANTDESIGN"
                    icon="search1"
                    isActive={false}
                    additionalIconStyle={styles.icon}
                />
                <IconButton
                    iconType="ANTDESIGN"
                    icon="setting"
                    isActive={false}
                    additionalIconStyle={styles.icon}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.PRIMARY,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoContainer: {
        padding: 5,
        marginHorizontal: 5,
    },
    logo: {
        width: 50,
        height: 50,
        tintColor: COLORS.WHITE,
    },
    icon: {
        fontSize: 25,
    },
});

export default Header;
