import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./style";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "@/src/constants/Colors";
import { Product } from "@/src/models/product/ProductModal";
import { useNavigation } from "@react-navigation/native";
import PriceCard from "../price_card";

type productType = {
  product: Product;
};

const ProductItemCard = ({ product }: productType) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        (navigation.navigate as any)("DetailScreen", {
          selectedProduct: product,
        });
      }}
    >
      <Image
        style={styles.image}
        source={{
          uri: product.image,
        }}
      />
      <PriceCard product={product} fontSize={12} />
      <Text style={styles.productNameText}>{product.name}</Text>
      <Text style={styles.productAmountText}>{product.miktar}</Text>
      <View style={styles.addProductButton}>
        <Entypo name="plus" size={22} color={Colors.main.purple} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductItemCard;
