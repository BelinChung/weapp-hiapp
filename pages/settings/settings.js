var app = getApp()
Page({
  data:{
    userInfo: {}
  },
  onLoad: function() {
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  },
  navToAbout: function() {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  navToFeedback: function() {
    wx.navigateTo({
      url: '../feedback/feedback'
    })
  },
  navToProfile: function() {
    wx.navigateTo({
      url: '../profile/profile'
    })
  }
})