import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        paddingTop: Constants.statusBarHeight,
    },
    valores: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    valoresTxt: {
        padding: 12
    }

});