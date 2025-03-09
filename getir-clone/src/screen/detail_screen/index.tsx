import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@/src/navigators/HomeNavigator";
import { View, Text, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";
import { Product } from "@/src/models/product/ProductModal";
import ProductImageCarousel from "@/src/components/carousel/product_image_carousel";
import { Colors } from "@/src/constants/Colors";
import DetailScreenHeadBox from "@/src/components/container/detail_screen_container";
import PriceCard from "@/src/components/card/price_card";

type DetailScreenRouteProp = RouteProp<RootStackParamList, "DetailScreen">;

const DetailScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const route = useRoute<DetailScreenRouteProp>();
  useEffect(() => {
    setSelectedProduct(route.params.selectedProduct);
  }, []);

  if (!selectedProduct) {
    return <ActivityIndicator color={Colors.main.purple} />;
  } else {
    return (
      <View style={styles.carouselContainer}>
        <DetailScreenHeadBox product={selectedProduct} />
      </View>
    );
  }
};

export default DetailScreen;
