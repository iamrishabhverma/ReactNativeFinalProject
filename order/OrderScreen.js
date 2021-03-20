import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import AddressList from './AdressList';
import ListFood from './ListFood';

const OrderScreen = (onclose) => {
    return (
        < View style = {styles.container}>
        <View style={styles.padding}>
            <Text style={styles.title}> Your Order </Text>
                <Pressable style={styles.clearButton} onPress={onclose}>
                    <Image style={styles.iconClear} source={require('../assets/images/clear.png')} />
            </Pressable>
            <AddressList />
            </View>
             <View style={styles.body}> 
             <ListFood/>
             </View>
            
             <View style={styles.footer}>
    <Text style={styles.total}>Total: $17.50</Text>
    <Pressable style={styles.buttonOrder}> 
                    <Text style={styles.textOrder}>Place Order</Text>
                    <Image source={require('../assets/images/arrow.png')} />
    </Pressable>
    </View>
    </View >
        );

};

export default OrderScreen;

const styles = StyleSheet.create({
    body:{
   flex: 1,
    },

    title: {
        fontFamily: 'CeraPro-Bold',
        fontSize: 23,
        marginBottom:30,
    },
    padding: {
       padding:20,
    },
    container: {
        //padding: 20,
        backgroundColor: '#FFF',
       // marginTop: 40,
       // flex:1,
        height:'80%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    clearButton: {
        position: 'absolute',
        right: 20,
        top: 10,
        padding: 10,
    },
    iconClear: {
        width: 13,
        height: 13,
        color: '#000',
    },

    total: {
        fontFamily: 'CeraPro-Bold',
      fontSize: 23,
    },
    textOrder: {
        fontFamily: 'CeraPro-Bold',
          marginRight: 10,
    },
    buttonOrder: {
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#59B7C9',
        padding: 20,
        paddingHorizontal: 25,
        borderRadius: 15,
        shadowOffset: {
            width:0,
            height:2,
        },
        shadowColor: '#59B7C9',
        shadowOpacity: 0.5,
        shadowRadius:4,
    },
    footer: {
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom:68,
    }
});
