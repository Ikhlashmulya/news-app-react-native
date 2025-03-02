import Carousel from "react-native-reanimated-carousel";
import newsData from "@/assets/news.json";
import { Pressable, useWindowDimensions } from "react-native";
import { router } from "expo-router";
import { Image } from "expo-image";

export default function CarouselImage() {
  const { width } = useWindowDimensions();
  return (
    <Carousel
      style={{ marginBottom: 15 }}
      data={newsData.DATA_NEWS}
      loop={true}
      width={width}
      height={250}
      autoPlayInterval={1}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            router.push(`/news/${item.id}`);
          }}
        >
          <Image
            style={{
              width: "auto",
              margin: 5,
              borderRadius: 10,
              height: 250,
            }}
            source={{ uri: item.image_link }}
          />
        </Pressable>
      )}
    />
  );
}
