import { StyleSheet } from "react-native";
import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
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
        headerStyle: {backgroundColor: '#525FE1'},
      }}/>
      <Stack.Screen name="Home" component={Home} 
            options={{
        title: 'Cancha',
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#525FE1'},
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
