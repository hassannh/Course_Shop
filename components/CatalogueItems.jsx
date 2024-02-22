import React from 'react';
import { View, Image, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromcatalogue } from '../redux/Actions/cartActions';


const CatalogueItem = ({ navigation, item }) => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state);


  const selectedItems = cartItems.cartItems




  const isInCart = selectedItems.some((cartItem) => cartItem.id === item.id && cartItem.selected);




  const handleAddToCart = () => {
    dispatch(addToCart({ ...item, selected: true }));
    Alert.alert('Added to Cart', `You added ${item.title} to your cart!`);
  };



  const handleShowDetails = () => {
    navigation.navigate('detail', { item });
  };





  const handleRemoveCatalogue = (itemId) => {
    dispatch(removeFromcatalogue(itemId));
  };





  return (
<>
{!isInCart && (

    <View style={styles.container}>
      <Image source={{  uri: item.image  }}  style={styles.image} />
      <View>
        <Text style={styles.text}>{item.title}</Text>
        <Text style={styles.price}>{item.price}$</Text>
      </View>
      <View style={styles.actions}>

        <TouchableOpacity onPress={handleShowDetails}>
          <FontAwesome name="eye" size={24} color="black" style={{}} />
        </TouchableOpacity>


        
        
          <TouchableOpacity onPress={handleAddToCart}>
            <FontAwesome name="shopping-basket" size={24} color="black" />
          </TouchableOpacity>
       
      </View>
    </View>

)}
</>
  );


};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "snow",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },

  text: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  price: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,

  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
});

export default CatalogueItem;
