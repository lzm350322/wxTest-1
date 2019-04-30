// components/Linkist/Linkist.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    usite:{
      type:String,
      value:'http://'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
   
   ItemList:[
     {"pagename":"WXML学习的基本语法","pagetext":"/tools/wxml/wxml"},
     {"pagename":"利息计算器","pagetext":"/tools/lxjsq/lxjsq"},
     {"pagename":"计算器","pagetext":"/tools/lxjsq/lxjsq"}
   ],

  },
  attached(){

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
