// React Imports
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import {
    TouchableOpacity,
    TouchableOpacityProps,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

// Model Imports
import { COLORS, ComponentStyle } from '../../models/util';

interface Props extends TouchableOpacityProps {
    text: string;
    textStyles?: ComponentStyle;
    btnStyles?: ComponentStyle;
    icon?: string;
    isActive: boolean;
}

function AnchorLink(props: Props): React.JSX.Element {
    const [isActive, setIsActive] = useState<boolean>(true);

    useEffect(() => setIsActive(props.isActive), [props.isActive]);

    return (
        <TouchableOpacity
            style={[styles.btn, props.btnStyles]}
            onPress={props.onPress}>
            {props.icon && (
                <Icon
                    name={props.icon}
                    style={[
                        styles.text,
                        isActive && styles.active,
                        props.textStyles,
                    ]}
                />
            )}
            <Text
                style={[
                    styles.text,
                    isActive && styles.active,
                    props.textStyles,
                ]}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: { color: COLORS.PRIMARY, fontFamily: 'Kanit-Regular' },
    btn: {
        backgroundColor: 'rgba(0, 0, 0, 0)', // transparent
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    active: { color: COLORS.SECONDARY },
});

export default AnchorLink;
