import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "@/constants/Colors";

function index() {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image
          style={styles.addressImg}
          source={{ uri: "https://cdn.getir.com/misc/emoji/house.png" }}
        />
        <View style={styles.addressHeader}>
          <Text style={styles.addressTypeText}>Ev</Text>
          <Text>Alparslan Mh. Mustafa Şimşek Blv..</Text>
          <Entypo name="chevron-right" size={24} color={Colors.main.purple} />
        </View>
      </View>
      <View style={styles.tvsView}>
        <Text style={styles.tvsTitleText}>TVS</Text>
        <Text style={styles.tvsTimeText}>13dk</Text>
      </View>
    </View>
  );
}

export default index;
