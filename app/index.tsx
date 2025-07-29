import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import Login from "./Login";

export default function Index() {

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} 
      options={{
        title: 'CANCHA',
        headerTintColor: 'white',
        headerTitleAlign: 'left',
        headerStyle: {backgroundColor: '#23c461'},
      }}/>
      <Stack.Screen name="Home" component={Home} 
            options={{
        title: 'CANCHA',
        headerTintColor: 'white',
        headerTitleAlign: 'left',
        headerStyle: {backgroundColor: '#23c461'},
        headerLeft: () => null,
        headerRight: () => (
          
          <View style={{marginRight:20}}><FontAwesome name="user-circle-o" size={30} color="#e0e4e2ff" onPress={() => alert('Icono perfil')}/></View>

        ),
        
      }}/>
    </Stack.Navigator>
  );
}

  return (
      <MyStack/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
