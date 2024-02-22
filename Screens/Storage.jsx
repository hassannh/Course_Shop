import { View, Text, Button, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function Storage() {


    const [storedData, setStoredData] = useState('');
    const [inputData, setInputData] = useState('');
  
    useEffect(() => {
      // Load data from AsyncStorage when the component mounts
      retrieveData();
    }, []);
  
    const retrieveData = async () => {
      try {
        // Fetch data from AsyncStorage using a key (e.g., 'myKey')
        const value = await AsyncStorage.getItem('myKey');
  
        if (value !== null) {
          // If data exists, set it in the state
          setStoredData(value);
        }
      } catch (error) {
        console.error('Error retrieving data:', error);
      }
    };
  
    const storeData = async () => {
      try {
        // Save data to AsyncStorage using a key (e.g., 'myKey')
        await AsyncStorage.setItem('myKey', inputData);
        // Update the state with the new data
        setStoredData(inputData);
      } catch (error) {
        console.error('Error storing data:', error);
      }
    };
  
    return (
      <View>
        <Text>Stored Data: {storedData}</Text>
        <TextInput
          placeholder="Enter data"
          value={inputData}
          onChangeText={(text) => setInputData(text)}
        />
        <Button title="Save Data" onPress={storeData} />
      </View>
    );


}