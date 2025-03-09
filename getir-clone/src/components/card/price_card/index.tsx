import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import { Product } from "@/src/models/product/ProductModal";

const PriceCard = ({
  product,
  fontSize,
}: {
  product: Product;
  fontSize: number;
}) => {
  return (
    <View style={styles.priceView}>
      <Text style={[styles.discountedPriceText, { fontSize: fontSize }]}>
        <Text>{"\u20BA"}</Text>
        {product.fiyatIndirimli}
      </Text>
      <Text style={[styles.priceText, { fontSize: fontSize }]}>
        <Text>{"\u20BA"}</Text>
        {product.fiyat}
      </Text>
    </View>
  );
};

export default PriceCard;
