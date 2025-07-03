import { router } from "expo-router";
import { TouchableOpacity, View, Text } from "react-native";
import { Image } from "expo-image";

export default function NewsItem(props: {
  id: string;
  title_news: string;
  link_news: string;
  image_link: string;
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/news/${props.id}`);
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
          paddingEnd: 100,
        }}
      >
        <Image
          style={{ width: 75, height: 75 }}
          source={{ uri: props.image_link }}
        />
        <Text style={{ fontWeight: "bold" }}>{props.title_news}</Text>
      </View>
    </TouchableOpacity>
  );
}
