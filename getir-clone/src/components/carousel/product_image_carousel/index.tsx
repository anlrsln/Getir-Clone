import { View, Text, FlatList, Image, Dimensions } from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Colors } from "@/src/constants/Colors";

const ProductImageCarousel = ({ images }: { images: string[] }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const onViewRef = React.useRef((viewableItems: any) => {
    if (viewableItems.viewableItems.length > 0) {
      setSelectedImageIndex(viewableItems.viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={images}
        renderItem={(item) => {
          return <Image source={{ uri: item.item }} style={styles.image} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").width * 0.5}
        snapToAlignment="center"
        decelerationRate={"fast"}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      ></FlatList>
      <View>
        <View style={styles.sliderDotsView}>
          {images.map((image, index) => (
            <View
              key={index}
              style={[
                styles.sliderDots,
                {
                  backgroundColor:
                    selectedImageIndex == index
                      ? Colors.main.purple
                      : "lightgrey",
                },
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default ProductImageCarousel;
