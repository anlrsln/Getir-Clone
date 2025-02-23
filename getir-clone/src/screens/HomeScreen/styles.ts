import { Colors } from "@/constants/Colors";
import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  headerMain: {
    height: height * 0.064,
    backgroundColor: Colors.HomeScreen.header.yellow,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerOne: {
    height: height * 0.064,
    width: width * 0.8,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    borderTopEndRadius: 28,
    borderBottomEndRadius: 28,
  },
  addressHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.8,
    borderLeftWidth: 2,
    borderLeftColor: "lightgray",
  },
  addressImg: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  addressTypeText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  addressText: {
    fontSize: 16,
    color: "black",
  },
  tvsView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tvsTitleText: {
    fontSize: 10,
    color: Colors.main.purple,
    fontWeight: "bold",
  },
  tvsTimeText: {
    fontSize: 20,
    color: Colors.main.purple,
    fontWeight: "bold",
  },
});

export default styles;
