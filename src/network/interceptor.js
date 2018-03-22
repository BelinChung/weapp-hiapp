/**
 * request 拦截器
 * 可以全局拦截请求参数
 */
export function request(params) {
  return params
}

/**
 * response 拦截器
 * 可以全局拦截请求返回结果
 */
export function response(res) {
  if (res.statusCode === 200) {
    res = res.data
    if (!res.err_code) {
      return res
    } else {
      return Promise.reject(res)
    }
  } else {
    return Promise.reject(res)
  }
}
