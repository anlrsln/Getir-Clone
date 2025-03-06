import { Colors } from "@/src/constants/Colors";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  scrollView: {
    width: width,
    backgroundColor: Colors.main.categoriesBarBackground,
    height: height * 0.06,
  },
  categoryBox: {
    marginHorizontal: 5,
    paddingHorizontal: 9,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryName: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
});

export default styles;
