import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons'; 


export default function Panier({route}){


    const { item } = route.params;


  return (
    <View style={styles.item}>
      <Text>{item.title}</Text>
      <Text>{item.price}$</Text>
      <TouchableOpacity>
      <FontAwesome name="trash" size={24} color="black" />
          </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    item :{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 8,
        backgroundColor:'white',
        margin:8
    }
})