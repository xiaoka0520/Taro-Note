import { AtIcon } from "taro-ui";
import { View, Text } from "@tarojs/components";
import "./index.css";
import "./card.css";

function Card() {
  return (
    <View>
      <View className="title">
        <Text>后端文字</Text>
        <View>
          <Text>更多</Text>
          <AtIcon value="chevron-right" size="30" color="#dee1e6"></AtIcon>
        </View>
      </View>
    </View>
  );
}
export default function TaroSlide() {
  return (
    <View className="slide">
      <View className="slide-list">
        <View className="item">
          <Card />
        </View>
        <View className="item">
          <Card />
        </View>
        <View className="item">
          <Card />
        </View>
      </View>
    </View>
  );
}
