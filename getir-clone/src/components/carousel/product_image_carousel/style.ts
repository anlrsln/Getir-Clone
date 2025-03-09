import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    width: width,
    height: height * 0.25,
    paddingTop: 15,
  },
  flatList: {
    width: width * 0.5,
    height: height * 0.25,
  },
  image: {
    width: width * 0.5,
    height: height * 0.25,
    resizeMode: "stretch",
  },
  sliderDotsView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: 40,
    height: 20,
  },
  sliderDots: {
    width: 8,
    height: 8,
    borderRadius: 50,
  },
});

export default styles;
