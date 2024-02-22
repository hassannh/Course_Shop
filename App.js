import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer ,useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawNavigator from './navigation/DrawNavigator';
import Details from './Screens/Details';
import { FontAwesome5 } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import store from './redux/store';
import panier from './Screens/Panier'


const Stack = createNativeStackNavigator();



export default function App() {


  return (

    <Provider store={store}>
    
    <NavigationContainer>
     
     <Stack.Navigator >
     <Stack.Screen name="Home" component={DrawNavigator} options={{headerShown:false}}/>
     <Stack.Screen name='detail' component={Details} options={{headerRight: () => (
      <FontAwesome5 
      name="shopping-cart" 
      size={24} 
      color="black" 
      // onPress={() => navigation.navigate('panier')} 
    />
     )}}/>
      </Stack.Navigator>

    </NavigationContainer>

    </Provider>
  );
}


