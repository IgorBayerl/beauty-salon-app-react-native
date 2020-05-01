import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around',
        paddingTop: Constants.statusBarHeight,
    },
    valores: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    valoresTxt: {
        padding: 12
    },

    blockFooter: {
        padding: 12,
        backgroundColor: '#E7E7E7',
        margin: 12,
        borderRadius: 15,
        width: '95%',
        //position: 'absolute',
        //bottom: 0
    },
    blockFooterContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    //////////////// Buttons ////////////////

    button: {
        backgroundColor: '#de2424',
        padding: 12,
        borderRadius: 15,
        color: '#fff',
        justifyContent: 'space-around',
        margin: 10,
        width: '35%'
    },
    valores: {
        justifyContent: 'space-around'
    },
    valoresTxt: {
        fontSize: 18,
        marginLeft: 12,
        fontWeight: 'bold'
    },

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    //////////////////////////////////
    block: {
        padding: 12,
        backgroundColor: '#E7E7E7',
        margin: 12,
        borderRadius: 15,
        width: '95%',
    },
    //////////////////////////////////
});