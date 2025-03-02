import {
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import newsData from "@/assets/news.json";
import { router } from "expo-router";
import { Image } from "expo-image";
import { mapToImageLink } from "../util/map-to-image-link";
import Carousel from "react-native-reanimated-carousel";

export default function Index() {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
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
              source={mapToImageLink(item.image_link)}
            />
          </Pressable>
        )}
      />
      <FlatList
        data={newsData.DATA_NEWS}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              router.push(`/news/${item.id}`);
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                paddingVertical: 10,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                flex: 1,
                flexDirection: "row",
                paddingStart: 10,
                gap: 10,
              }}
            >
              <Image
                style={{ width: 75, height: 75 }}
                source={mapToImageLink(item.image_link)}
              />
              <Text>{item.title_news}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
