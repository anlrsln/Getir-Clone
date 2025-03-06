import { View, Text } from "react-native";
import React from "react";
import ProductItemCard from "../../card/product_item_card";
import productsGetir from "@/assets/productsGetir";
import styles from "./style";

const ProductsContainer = () => {
  return (
    <View>
      <View style={styles.container}>
        {/*2 Products*/}
        {productsGetir.slice(0, 2).map((product) => (
          <ProductItemCard key={product.id} product={product} />
        ))}
      </View>
      <Text style={styles.containerTitle}>Çubuk</Text>
      <View style={styles.container}>
        {productsGetir.slice(2).map((product) => (
          <ProductItemCard key={product.id} product={product} />
        ))}
      </View>
    </View>
  );
};

export default ProductsContainer;
