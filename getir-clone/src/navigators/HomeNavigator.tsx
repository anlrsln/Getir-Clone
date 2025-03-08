import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Text, TouchableOpacity } from "react-native";
import { Colors } from "@/src/constants/Colors";
import HomeScreen from "../screen/home_screen";
import CategoryFilterScreen from "../screen/category_filter_screen";
import ProductDetailScreen from "../screen/detail_screen";
import { Category } from "../models/category/CategoryModal";
import { Product } from "../models/product/ProductModal";
import AntDesign from "@expo/vector-icons/AntDesign";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

export type RootStackParamList = {
  Home: undefined;
  CategoryFilter: { selectedCategory: Category };
  DetailScreen: { selectedProduct: Product };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const tabHiddenRoutes = ["DetailScreen"];

function MainStack({ navigation, route }: any) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName as string)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator initialRouteName="Home">
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

      <Stack.Screen
        name="DetailScreen"
        component={ProductDetailScreen}
        options={({ navigation }) => ({
          headerBackButtonDisplayMode: "minimal",
          headerTintColor: "white",
          headerStyle: { backgroundColor: Colors.main.purple },
          headerTitle: () => (
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Ürün Detayı
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="close" size={24} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <AntDesign name="heart" size={24} color="#4522a0" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator({ navigation, route }: any) {
  return <MainStack navigation={navigation} route={route} />;
}
