import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Category } from "@/src/models";
import categoriesGetir from "@/assets/categoriesGetir";
import { Colors } from "@/src/constants/Colors";

const CategoryBox = ({
  categoriesItem,
  selectedCategory,
}: {
  categoriesItem: Category;
  selectedCategory: Category;
}) => {
  return (
    <View
      style={[
        styles.categoryBox,
        categoriesItem.name == selectedCategory.name && {
          borderBottomColor: Colors.main.yellow,
          borderBottomWidth: 2,
        },
      ]}
    >
      <Text style={styles.categoryName}>{categoriesItem.name}</Text>
    </View>
  );
};

const CategoryFilteringBar = ({
  selectedCategory,
}: {
  selectedCategory: Category;
}) => {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  return (
    <ScrollView
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {categories.map((item) => {
        return (
          <CategoryBox
            categoriesItem={item}
            selectedCategory={selectedCategory}
          />
        );
      })}
    </ScrollView>
  );
};

export default CategoryFilteringBar;
