const path = require('path')
const fs = require('fs')
const data = require('./mock')

function deleteProps (list) {
  list.forEach(element => {
    element['@class'] && delete element['@class']
    element.bizEventId && delete element.bizEventId
    element.className && delete element.className
    element.methodName && delete element.methodName
    element.appName && delete element.appName
    element.status && delete element.status
    element.parentId && delete element.parentId
    element.order && delete element.order
    element.appId && delete element.appId
    element.apiPath && delete element.apiPath
    element.invokedAt && delete element.invokedAt
    element.invokedEndAt && delete element.invokedEndAt
    element.traceId && delete element.traceId
    element.id = uuid()
    if (element.subInvocationList && element.subInvocationList.length > 0) {
      deleteProps(element.subInvocationList)
    }
  })
}
deleteProps(data.data)
fs.writeFileSync(
  path.resolve(__dirname, 'test.js'),
  JSON.stringify(data, null, 4),
  'utf-8'
)
function uuid () {
  var s = []

  var hexDigits = '0123456789abcdef'

  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }

  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010

  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01

  s[8] = s[13] = s[18] = s[23] = '-'

  var uuid = s.join('')

  return uuid
}
