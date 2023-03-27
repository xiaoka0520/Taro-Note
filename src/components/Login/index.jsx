import { AtModal, AtModalContent, AtIcon } from "taro-ui";
import { View, Text, Image } from "@tarojs/components";

import Form from '../../components/Form'
import "./login.css";

export default function LoginModal(props) {
  return (
    <View>
      <AtModal isOpened={props.isOpened} className="modal">
        <View className="modal-title">
          <Text>登录ONEKA享更多权益</Text>
          <AtIcon value="close" size="30" color="#dee1e6"></AtIcon>
        </View>
        <AtModalContent>
          <Form/>
        </AtModalContent>
      </AtModal>
    </View>
  );
}
