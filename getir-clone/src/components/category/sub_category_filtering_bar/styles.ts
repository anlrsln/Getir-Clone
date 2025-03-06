import { Colors } from "@/src/constants/Colors";
import { Platform, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  scrollView: {
    width: width,
    backgroundColor: "white",
    height: height * 0.06,
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  categoryBox: {
    marginVertical: 8,
    marginHorizontal: 8,
    paddingHorizontal: 15,
    flexDirection: "row",
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 0.25,
    borderColor: "lightgray",
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  categoryName: {
    color: Colors.main.purple,
    fontSize: 12,
    fontWeight: "500",
  },
});

export default styles;
