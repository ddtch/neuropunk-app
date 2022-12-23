import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainAuthScreen from "./screens/MainAuthScreen";
import CreateNewWalletScreen from "./screens/CreateNewWalletScreen";
import ImportWalletScreen from "./screens/ImportWalletScreen";
import RecoveryPhrasesScreen from "./screens/RecoveryPhrasesScreen";

const Stack = createNativeStackNavigator();

const AuthModule = () => {
  return (
    <Stack.Navigator
      initialRouteName={"auth"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="auth" component={MainAuthScreen} />
      <Stack.Screen name="new-wallet" component={CreateNewWalletScreen} />
      <Stack.Screen name="phrases-stage" component={RecoveryPhrasesScreen} />
      <Stack.Screen name="import-wallet" component={ImportWalletScreen} />
    </Stack.Navigator>
  );
};

export default AuthModule;

const styles = StyleSheet.create({});
