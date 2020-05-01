import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

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
                        Header
                    </Text>
                </View>
            </View>
            <View style={styles.block}>
                <View>
                    <Text >
                        Seus Horarios marcados
                    </Text>
                </View>
            </View>
            <View style={styles.block}>
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
            <View style={styles.block}>
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
            <View style={styles.blockFooter}>
                <View style={styles.blockFooterContent}>
                    <View style={styles.valores}>
                        <Text style={styles.valoresTxt}>
                            R$ 40,00
                        </Text>
                        <Text style={styles.valoresTxt}>
                            30 min
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={navigateToDetail}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            AGENDAR
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}