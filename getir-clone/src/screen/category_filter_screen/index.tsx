import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigators/HomeNavigator";
import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import CategoryFilteringBar from "@/src/components/category/category_filtering_bar";
import { Category } from "@/src/models/category/CategoryModal";
import SubCategoryFilteringBar from "@/src/components/category/sub_category_filtering_bar";
import ProductItemCard from "@/src/components/card/product_item_card";
import ProductsContainer from "@/src/components/container/products_container";

type CategoryFilterRouteProp = RouteProp<RootStackParamList, "CategoryFilter">;

const CategoryFilterScreen = () => {
  const route = useRoute<CategoryFilterRouteProp>();
  const { selectedCategory } = route.params;

  const [category, setCategory] = useState<Category>(selectedCategory);
  const [subCategory, setSubCategory] = useState<Category>(selectedCategory);

  return (
    <ScrollView>
      <CategoryFilteringBar selectedCategory={category} />
      <SubCategoryFilteringBar />
      <ProductsContainer />
    </ScrollView>
  );
};

export default CategoryFilterScreen;
