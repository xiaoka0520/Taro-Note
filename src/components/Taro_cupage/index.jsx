import { View } from "@tarojs/components";
import { useState } from "react";
import { AtTabs } from "taro-ui";
import TaroSlide from "../Taro_slide";
import "./select.css";

function Select() {
  const [current, setCurrent] = useState(0);
  function handleClick(e) {
    setCurrent((current) => (current = e));
  }
  const tabList = [{ title: "推荐" }, { title: "最新" }];
  return (
    <View className="select">
      <View className="select-wrap">
        <AtTabs
          current={current}
          tabList={tabList}
          onClick={(event) => handleClick(event)}
        ></AtTabs>
      </View>
    </View>
  );
}
export default function TaroCurPage() {
  return (
    <View>
      <TaroSlide></TaroSlide>
      <Select></Select>
    </View>
  );
}
