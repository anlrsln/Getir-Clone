import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import home from "../screen/home_screen";
import { Image, Text } from "react-native";
import { Colors } from "@/src/constants/Colors";
import HomeScreen from "../screen/home_screen";
import CategoryFilterScreen from "../screen/category_filter_screen";
import { Category } from "../models";

export type RootStackParamList = {
  Home: undefined;
  CategoryFilter: { selectedCategory: Category };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: Colors.main.purple },
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30 }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CategoryFilter"
        component={CategoryFilterScreen}
        options={{
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: "white",
          headerStyle: { backgroundColor: Colors.main.purple },
          headerTitle: () => (
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Ürünler
            </Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
