import Taro from '@tarojs/taro'
import { useState } from "react";
import { View } from "@tarojs/components";
import { AtTabs } from "taro-ui";

export default function TaroTabs(props) {
  const [current, setCurrent] = useState(() => 0);

  function handleClick(e) {
    setCurrent((current) => (current = e));
    Taro.eventCenter.trigger('tabchange',e)
  }
  return (
    <View>
      <AtTabs
        current={current}
        scroll
        tabList={props.tabList}
        onClick={(event) => handleClick(event)}
      ></AtTabs>
      <View>{props.children}</View>
    </View>
  );
}
