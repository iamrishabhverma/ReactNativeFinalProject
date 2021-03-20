import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const AddressList = () => {
    return (
        < View style={styles.container}>
            <View style={styles.row} >
                <Text style={styles.address}> North York </Text>
                <Text style={styles.text}> Edit AddressList</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.itemContainer}>
                    <View style={styles.iconTime}>
                        <Image source={require('../assets/images/clock.png')} />
        </View >
        <Text style={styles.textTime}> 35 mins </Text>
                </ View>
                <Text style={styles.text}> Choose Time </Text>
            </View>
        </ View>
    );

};

export default AddressList;

const styles = StyleSheet.create({
    address: {
        fontFamily: 'CeraPro-Bold',
        flex: 1,
        textAlign: 'center',
    },
    textTime: {
        fontFamily: 'CeraPro-Bold',
        marginLeft: 10,
    },
    timeContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconTime: {
        padding: 8,
        backgroundColor: 'rgba(0,0,0,14)',
        borderRadius: 7,
    },
    container: {
        backgroundColor: '#F7CB6b',
        paddingVertical: 10,
        borderRadius: 10,
    },
    text: {
        fontFamily: 'CeraPro-Medium',
        flex: 1,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center',
    },
});

