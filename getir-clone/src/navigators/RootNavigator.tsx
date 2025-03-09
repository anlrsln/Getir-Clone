import { Colors } from "@/src/constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import home from "../screen/home_screen";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import HomeNavigator from "./HomeNavigator";
import CustomBottomTabButton from "../components/buttons/bottomnav_custom_tab_bar";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function RootNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route);
          if (routeName === "DetailScreen") {
            return { display: "none" };
          }
          return { display: "flex" };
        })(route),
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.main.purple,
        tabBarInactiveTintColor: "lightgray",
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="List"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <CustomBottomTabButton />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="user-large" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Gifts"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="gift-sharp" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
