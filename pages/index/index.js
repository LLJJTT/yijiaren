//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    searchValue:'',
    tableData:[],
    movies: [
      { url: 'http://112.74.63.14/interface/img/city/dq.jpeg' },
      { url: 'http://112.74.63.14/interface/img/city/dxal.jpeg' },
      { url: 'http://112.74.63.14/interface/img/city/heb.jpeg' },
      { url: 'http://112.74.63.14/interface/img/city/yc.jpeg' }
    ]  
  },
  //事件处理函数
  // 获取输入框的值
  searchContent:function(e){
    this.setData({
      searchValue:e.detail.value
    })
  },
  // 点击事件
  toSearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
    if(this.data.searchValue==''){
      wx.showToast({
        title: '请输入内容',
        icon: 'none',
        duration: 1200
      })
    }
    else{
      var that  = this;
      wx.request({
        url: 'http://112.74.63.14/interface/strategy.php',
        method: 'GET',
        success: function (res) {
          wx.showToast({
            title: '请求成功',
            icon: 'none',
            duration: 1200
          })
          // 赋值
          that.setData({
            tableData: res.data,
          })
          console.log(that.data.tableData.length)
        },
        fail: function (error){
          wx.showToast({
            title: '请求失败',
            icon: 'none',
            duration: 1200
          })
          console.log(error)
        }
      })
    }
  },
  toastHidden: function () {
    this.setData({
      hiddenToast: true
    })
  },
  // 加载
  onLoad: function () {
  },
  
})
