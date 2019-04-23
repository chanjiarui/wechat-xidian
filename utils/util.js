const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}
/**
 * 引入本地数据js文件
 */
var discovery = require('../data/data_discovery.js')
var next_discovery = require('../data/data_discovery_next.js')
/**
 * 获取网络请求的数据
 */
function getData(url){
  return new Promise(function(resolve,reject){
    wx.request({
      url: url,
      data: {},
      header:{

      },
      success:function(res){
        console.log("success")
        resolve(res)
      },
      fail:function(res){
        reject(res)
        console.log("fail")
      }
    })
  })
}

function getDiscovery(){
  return discovery.discovery
}

function getNextDiscovery(){
  return next_discovery.next_discovery
}

module.exports.getDiscovery = getDiscovery;
module.exports.getNextDiscovery = getNextDiscovery;
