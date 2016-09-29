var util = require('../../utils/util.js')
var ajax = require('../../network/ajax.js')

Page({
  data:{
    contacts: [],
    loading: false  
  },
  onLoad: function() {
    this.getContacts()
  },
  getContacts: function() {
    var _this = this
    _this.setData({
      loading: true
    })
    ajax({
        url: 'contacts.json',
        success: function(res) {
          _this.setData({
            contacts: _this.formatContacts(res.data)
          })
        },
        complete: function() {
          _this.setData({
            loading: false
          })
        }
    })
  },
  formatContacts: function(items) {
    items.forEach(function(item) {
      item.avatar = util.getAvatarUrl(item.avatar)
      return item
    })
    return items
  },
})