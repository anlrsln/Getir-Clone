import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";
import styles from "./style";
import { Category } from "@/src/models";
import { useNavigation } from "@react-navigation/native";

type categoriesItemProps = {
  categoriesItem: Category;
};

function index({ categoriesItem }: categoriesItemProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => {
        (navigation.navigate as any)("CategoryFilter", {
          selectedCategory: categoriesItem,
        });
      }}
    >
      <Image
        style={styles.image}
        source={{
          uri: categoriesItem.src,
        }}
      />
      <Text style={styles.text}>{categoriesItem.name}</Text>
    </TouchableOpacity>
  );
}

export default index;
