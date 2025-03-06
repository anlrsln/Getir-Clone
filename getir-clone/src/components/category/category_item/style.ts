import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  touchableOpacity: {
    marginTop: 10,
    width: width * 0.25,
    height: width * 0.24,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: width * 0.18,
    height: width * 0.18,
    borderRadius: 8,
  },
  text: {
    fontSize: 12,
    color: "gray",
    fontWeight: "500",
  },
});

export default styles;
