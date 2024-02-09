import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawNavigator from './navigation/DrawNavigator';
import Details from './Screens/Details';
import { FontAwesome5 } from '@expo/vector-icons';



const Stack = createNativeStackNavigator();



export default function App() {
  return (
    
    <NavigationContainer>
     
     <Stack.Navigator >
     <Stack.Screen name="Home" component={DrawNavigator} options={{headerShown:false}}/>
     <Stack.Screen name='detail' component={Details} options={{headerRight: () => (
      <FontAwesome5 
      name="shopping-cart" 
      size={24} 
      color="black" 
      onPress={() => navigation.navigate('CartScreen')} 
    />
     )}}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}


