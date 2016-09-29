var app = getApp()
var util = require('../../utils/util.js')
var ajax = require('../../network/ajax.js')

Page({
  data: {
    timeline: [],
    loading: false  
  },
  onReady: function() {
    this.getTimeline()  
  },
  getTimeline: function() {
    var _this = this
    _this.setData({
      loading: true
    })
    ajax({
        url: 'timeline.json',
        success: function(res) {
          var timeline = _this.formatTimeline(res.data)
          _this.setData({
            timeline: timeline
          })
        },
        complete: function() {
          _this.setData({
            loading: false
          })
        }
    })
  },
  formatTimeline: function(items) {
    items.forEach(function(item) {
      item.avatar = util.getAvatarUrl(item.avatar)
      item.time = util.timeFormat(item.created_at)
      return item
    })
    return items
  },
  previewImage: function(event) {
    wx.previewImage({
      current: '', 
      urls: [event.target.dataset.originalPic]
    })
  } 
})
