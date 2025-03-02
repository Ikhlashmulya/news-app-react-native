import { useLocalSearchParams } from "expo-router";
import { Text, useWindowDimensions, View } from "react-native";
import newsData from "@/assets/news.json";
import { Image } from "expo-image";
import RenderHtml from "react-native-render-html";

export default function News() {
  const { id } = useLocalSearchParams();
  const selectedNews = newsData.DATA_NEWS.filter((news) => news.id === id)[0];
  const source = {
    html: selectedNews.link_news,
  };

  const { width } = useWindowDimensions();

  return (
    <View>
      <Image
        style={{ width, height: 250 }}
        source={{ uri: selectedNews.image_link }}
      />
      <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 20 }}>
        {selectedNews.title_news}
      </Text>
      <View>
        <RenderHtml contentWidth={width} source={source} />
      </View>
    </View>
  );
}
