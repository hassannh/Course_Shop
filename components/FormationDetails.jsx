import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";


const FormationDetails = ({navigation ,item}) => {

  
return(
    
    <View>

            <Text>{item.title}</Text>
            
    </View>
    
)
}


export default FormationDetails