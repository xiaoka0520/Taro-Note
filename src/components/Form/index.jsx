import { AtInput, AtForm, AtButton } from "taro-ui";
import { View, Text, Image } from "@tarojs/components";
import "./form.css";
export default function LoginFrom() {
  const value = "";
  function handleChange(e) {
    console.log(e);
  }
  return (
    <View className="form">
      <View className="form-title">验证码登录</View>
      <AtForm>
        <AtInput
          clear
          type="text"
          title="手机号"
          maxLength="4"
          placeholder="请输入手机号"
          value={value}
          onChange={() => handleChange}
        />
        <AtInput
          clear
          type="text"
          maxLength="4"
          placeholder="验证码"
          value={value}
          onChange={() => handleChange}
        >
          <Text>获取验证码</Text>
        </AtInput>
        <View className="form-title reverse">密码登录</View>
        <AtButton className="form-btn" formType="submit" type="primary">
          登录
        </AtButton>
      </AtForm>
    </View>
  );
}
