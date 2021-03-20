import React, { useCallback, useState } from 'react';
import { Pressable, Image, StyleSheet, Text, View  } from 'react-native';
import FoodItem from './FoodItem';
import Swipeable from 'react-native';

const mocks = [
    {
        name: 'Samosa',
        restaurant: 'Samosa Factory',
        price: 5,
        image: require('../assets/images/samosa.png'),
        quantity: 1,
        id: 1,
    },{
        name: 'Samosa',
        restaurant: 'Samosa Factory',
        price: 5,
        image: require('../assets/images/samosa.png')  ,
        quantity: 1,
        id: 2,
    },
];

const ListFood = () => {
    //const [id, setId] = useState(0);
    const [data, setData] = useState(mocks);
   const onDelete = (id) => {
       if (id) {
           setData((e) => e.filter((x) => x.id != id));
      }
   };
   

    const renderFood = (item) => {
        return (
            <Swipeable
                rightButtons={[
                    <View style={styles.button} >
                        <Pressable onPress={() => onDelete(item.id)}>
                            <Image source={require('../assets/images/garbage.png')} />
                        </Pressable>
                    </View>,
                ]}>
                <FoodItem data={item} />

            </Swipeable>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.listFood}>
                {mocks.map(renderFood)}
                <FoodItem isDelivery fee={2.5} />
            </View>

        </View>
    );
};

export default ListFood;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
    },
    listFood:{
      //flex: 1,
    },
    button: {
        justifyContent: 'center',
        marginTop: 40,
    },
    
});