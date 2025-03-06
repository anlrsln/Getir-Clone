import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "@/src/constants/Colors";

const CustomBottomTabButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Entypo name="list" size={32} color={Colors.main.yellow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.main.purple,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: "white",
  },
});

export default CustomBottomTabButton;
