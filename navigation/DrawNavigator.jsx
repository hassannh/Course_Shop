import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Catalogue from '../Screens/Catalogue'
import Panier from '../Screens/Panier'
import Achats from '../Screens/Achats'
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import Details from '../Screens/Details';
import { useNavigation } from '@react-navigation/native';
import Picture from '../Screens/Camera';

const Drawer = createDrawerNavigator()



const DrawNavigator = () => {

    const navigation = useNavigation();
    
    return (

        <>
            <Drawer.Navigator initialRouteName="Landing" screenOptions={{ headerStyle: { backgroundColor: 'red' } }}  >

                <Drawer.Screen name='Landing' component={Catalogue} options={{
                    headerRight: () => (
                        <FontAwesome5
                            name="shopping-cart"
                            size={24}
                            color="black"
                            onPress={() => navigation.navigate('panier')}
                        />
                    )
                }} />


                <Drawer.Screen name='panier' component={Panier} options={{
                    headerRight: () => (
                        <FontAwesome5
                            name="shopping-cart"
                            size={24}
                            style={styles.shoppingCart}
                            color="black"
                            onPress={() => navigation.navigate('panier')}
                        />
                    )
                }} />
                <Drawer.Screen name='achats' component={Achats} />
                <Drawer.Screen name='Camera' component={Picture} />

            </Drawer.Navigator>



        </>
    )
}


const styles = StyleSheet.create({
    shoppingCart: {
        marginRight: 10
    }

})

export default DrawNavigator