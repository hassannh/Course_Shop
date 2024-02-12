import { View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';



export default function Achats() {

    return (

        <ScrollView >

            <View style={styles.achatsContainer}>
                <Text >00.00$</Text>
                <Text> 22/08/2023</Text>

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

                <View ></View>

                
                <View >
                   
                </View>


            </>

        </ScrollView>

    )

}

const styles = StyleSheet.create({

    achatsContainer:{}
})