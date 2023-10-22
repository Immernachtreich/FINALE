import React from 'react';
import NavigationDrawer from './UI/navigation_drawer';
import NavigationBottom from './UI/navigation_bottom';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamsList } from '../models/util';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './splash_screen';

const RootStack = createStackNavigator<RootStackParamsList>();

const Home_Screen = (): React.JSX.Element => {
    return (
        <>
            <View style={styles.container}>
                <NavigationContainer independent={true}>
                    <RootStack.Navigator screenOptions={{ headerShown: false }}>
                        <RootStack.Screen
                            name="SplashScreen"
                            component={SplashScreen}
                        />
                    </RootStack.Navigator>
                </NavigationContainer>
                {/* <NavigationDrawer></NavigationDrawer> */}
                <NavigationBottom></NavigationBottom>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
});

export default Home_Screen;
