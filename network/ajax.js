var API_PATH = 'https://raw.githubusercontent.com/BelinChung/HiApp/master/src/api/'

function _param() {
    var obj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0]

    var _ = encodeURIComponent
    return Object.keys(obj).map(function (k) {
        return _(k) + '=' + _(obj[k])
    }).join('&')
}

function ajax(_ref) {
    var url = _ref.url
    var query = _ref.query
    var data = _ref.data
    var _ref$method = _ref.method
    var method = _ref$method === undefined ? 'GET' : _ref$method
    var success = _ref.success
    var fail = _ref.fail
    var complete = _ref.complete

    url = API_PATH + url + '?' + _param(query)

    wx.request({
        url: url,
        data: data,
        method: method,
        success: function(res) {
            var data = res.data
            data['err_msg'] === 'success' ? success(data) : fail(res)
        },
        fail: fail,
        complete: complete
    })
}

module.exports = ajax