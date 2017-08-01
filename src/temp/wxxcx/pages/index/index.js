//index.js
//获取应用实例
var app = getApp()
// 引入外部文件
var util = require('../util.js')
Page({
  data: {
    motto: 'Hello World',
    logs:[],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 以下page页面函数
  onLoad: function () { //生命周期函数--监听页面加载
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady:function () { //生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function () { //生命周期函数--监听页面显示
    
  },
  onHide:function () { //生命周期函数--监听页面隐藏
    
  },
  onUnload:function () { //生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh:function () { //页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom:function () { //页面上拉触底事件的处理函数
    
  },
  onShareAppMessage:function () { //用户点击右上角转发
    
  },
  onPageScroll:function () { //页面滚动触发事件的处理函数
    
  },

  // 普通自定义函数，页面内可以用this调用
  customFunction: function ()　{

  },

  // 普通自定义数据
  customData: {
    hi: 'MINA'
  }


})
