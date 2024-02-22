import { View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';



export default function Achats({ route }) {

    const { cartItems } = route.params;

    return (

        <ScrollView >

            <View >

                {cartItems.map((item, index) => (
                    <View key={index}  style={styles.itemsContainer}>
                        <View style={styles.item}>

                            <Text>{item.title}</Text>
                            <Text>{item.price}$</Text>

                        </View>
                    </View>
                ))}

            </View>





            <Ionicons

                name="add-circle"
                size={34}
                color="black"
                onPress={() => setIsVisible(false)}
            />

            <>
                <AntDesign

                    name="minuscircle"
                    size={24}
                    color="black"
                    onPress={() => setIsVisible(true)}
                />

            
            </>

        </ScrollView>

    )

}

const styles = StyleSheet.create({

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 3,
        marginRight: 3
    },
    itemsContainer:{
        height:'',
    }
})