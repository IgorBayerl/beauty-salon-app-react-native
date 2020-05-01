import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },

    block: {
        padding: 12,
        backgroundColor: '#E7E7E7',
        margin: 12,
        borderRadius: 15,
        width: '95%'
    },

    fidelity: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    fidelityCounterInative: {
        backgroundColor: '#D7D7D7',
        width: 35,
        height: 35,
        borderRadius: 20
    },
    fidelityCounterActive: {
        backgroundColor: '#de2424',
        width: 35,
        height: 35,
        borderRadius: 20
    },

    serviceSection: {
        alignItems: 'center',
        margin: 2
    },

    serviceIcon: {
        marginHorizontal: 10,
        backgroundColor: '#de2424',
        width: 58,
        height: 58,
        borderRadius: 30
    },

    valores: {
        justifyContent: 'space-around'
    },

    valoresTxt: {
        fontSize: 18,
        marginLeft: 12,
        fontWeight: 'bold'
    },
    //////////////// blocks ////////////////
    blockFidelity: {
        padding: 12,
        backgroundColor: '#E7E7E7',
        marginHorizontal: 12,
        marginBottom: 12,
        marginTop: 12,
        borderRadius: 15,
        width: '95%'
    },


    blockDemo: {
        padding: 12,
        backgroundColor: '#E7E7E7',
        margin: 12,
        borderRadius: 15,
        width: '95%',
        height: '50%',
    },

    blockServices: {
        flexDirection: 'row',
        paddingVertical: 12,
        backgroundColor: '#E7E7E7',
        margin: 12,
        //marginBottom: 110,
        borderRadius: 15,
        width: '95%',
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

    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },

    ServicesList: {
        flexDirection: 'row'
    },

    headerBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 8,
        paddingHorizontal: 8
    },
    //////////////////////////////////////// 

    Viewdemo: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    demo: {
        width: 160,
        height: 200,

    },


});