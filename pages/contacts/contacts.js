let util = require('../../utils/util')
let ajax = require('../../network/ajax')

Page({
  data:{
    contacts: [],
    loading: false  
  },
  onLoad() {
    this.getContacts()
  },
  getContacts() {
    this.setData({
      loading: true
    })
    ajax({
        url: 'contacts.json',
        success: res => {
          this.setData({
            contacts: this.formatContacts(res.data)
          })
        },
        complete: _ => {
          this.setData({
            loading: false
          })
        }
    })
  },
  formatContacts(items) {
    items.forEach(item => {
      item.avatar = util.getAvatarUrl(item.avatar)
      return item
    })
    return items
  },
})