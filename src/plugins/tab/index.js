import Taro from "@tarojs/taro";
export default{
    switchTab(url){
        return TaroNavBar.switchTab({
            url:url
        })
    },
    reLaunch(url){
        return TaroNavBar.reLaunch({
            url:url
        })
    },
    redirectTo(url){
        return TaroNavBar.redirectTo({
            url:url
        })
    },
    navigateTo(){
        return TaroNavBar.navigateTo({
            url:url
        })
    },
    navigateBack(){
       return TaroNavBar.navigateBack() 
    }
}