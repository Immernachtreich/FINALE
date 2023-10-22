import React, { useEffect, useState } from 'react';
import { View, Text, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS } from '../../models/util';

type ButtonStyleSheet = {
    btn: ViewStyle | ImageStyle | TextStyle;
    btnText: ViewStyle | ImageStyle | TextStyle;
};

type AvaliableStyles = {
    NORMAL: ButtonStyleSheet;
    OUTLINED: ButtonStyleSheet;
};

type Props = {
    buttonStyle: keyof AvaliableStyles;
    buttonText: string;
    additonalBtnStyles?: ViewStyle | ImageStyle | TextStyle;
    additonalBtnTextStyle?: ViewStyle | ImageStyle | TextStyle;
    onPressEvent?: () => any;
};

function PrimaryButton(props: Props): JSX.Element {
    const [styles, setStyles] = useState<ButtonStyleSheet>(
        AVALIABLE_STYLES.NORMAL,
    );

    useEffect(() => setStyles(AVALIABLE_STYLES[props.buttonStyle]), []);

    return (
        <TouchableOpacity
            onPress={props.onPressEvent}
            touchSoundDisabled={true}>
            <View style={[styles.btn, props.additonalBtnStyles]}>
                <Text style={[styles.btnText, props.additonalBtnTextStyle]}>
                    {props.buttonText}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

/**
 * STYLES
 */
const BASE_STYLE: ButtonStyleSheet = {
    btn: {
        backgroundColor: COLORS.WHITE,
        borderRadius: 5,
        paddingVertical: 10,
        borderColor: COLORS.WHITE,
        borderWidth: 2,
    },

    btnText: {
        fontFamily: 'Kanit-Regular',
        fontSize: 20,
        textAlign: 'center',
        color: COLORS.PRIMARY,
    },
};

const AVALIABLE_STYLES: AvaliableStyles = {
    NORMAL: {
        btn: { ...BASE_STYLE.btn },
        btnText: { ...BASE_STYLE.btnText },
    },
    OUTLINED: {
        btn: {
            ...BASE_STYLE.btn,
            backgroundColor: COLORS.PRIMARY,
        },
        btnText: {
            ...BASE_STYLE.btnText,
            color: COLORS.WHITE,
        },
    },
};

export default PrimaryButton;
