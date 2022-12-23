import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";

const HomeStack = createNativeStackNavigator();

const HomeModule = () => {
  return (
    <HomeStack.Navigator
      initialRouteName={"main"}
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name={"main"} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeModule;

const styles = StyleSheet.create({});
