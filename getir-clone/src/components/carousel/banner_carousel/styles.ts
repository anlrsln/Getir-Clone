import { Colors } from "@/src/constants/Colors";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  bannerContainer: {
    width: width,
    height: height * 0.25,
  },
  banner_image: {
    width: width,
    height: height * 0.25,
    resizeMode: "stretch",
  },
});

export default styles;
