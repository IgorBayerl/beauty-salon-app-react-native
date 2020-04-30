import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function agend() {

    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('home');
    }



    return (
        <View style={styles.container}>

            <View style={styles.block}>
                <View>
                    <Text >
                        Seus Horarios marcados
                    </Text>
                </View>
            </View>
            <View>
                <View>
                    <Text >
                        Selecione o dia
                    </Text>
                </View>
                <View>
                    <Text >
                        25-02
                    </Text>
                </View>
            </View>
            <View>
                <View>
                    <Text >
                        Horarios Disponiveis
                    </Text>
                </View>
                <View>
                    <Text >
                        9:00
                    </Text>
                    <Text >
                        9:00
                    </Text>
                    <Text >
                        9:00
                    </Text>
                    <Text >
                        9:00
                    </Text>
                </View>
            </View>
            <View>
                <View>
                    <Text >
                        40,00
                    </Text>
                    <Text >
                        30min
                    </Text>
                </View>
                <View>
                    <Text
                        onPress={navigateToDetail}>
                        agendar
                    </Text>
                </View>
            </View>
        </View>
    );
}