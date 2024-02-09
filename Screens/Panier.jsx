import { View, Text, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';


export default function Panier({ route }) {


  const panierItems = useSelector((state) => state)
  console.log(panierItems.cartItems)


  return (
    <>
      
      <ScrollView >

        {

          panierItems.cartItems.map((item, index) => (

            <View key={index} style={styles.item}>
              <Text>{item.title}</Text>
              <Text>{item.price}$</Text>
              <TouchableOpacity>
                <FontAwesome name="trash" size={24} color="black" />
              </TouchableOpacity>
            </View>

          ))
        }

        <View style={styles.container}>
          <View style={styles.priceContainer}>
            <Text>
              Total:
            </Text>
            <Text style={styles.cartPrice}>
              92.67$
            </Text>
          </View>
          <TouchableOpacity onPress={() => console.log('pay')}>
            <View style={styles.payButton}>
              <Text>Pay</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>


    </>
  );
}



const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    backgroundColor: 'white',
    margin: 8
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  payButton: {
    backgroundColor: 'green',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  cartPrice: {
    fontSize: 15,
    color: "green",
    fontWeight: "bold",
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
})