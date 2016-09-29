module.exports = {
  getAvatarUrl: function(ID) {
    return 'http://lorempixel.com/68/68/people/' + ID
  },
  timeFormat: function(ms){
    ms = ms * 1000
    var d_second,d_minutes, d_hours, d_days
    var timeNow = new Date().getTime()
    var d = (timeNow - ms)/1000
    d_days = Math.round(d / (24 * 60 * 60))
    d_hours = Math.round(d / (60 * 60))
    d_minutes = Math.round(d / 60)
    d_second = Math.round(d)
    if (d_days > 0 && d_days < 2) {
      return d_days + i18n.global.day_ago
    } else if (d_days <= 0 && d_hours > 0) {
      return d_hours + i18n.global.hour_ago
    } else if (d_hours <= 0 && d_minutes > 0) {
      return d_minutes + i18n.global.minute_ago
    } else if (d_minutes <= 0 && d_second >= 0) {
      return i18n.global.just_now
    } else {
      var s = new Date()
      s.setTime(ms)
      return (s.getFullYear() + '-' + f(s.getMonth() + 1) + '-' + f(s.getDate()) + ' '+ f(s.getHours()) + ':'+ f(s.getMinutes()))
    }

    function f(n){
      return n < 10 ? '0' + n : n
    }
  }
}