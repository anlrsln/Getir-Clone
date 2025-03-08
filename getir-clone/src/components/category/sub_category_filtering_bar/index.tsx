import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import styles from "./styles";
import { Category } from "@/src/models/category/CategoryModal";
import categoriesGetir from "@/assets/categoriesGetir";
import { Colors } from "@/src/constants/Colors";

const SubCategoryBox = ({
  setCat,
  subCategoriesItem,
  activeSubCategory,
}: {
  setCat: any;
  subCategoriesItem: string;
  activeSubCategory: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(subCategoriesItem)}
      style={[
        styles.categoryBox,
        subCategoriesItem == activeSubCategory
          ? { backgroundColor: Colors.main.purple, borderWidth: 0 }
          : { backgroundColor: Colors.main.subCategoriesBarBackground },
      ]}
    >
      <Text
        style={[
          styles.categoryName,
          subCategoriesItem == activeSubCategory
            ? { color: "white" }
            : { color: Colors.main.purple },
        ]}
      >
        {subCategoriesItem}
      </Text>
    </TouchableOpacity>
  );
};

const SubCategoryFilteringBar = () => {
  const [categories, setCategories] = useState<string>("Birlikte İyi Gider");

  return (
    <ScrollView
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map(
        (item) => {
          return (
            <SubCategoryBox
              setCat={setCategories}
              subCategoriesItem={item}
              activeSubCategory={categories}
            />
          );
        }
      )}
    </ScrollView>
  );
};

export default SubCategoryFilteringBar;
