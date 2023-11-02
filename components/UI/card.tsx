import React, { PropsWithChildren, JSX } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface Props extends PropsWithChildren {
    cardStyle?: ViewStyle;
}

export function Card(props: Props): JSX.Element {
    return <View style={[styles.card, props.cardStyle]}>{props.children}</View>;
}

const styles = StyleSheet.create({
    card: {
        margin: 15,
        borderRadius: 10,
        padding: 20,
    },
});
