import React from "react";

//screens

import chat from "./screens/chat";
import messaging from "./screens/messaging";
import login from "./screens/login";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
              name='Login'
              component={login}
              options={{ headerShown: false }}/>
          <Stack.Screen
              name='Chat'
              component={chat}
              options={{ title: "Чаты", headerShown: false }}/>
          <Stack.Screen name='Messaging' component={messaging}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
