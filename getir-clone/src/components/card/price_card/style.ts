import { Colors } from "@/src/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  priceView: {
    flexDirection: "row",
    marginTop: 8,
  },
  discountedPriceText: {
    marginRight: 5,
    color: "grey",
    textDecorationLine: "line-through",
    fontWeight: "bold",
  },
  priceText: {
    color: Colors.main.purple,
    fontWeight: "bold",
  },
});

export default styles;
