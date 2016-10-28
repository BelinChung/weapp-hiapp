let app = getApp()
let util = require('../../utils/util')
let ajax = require('../../network/ajax')

Page({
  data: {
    timeline: []
  },
  onReady() {
    this.getTimeline()  
  },
  getTimeline() {
    wx.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    ajax({
        url: 'timeline.json',
        success: res => {
          let timeline = this.formatTimeline(res.data)
          this.setData({
            timeline: timeline
          })
        },
        complete: _ => {
          wx.hideToast()
        }
    })
  },
  formatTimeline(items) {
    items.forEach(item => {
      item.avatar = util.getAvatarUrl(item.avatar)
      item.time = util.timeFormat(item.created_at)
      return item
    })
    return items
  },
  previewImage(event) {
    wx.previewImage({
      current: '', 
      urls: [event.target.dataset.originalPic]
    })
  } 
})
