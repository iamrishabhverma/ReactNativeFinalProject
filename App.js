import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import SearchBar from './Component/SearchBar';

import ModalOrder from './order/ModalOrder';
import BottomBar from './screens/home/BottomBar';
import ItemType from './screens/home/ItemType';
import RestaurantItem from './screens/home/RestaurantItem';

const types = [
  {
    type: 'Tea/Coffee',
    image: require('./assets/images/tea.png'),
    id: 1,
  },
  {
    type: 'Main Course',
    image: require('./assets/images/lunch.png'),
    id: 2,
  },
  {
    type: 'Appetizers',
    image: require('./assets/images/samosa.png'),
    id: 3,
  },
  {
    type: 'Donuts',
    image: require('./assets/images/donut.png'),
    id: 4,
  },
];

const listRestaurants = [
  {
    background: require('./assets/images/biryani.png'),
    miles: 10,
    name: `Briyani`,
    type: 'Main Course',
    country: 'Punjabi',
    currency: '$',
    smile: 97,
  },
  {
    background: require('./assets/images/dosa.png'),
    miles: 10,
    name: 'Masala Dosa',
    type: 'Main Course',
    country: 'South Indian',
    currency: '$',
    smile: 97,
  },
  {
    background: require('./assets/images/biryani.png'),
    miles: 10,
    name: `Briyani`,
    type: 'Main Course',
    country: 'Punjabi',
    currency: '$',
    smile: 97,
  },
  {
    background: require('./assets/images/dosa.png'),
    miles: 10,
    name: 'Masala Dosa',
    type: 'Main Course',
    country: 'South Indian',
    currency: '$',
    smile: 97,
  },
  {
    background: require('./assets/images/biryani.png'),
    miles: 10,
    name: `Briyani`,
    type: 'Main Course',
    country: 'Punjabi',
    currency: '$',
    smile: 97,
  },
  {
    background: require('./assets/images/dosa.png'),
    miles: 10,
    name: 'Masala Dosa',
    type: 'Main Course',
    country: 'South Indian',
    currency: '$',
    smile: 97,
  },

  {
    background: require('./assets/images/biryani.png'),
    miles: 10,
    name: `Briyani`,
    type: 'Main Course',
    country: 'Punjabi',
    currency: '$',
    smile: 97,
  },
  {
    background: require('./assets/images/dosa.png'),
    miles: 10,
    name: 'Masala Dosa',
    type: 'Main Course',
    country: 'South Indian',
    currency: '$',
    smile: 97,
  },

];

const App = () => {


    const goToSearchPage = () => {
        navigate("Search");
    };

  const [isOrder, setOrder] = useState(false);
  const onPressItem = () => setOrder(true);
  const renderRestaurant = ({item}) => {
    return <RestaurantItem type={types.find(x=>x.id == idSelected)} data={item} onPress={onPressItem} />;
  };
  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idSelected, setIdSelected] = useState(0)
  const onClose = () => setOrder(false);
  const onSelected = (id) => {
    //alert('id ' + id);
   setIdSelected(id);
   
  };

  useEffect(() => {
    _fetchListFood();
  },[idSelected] );
  const _fetchListFood = async () =>{

    try {
      setLoading(true);
      setData([])
      const res = await fetch(
        'https://api-appfood.herokuapp.com/v1/foods?type=' + idSelected,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
         );
      const data = await res.json();
      if(data.status ==1){
        setData(data.data);
      }
    } catch (error) {
      console.log(error);   
    }
    finally{
      setLoading(false);
    }
  }; 

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.wrap} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={styles.headerTitle}>
              <Text style={styles.heading}>Sip and Snack</Text>
              <Text style={styles.description}>20 Products availabe</Text>
            </View>

            <View style={styles.headerCart}>
              <View style={styles.buttonCart}>
                <Image source={require('./assets/images/cart.png')} />
                <Text style={styles.numCart}>2</Text>
              </View>
            </View>
          </View>
          <SearchBar />
          <View style={styles.listItemType}>
            {types.map((item, index) => {
              return (<ItemType
                onSelected={onSelected}
                selected={item.id == idSelected}
                {...item}
              />
              );
            })}
          </View>
          <View style={styles.listRestaurant}>
            <Text style={styles.listRestaurantText}>
              Products for you
            </Text> 
            <View style={styles.listRes}>
              {/*data.map(renderRestaurant)*/}
              <FlatList 
              data = {data}
              extraData={data}
              renderItem = {renderRestaurant}
              
              />
              {loading && 
              <View style={styles.loading}>
               <ActivityIndicator size="large" color="#59B7C9" />
               </View>
               }
            </View>
          </View>
        </ScrollView>
        <BottomBar />
      </SafeAreaView>
      {isOrder && <ModalOrder onClose={onClose} isShow={isOrder} />}
    </>
  );
};

const styles = StyleSheet.create({
  listRestaurantText: {
        fontFamily: 'CeraPro-Medium',
    fontSize: 18,
  },
  container: {
    flex: 1,
  },
  wrap: {
    flex: 1,
    padding: 14,
  },
  headerTitle: {
    width: '55%',
  },
  headerCart: {},
  heading: {
    fontSize: 25,
      fontFamily: 'CeraPro-Bold',
    lineHeight: 30,
  },
  description: {
      fontFamily: 'CeraPro-Medium',
    color: 'gray',
    marginTop: 10,
  },
  buttonCart: {
    backgroundColor: '#F7CB6B',
    padding: 12,
    flexDirection: 'row',
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowColor: '#F7CB6B',
    shadowRadius: 2,
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
  },
  numCart: {
    fontFamily: 'Pro-Medium',
    color: '#FFF',
    paddingLeft: 10,
  },
  listItemType: {
    flexDirection: 'row',
  },
  listRes: {
    marginBottom: 15,
  },

  listRestaurant: {
    marginTop: 10,
  },
  loading: {
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;