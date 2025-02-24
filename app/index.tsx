import { Image } from "expo-image";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import newsData from "@/assets/news.json";

export default function Index() {

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Image
        style={{
          width: "auto",
          margin: 5,
          borderRadius: 10,
          height: 250,
        }}
        source="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
      />
      <FlatList
        data={newsData.DATA_NEWS}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#b3b2b1",
                paddingVertical: 10,
                marginVertical: 1,
                paddingStart: 5
              }}
            >
              <Text>{item.title_news}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
