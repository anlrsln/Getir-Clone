import { Colors } from "@/src/constants/Colors";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: Colors.main.background,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginTop: 10,
  },
});

export default styles;
