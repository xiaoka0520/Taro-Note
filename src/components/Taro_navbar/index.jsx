import Taro from "@tarojs/taro";
import { AtIcon, AtButton } from "taro-ui";
import { View } from "@tarojs/components";

import "./index.css";

export default function TaroNavBar() {
  const state = 0;
  function AuthClick(){
    // console.log('111')
    Taro.eventCenter.trigger('login')
  }
  return (
    <View className="nav">
      <View className="nav-wrap">
        <View className="nav-item item-left">
          <AtIcon value="menu" size="30" color="#dee1e6"></AtIcon>
        </View>
        <View className="nav-item item-center">
          <input type="text" className="nav-input" />
        </View>
        {state ? (
          <View className="nav-item item-right">
            <AtIcon value="bell" size="30" color="#dee1e6"></AtIcon>
            <AtIcon value="user" size="30" color="#dee1e6"></AtIcon>
          </View>
        ) : (
          <View className="nav-item item-right">
            <AtButton type="primary" size="small" onClick={()=>AuthClick()}>
              注册
            </AtButton>
          </View>
        )}
      </View>
    </View>
  );
}
