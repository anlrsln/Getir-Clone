import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./style";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "@/src/constants/Colors";
import { Product } from "@/src/models/product/ProductModel";

type productType = {
  product: Product;
};

const ProductItemCard = ({ product }: productType) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{
          uri: product.image,
        }}
      />
      <View style={styles.cardTextBody}>
        <Text style={styles.discountedPriceText}>
          <Text>{"\u20BA"}</Text>
          {product.fiyat}
        </Text>
        <Text style={styles.priceText}>
          <Text>{"\u20BA"}</Text>
          {product.fiyatIndirimli}
        </Text>
      </View>
      <Text style={styles.productNameText}>{product.name}</Text>
      <Text style={styles.productAmountText}>{product.miktar}</Text>
      <View style={styles.addProductButton}>
        <Entypo name="plus" size={22} color={Colors.main.purple} />
      </View>
    </TouchableOpacity>
  );
};

export default ProductItemCard;
