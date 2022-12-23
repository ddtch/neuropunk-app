import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeModule from "../home/HomeModule";
import ProfileModule from "../profile/ProfileModule";
import CustomTabBar from "./CustomTabBar";
import ProfileScreen from "../profile/ProfileScreen";
import SettingsScreen from "./SettingsScreen";

const Tab = createBottomTabNavigator();

const TabsModule = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}
    tabBar={(props) => <CustomTabBar {...props}/>}>
      <Tab.Group>
        <Tab.Screen name="wallet" component={HomeModule} />
        <Tab.Screen name="assets" component={ProfileScreen} />
        <Tab.Screen name="stats" component={ProfileScreen} />
        <Tab.Screen name="explorer" component={ProfileScreen} />
        <Tab.Screen name="settings" component={SettingsScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabsModule;

const styles = StyleSheet.create({});
