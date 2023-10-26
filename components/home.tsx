import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamsList } from '../models/util';
import { Text } from 'react-native';

type Props = NativeStackScreenProps<HomeStackParamsList, 'home'>;

function Home(props: Props): React.JSX.Element {
    return (
        <>
            <Text>HELLO</Text>
        </>
    );
}

export default Home;
