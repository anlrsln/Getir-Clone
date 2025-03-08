import React, { useState } from "react";
import { View } from "react-native";
import styles from "./style";
import categoriesGetir from "../../../../assets/categoriesGetir";
import CategoryItem from "../category_item";
import { Category } from "../../../models/category/CategoryModal";

function index() {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);

  return (
    <View>
      <View style={styles.listContainer}>
        {categories.map((item) => (
          <CategoryItem key={item.id} categoriesItem={item} />
        ))}
      </View>
    </View>
  );
}

export default index;
