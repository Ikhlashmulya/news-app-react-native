import {
  FlatList,
  View,
} from "react-native";
import newsData from "@/assets/news.json";
import CarouselImage from "@/components/CarouselImage";
import NewsItem from "@/components/NewsItem";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <CarouselImage />
      <FlatList
        data={newsData.DATA_NEWS}
        renderItem={({ item }) => (
          <NewsItem {...item} />
        )}
      />
    </View>
  );
}
