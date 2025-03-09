import { Colors } from "@/src/constants/Colors";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height * 0.4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  productInformationsView: {
    alignItems: "center",
    justifyContent: "center",
  },
  productNameText: {
    marginTop: 15,
    fontSize: 15,
    fontWeight: "bold",
  },
  productAmount: {
    marginTop: 5,
    fontSize: 12,
    color: "grey",
    fontWeight: "600",
  },
});

export default styles;
