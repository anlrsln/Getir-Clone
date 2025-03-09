import { Colors } from "@/src/constants/Colors";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 8,
    width: width * 0.3,
    height: height * 0.24,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "#000",
  },
  image: {
    width: width * 0.28,
    height: width * 0.28,
    borderWidth: 0.5,
    borderColor: "lightgrey",
    borderRadius: 12,
  },
  productNameText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "600",
  },
  productAmountText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "600",
    color: "grey",
  },
  addProductButton: {
    width: 30,
    height: 30,
    position: "absolute",
    right: -6,
    top: -6,
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
});

export default styles;
