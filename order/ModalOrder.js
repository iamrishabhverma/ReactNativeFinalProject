import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import OrderScreen from './OrderScreen';

const ModalOrder =({ isShow, onClose }) => {
    return(
        <View styles={StyleSheet.absoluteFillObject, styles.container}>
        <View style={styles.content}>
   <OrderScreen onClose={onClose} />
        </View>
      
       </View>
    );
};
export default ModalOrder;

const styles = StyleSheet.create({
content: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
 container: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
   
});