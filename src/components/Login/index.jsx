import { AtModal, AtModalContent, AtIcon, AtInput, AtForm } from "taro-ui";
import { View, Text, Image } from "@tarojs/components";
import "./login.css";
export default function LoginModal(props) {
  function handleChange(e){

  }
  return (
    <View>
      <AtModal isOpened={props.isOpened}>
        <View className="modal-title">
          <Text>登录ONEKA享更多权益</Text>
          <AtIcon value="close" size="30" color="#dee1e6"></AtIcon>
        </View>
        <AtModalContent>
          <AtInput
            clear
            title="验证码"
            type="text"
            maxLength="4"
            placeholder="验证码"
            value="111"
            onChange={()=>handleChange}
          >
            <Image src="https://aotu.io/img.png"/>
          </AtInput>
        </AtModalContent>
      </AtModal>
    </View>
  );
}
