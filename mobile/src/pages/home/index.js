import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Alert, Image, Text, TouchableOpacity } from 'react-native';



import logoImg from '../../assets/HStyles/modelo-1.png/';

import styles from './styles';

export default function home() {

    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('schedules');
    }
    //////////////////////////////////////////////
    const fidelityAlert = () =>
        Alert.alert(
            "Fidelidade",
            "Cada 5 vezes que for realizado um serviço no salão você ganha um premio!",
            [
                { text: "Entendi", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    //////////////////////////////////////////////
    //////////////////////////////////////////////
    const servicesAlert = () =>
        Alert.alert(
            "Serviços",
            "Selecione os serviços desejados e o valor aparecerá em baixo acompanhado da estimativa de tempo para realizar o serviço ",
            [
                { text: "Entendi", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    //////////////////////////////////////////////



    return (
        <View style={styles.container}>
            <View style={styles.blockFidelity}>
                <TouchableOpacity
                    style={styles.headerBlock}
                    onPress={fidelityAlert}
                >
                    <Text >
                        Fidelidade
                    </Text>
                    <Text >
                        ?
                    </Text>
                </TouchableOpacity>

                <View style={styles.fidelity}>
                    <View style={styles.fidelityCounterActive}></View>
                    <View style={styles.fidelityCounterActive}></View>
                    <View style={styles.fidelityCounterActive}></View>
                    <View style={styles.fidelityCounterInative}></View>
                    <View style={styles.fidelityCounterInative}></View>

                </View>
            </View>
            <View style={styles.blockDemo}>
                <TouchableOpacity
                    onPress={servicesAlert}
                    style={styles.headerBlock}>
                    <Text >Serviços </Text>
                    <Text >?</Text>
                </TouchableOpacity>
                <View style={styles.Viewdemo}>
                    <Image style={styles.demo} source={logoImg} />
                </View>

            </View>


            <View style={styles.blockServices}>
                <FlatList
                    style={styles.ServicesList}
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={service => String(service)}
                    renderItem={() => (
                        <TouchableOpacity
                            style={styles.serviceSection}
                            onPress={() => { }}
                        >
                            <View style={styles.serviceIcon}></View>
                            <Text >Corte</Text>
                        </TouchableOpacity>
                    )}
                />
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

