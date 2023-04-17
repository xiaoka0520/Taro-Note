import Taro from "@tarojs/taro";

import { useState } from "react";
import { View } from "@tarojs/components";
import "./index.less";

import TaroNavBar from "../../components/Taro_navbar/index";
import TaroTabs from "../../components/Taro_tabs";
import TaroCurPage from "../../components/Taro_cupage";

import LoginModal from "../../components/Login";

export default function Index() {
  const [Opened, setOpened] = useState(false);
  // 监听子组件的方法
  Taro.eventCenter.on("tabchange", changeTab);
  Taro.eventCenter.on("login", loginClick);
  function changeTab(e) {
    console.log(e);
  }

  function loginClick(e) {
    setOpened((Opened) => !Opened);
  }
  const tabList = [
    { title: "综合" },
    { title: "日常" },
    { title: "前端" },
    { title: "后端" },
    { title: "动画" },
    { title: "阅读" },
  ];

  return (
    <View className="index">
      <TaroNavBar />
      <TaroTabs tabList={tabList}>
        <TaroCurPage />
      </TaroTabs>
      <LoginModal isOpened={Opened} />
    </View>
  );
}
