let app = getApp()
Page({
  data:{
    userInfo: {}
  },
  onLoad() {
    app.getUserInfo(userInfo => {
      this.setData({
        userInfo: userInfo
      })
    })
  },
  navToAbout() {
    wx.navigateTo({
      url: '../about/about'
    })
  },
  navToFeedback() {
    wx.navigateTo({
      url: '../feedback/feedback'
    })
  },
  navToProfile() {
    wx.navigateTo({
      url: '../profile/profile'
    })
  }
})