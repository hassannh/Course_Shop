import { View, Text, Image, Alert, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import FormationDetails from '../components/FormationDetails';
import { FontAwesome5 } from '@expo/vector-icons';
import { Button, Card, } from 'react-native-paper';



export default function Details({ route }) {

    const { item } = route.params;

    const handleAddToCart = () => {
        Alert.alert('Added to Cart', `You added ${item.title} to your cart!`);
    };

    return (

        <View style={styles.container}>
            <View style={styles.contentContainer}>

                <Image source={{ uri: item.image }} style={styles.picture} />

                <Text style={styles.description}>{item.description}</Text>

            </View>

            <View style={styles.priceContainer}>
                <Text style={styles.price}>{item.price}$</Text>
            </View>

            <View style={styles.buttonContainer}>

                <Button icon="cart" style={styles.button} onPress={handleAddToCart}>
                    Add to cart
                </Button>
            </View>
        </View>
    )


}



const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        flex: 1,
    },
    button:{
        
        backgroundColor:'green',
        width:180,
        alignSelf:'center',
        justifyContent: 'center',
        marginTop:19
    },
    buttonContainer:{
        height:80,
        
    },
    picture: {
        height: 250,
        width: '100%'
    },

    description: {
        padding: 10
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green',
        alignSelf: 'flex-end',
        padding: 10
    },
    priceContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: 50,
        justifyContent: 'center'
    }
})