import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { COLORS, ComponentStyle } from '../../models/util';

interface Props extends TouchableOpacityProps {
    icon: string;
    isActive: boolean;
    activeIcon?: string;
    additionalButtonStyle?: ComponentStyle;
    additionalIconStyle?: ComponentStyle;
}

function IconButton(props: Props): React.JSX.Element {
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => setIsActive(props.isActive), [props.isActive]);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[
                    styles.button,
                    props.additionalButtonStyle,
                    props.isActive && styles.isActiveButton,
                ]}>
                <Icon
                    name={
                        isActive ? props.activeIcon ?? props.icon : props.icon
                    }
                    style={[
                        styles.icon,
                        props.additionalIconStyle,
                        props.isActive && styles.isActiveIcon,
                    ]}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon: {
        fontFamily: 'Kanit-Regular',
        color: COLORS.WHITE,
    },
    isActiveIcon: {
        // color: COLORS.WHITE,
    },
    isActiveButton: {
        // backgroundColor: COLORS.PRIMARY,
    },
});

export default IconButton;
