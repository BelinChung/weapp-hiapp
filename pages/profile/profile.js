var app = getApp()
Page({
  data:{
    userInfo: {}
  },
  onLoad: function() {
    var that = this
    app.getUserInfo(function(userInfo){
      userInfo.gender = userInfo.gender === 1 ? 'Male' : 'Female'
      that.setData({
        userInfo: userInfo
      })
    })
  }
})