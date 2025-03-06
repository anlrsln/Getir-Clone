import React from "react";
import { ScrollView } from "react-native";
import HomeScreenHeader from "../../components/headers/home_screen_header";
import BannerCarousel from "../../components/banner/banner_carousel";
import styles from "./styles";
import MainCategories from "../../components/category/main_category";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <HomeScreenHeader />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
};

export default HomeScreen;
