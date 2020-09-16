import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    View,
    FlatList,
    Alert,
    Text,
    TouchableOpacity,
    Modal,
} from 'react-native';
import api from '../../services/api';

import DateTimePicker from '@react-native-community/datetimepicker';
import SelectImage from './hairStyles'
import { FontAwesome5, } from '@expo/vector-icons';

import styles from './styles';

export default function home() {

    const [data, setData] = useState([
        {
            "id": 1,
            "style": "Corte",
            "state": false,
            "time": 0,
            "price": 0,
            "value": 0
        },
        {
            "id": 2,
            "style": "Escova",
            "state": false,
            "time": 0,
            "price": 0,
            "value": 100
        },
        {
            "id": 3,
            "style": "Tintura",
            "state": false,
            "time": 0,
            "price": 0,
            "value": 1
        },
        {
            "id": 4,
            "style": "Mechas",
            "state": false,
            "time": 0,
            "price": 0,
            "value": 10
        },
        {
            "id": 5,
            "style": "Hidratação",
            "state": false,
            "time": 0,
            "price": 0,
            "value": 0
        },
    ])

    function somatoria() {
        for (i = 0; i <= data.length; i++) {

        }
    }
    const name = 'User'
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [hora, setHora] = useState([10, 30])
    const [dia, setDia] = useState([12, 8, 2020])
    const [update, setUpdate] = useState(false)
    const [selectedImage, setSelectedImage] = useState(1)
    const [price, setPrice] = useState("0")
    const [time, setTime] = useState("0")
    const [modalVisible, setModalVisible] = useState(false)


    const navigation = useNavigation();

    function navigateToDetail() {
        navigation.navigate('schedules');
    }

    function setActive(item) {
        let tempArray = data
        tempArray[item.id - 1].state = !tempArray[item.id - 1].state
        console.log(tempArray)
        funcao()
        setData(tempArray)
        setUpdate(!update)
    }

    async function agendar() {
        try {
            const response = await api.post('agendar', {
                name: name,
                array: data,
                date: date
            })
            console.log(response)
            alert('Agendamento feito com sucesso!')
            setModalVisible(!modalVisible)

        } catch (error) {
            console.log(error)
        }
    }


    function funcao() {
        if (data[1].state == false) {
            if (data[2].state == false) {
                if (data[3].state == false) {
                    setSelectedImage(1)
                    setTime('20')
                    setPrice('50')
                } else {
                    setSelectedImage(7)
                    setTime('30')
                    setPrice('60')
                }
            } else {
                if (data[3].state == false) {
                    setSelectedImage(2)
                    setTime('35')
                    setPrice('60')
                } else {
                    setSelectedImage(5)
                    setTime('45')
                    setPrice('70')
                }
            }
        } else {
            if (data[2].state == false) {
                if (data[3].state == false) {
                    setSelectedImage(3)
                    setTime('50')
                    setPrice('75')
                } else {
                    setSelectedImage(8)
                    setTime('60')
                    setPrice('85')
                }
            } else {
                if (data[3].state == false) {
                    setSelectedImage(4)
                    setTime('90')
                    setPrice('95')
                } else {
                    setSelectedImage(6)
                    setTime('75')
                    setPrice('100')
                }
            }
        }
    }
    /////////////////////////////////////////


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    /////////////////////////////////////////

    const fidelityAlert = () =>
        Alert.alert(
            "Fidelidade",
            "Cada 5 vezes que for realizado um serviço no salão você ganha um premio!",
            [
                { text: "Entendi", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: true }
        );


    const servicesAlert = () =>
        Alert.alert(
            "Serviços",
            "Selecione os serviços desejados e o valor aparecerá em baixo acompanhado da estimativa de tempo para realizar o serviço ",
            [
                { text: "Entendi", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: true }
        );

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
                    <SelectImage case={selectedImage} />
                    <View style={{ justifyContent: "space-between", flexDirection: 'row', width: '100%', marginBottom: 20, height: 40 }}>
                        {data[0].state == true ?
                            <FontAwesome5 name="cut" size={35} color="#de2424" />
                            :
                            <FontAwesome5 name="cut" size={25} color="grey" />
                        }
                        {data[4].state == true ?
                            <FontAwesome5 name="bacon" size={35} color="#de2424" />
                            :
                            <FontAwesome5 name="bacon" size={25} color="grey" />
                        }

                    </View>
                </View>

            </View>


            <View style={styles.blockServices}>
                <FlatList
                    style={styles.ServicesList}
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    extraData={update}
                    keyExtractor={data => String(data.id)}
                    renderItem={({ item: item }) => (
                        <TouchableOpacity
                            style={styles.serviceSection}
                            onPress={() => { setActive(item) }}
                        >
                            <View style={item.state == true ? { ...styles.serviceIcon } : { ...styles.serviceIcon, backgroundColor: "grey" }}></View>
                            <Text >{String(item.style)}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={styles.blockFooter}>
                <View style={styles.blockFooterContent}>
                    <View style={styles.valores}>
                        <Text style={styles.valoresTxt}>
                            R$ {price},00
                        </Text>
                        <Text style={styles.valoresTxt}>
                            {time} minutos
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            AGENDAR
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: 'white', width: '80%', height: '60%', alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                        <View style={{ width: '90%', height: '33%', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                            {/* <Button onPress={showDatepicker} title="Show date picker!" /> */}
                            <View style={{ width: '100%' }}>
                                <View style={{ width: '100%', height: 40, alignItems: 'center' }}>
                                    <Text style={{ width: '90%', height: 40, textAlign: 'center' }}>
                                        {String(date)}
                                    </Text>

                                </View>
                                <View style={{ width: '100%' }}>
                                    <TouchableOpacity
                                        onPress={showDatepicker}
                                        style={{ ...styles.button, width: '90%', height: 40 }}
                                    >
                                        <Text style={{ ...styles.buttonText }}>
                                            Data
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '100%' }}>
                                    <TouchableOpacity
                                        onPress={showTimepicker}
                                        style={{ ...styles.button, width: '90%', height: 40 }}
                                    >
                                        <Text style={{ ...styles.buttonText }}>
                                            Hora
                                    </Text>
                                    </TouchableOpacity>
                                </View>

                                {show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={date}
                                        mode={mode}
                                        is24Hour={true}
                                        display="default"
                                        onChange={onChange}
                                    />
                                )}
                            </View>
                        </View>
                        <View style={{ width: '80%', height: '20%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f2f2f2', borderRadius: 20 }}>
                            <View style={styles.valores}>
                                <Text style={styles.valoresTxt}>
                                    R$ {price},00
                                </Text>
                                <Text style={styles.valoresTxt}>
                                    {time} minutos
                                </Text>
                            </View>
                        </View>
                        <View style={{ width: '90%', height: '33%', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={() => agendar()}
                                style={{ ...styles.button, width: '90%', height: 80 }}
                            >
                                <Text style={{ ...styles.buttonText }}>
                                    AGENDAR
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

