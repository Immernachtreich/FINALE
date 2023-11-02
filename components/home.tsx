import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { COLORS, HomeStackParamsList } from '../models/util';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryButton from './UI/button';
import { Card } from './UI/card';
import AnchorLink from './UI/link';
import IconButton from './UI/icon_button';
import { ScrollView } from 'react-native-gesture-handler';

type Props = NativeStackScreenProps<HomeStackParamsList, 'home'>;

function Home(props: Props): React.JSX.Element {
    const passwords = [
        {
            id: 1,
            name: 'Facebook',
            site: 'https://facebook.com',
        },
        {
            id: 2,
            name: 'Instagram',
            site: 'https://instagram.com',
        },
        {
            id: 3,
            name: 'Facebook',
            site: 'https://facebook.com',
        },
        {
            id: 4,
            name: 'Instagram',
            site: 'https://instagram.com',
        },
    ];

    const renderPasswords = () => {
        return passwords.map(pass => (
            <Card
                key={pass.id}
                cardStyle={{
                    backgroundColor: COLORS.PRIMARY,
                    margin: 0,
                    marginVertical: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <View
                    style={{
                        flex: 0.7,
                    }}>
                    <Text
                        style={{
                            color: COLORS.WHITE,
                            fontFamily: 'Kanit-Regular',
                            fontSize: 16,
                        }}>
                        {pass.name}
                    </Text>
                    <Text
                        style={{
                            color: COLORS.WHITE,
                            fontFamily: 'Kanit-Regular',
                            fontSize: 12,
                        }}
                        numberOfLines={1}>
                        {pass.site}
                    </Text>
                </View>

                <View
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        flex: 0.3,
                    }}>
                    <IconButton
                        icon="content-copy"
                        iconType="MATERIAL"
                        isActive={false}
                        additionalIconStyle={{ fontSize: 16 }}
                    />
                    <IconButton
                        icon="dots-vertical"
                        iconType="MATERIAL"
                        isActive={false}
                        additionalIconStyle={{ fontSize: 16 }}
                    />
                </View>
            </Card>
        ));
    };

    return (
        // Container
        <View style={styles.container}>
            {/* Card */}
            <Card cardStyle={{ backgroundColor: COLORS.PRIMARY }}>
                <Text style={styles.cardText}>Generate a new Password</Text>
                <PrimaryButton buttonStyle="OUTLINED" buttonText="Generate" />
            </Card>

            <Card>
                <View style={styles.flexContainer}>
                    <Text style={styles.subTitleText}>Manage Passwords</Text>
                    <AnchorLink
                        isActive={false}
                        text="View all"
                        textStyles={{ fontSize: 18 }}
                    />
                </View>

                <ScrollView
                    style={{
                        height: 200,
                    }}>
                    {renderPasswords()}
                </ScrollView>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    cardText: {
        fontFamily: 'Kanit-Regular',
        color: COLORS.WHITE,
        fontSize: 30,
        marginVertical: 10,
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subTitleText: {
        fontFamily: 'Kanit-Regular',
        color: COLORS.GREY,
        fontSize: 18,
    },
});

export default Home;
