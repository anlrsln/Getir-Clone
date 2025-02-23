import React from "react";
import { ScrollView } from "react-native";
import HomeScreenHeader from "../../components/headers/home_screen_header";
import BannerCarousel from "../../components/banner/banner_carousel";

function index() {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <HomeScreenHeader />
      <BannerCarousel />
    </ScrollView>
  );
}

export default index;
