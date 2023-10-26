import React from 'react';
import NavigationBottom from './UI/navigation_bottom';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStackParamsList, RootStackParamsList } from '../models/util';
import { NavigationContainer } from '@react-navigation/native';
import Header from './UI/header';
import Home from './home';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const HomeStack = createStackNavigator<HomeStackParamsList>();

type Props = NativeStackScreenProps<RootStackParamsList, 'HomeScreen'>;

const Home_Screen = ({ navigation }: Props): React.JSX.Element => {
    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header />

                {/* Nested Navigation */}
                <NavigationContainer independent={true}>
                    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
                        <HomeStack.Screen name="home" component={Home} />
                    </HomeStack.Navigator>
                </NavigationContainer>

                {/* Bottom Navigation */}
                <NavigationBottom navigation={navigation}></NavigationBottom>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});

export default Home_Screen;
