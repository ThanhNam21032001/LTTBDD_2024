import * as React from "react";
import { NavigationContainer } from "@react-navigation/native" 
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import Page1 from "./page/page1";

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page1">
        <Stack.Screen name="Page1" component={Page1} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );

}