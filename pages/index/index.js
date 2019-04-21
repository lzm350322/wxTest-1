//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },


  //测试代码开始
 
 //测试代码结束

  onLoad: function () {
    
  },

})
Component({
  data: {
    selected: app.globalData.selected,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    ItemList: [{
      pagePath: "/pages/calc/calc",
      text: "计算器"
    }, {
        pagePath: "/pages/Itcr/Itcr",
      text: "利息计算器"
    },{
      pagePath:"/pages/game/game",
      text:"猜字游戏"
      }, {
        pagePath: "/pages/api/api",
        text: "微信api"
      }
    ],
  }
})

