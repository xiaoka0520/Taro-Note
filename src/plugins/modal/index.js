import Taro from "@tarojs/taro";
export default {
  Toast(content) {
    Taro.showToast({
      title: content,
      icon: "none",
    });
  },
  ErrorToast(content) {
    Taro.showToast({
      title: content,
      icon: "error",
    });
  },
  SuccessToast(content) {
    Taro.showToast({
      title: content,
      icon: "success",
    });
  },

  //    弹出窗体
  alert(content) {
    Taro.showModal({
      title: "提示",
      content: content,
      showCancel: false, // 是否显示取消按钮
    });
  },
  //  确认窗体
  confirm(content) {
    return new Promise((resolve, reject) => {
      Taro.showModal({
        title: "系统提示",
        content: content,
        cancalText: "取消",
        confirmText: "确定",
        success: function (res) {
          if (res.confirm) {
            resolve(res.confirm);
          }
        },
      });
    });
  },
  Loading(content) {
    Taro.showLoading({
      title: content,
      icon: "none",
    });
  },
  closeLoading() {
    Taro.showLoading();
  },
};
