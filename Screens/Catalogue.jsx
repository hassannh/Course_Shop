import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import DATA from '../Data/data'
import CatalogueItem from '../components/CatalogueItems';



const Catalogue = ({navigation}) => {

  return (

    <FlatList
      data={DATA}
      renderItem={({ item }) => <CatalogueItem navigation={navigation} item={item} />}
    />

  )

}

export default Catalogue