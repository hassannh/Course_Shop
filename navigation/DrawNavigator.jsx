import {createDrawerNavigator, DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Catalogue from '../Screens/Catalogue'
import Panier from '../Screens/Panier'
import Achats from '../Screens/Achats'
import { Ionicons } from '@expo/vector-icons';
import Details from '../Screens/Details';

const Drawer = createDrawerNavigator()



const DrawNavigator = () => {
    return(

        <>
        <Drawer.Navigator initialRouteName="Landing" screenOptions={{headerStyle: {backgroundColor:'red'}}}  >
            <Drawer.Screen name='Landing' component={Catalogue}/>
            <Drawer.Screen name='panier' component={Panier}/>
            <Drawer.Screen name='achats' component={Achats}/>
            <Drawer.Screen name='detail' component={Details} />
        </Drawer.Navigator>
        
       
        
        </>
    )
}

export default DrawNavigator