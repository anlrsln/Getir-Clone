import { View, Text } from "react-native";
import React from "react";
import styles from "./style";
import ProductImageCarousel from "../../carousel/product_image_carousel";
import { Product } from "@/src/models/product/ProductModal";
import PriceCard from "../../card/price_card";

const DetailScreenHeadBox = ({ product }: { product: Product }) => {
  return (
    <View style={styles.container}>
      <ProductImageCarousel images={product.images} />
      <View style={styles.productInformationsView}>
        <PriceCard product={product} fontSize={18} />
        <Text style={styles.productNameText}>{product.name}</Text>
        <Text style={styles.productAmount}>{product.miktar}</Text>
      </View>
    </View>
  );
};

export default DetailScreenHeadBox;
