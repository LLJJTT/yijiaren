Page({
  data: {
    navLeftItems: [],
    navRightItems: [],
    curNav: 1,
    curIndex: 0
  },
  onLoad: function () {
      var axios = require("../../axios.min.js")
      var jquery  = require("../../jquery.min.js")
      console.log(axios.prototype)
      this.data.navRightItems=  this.data.navLeftItems
      $.ajax({
        url:'http://localhost/TourismApp/interface/strategy.php',
        type:'GET',
        success:function(res){
          console.log(res.data)
        }
      })
    // 加载的使用进行网络访问，把需要的数据设置到data数据对象  
    var that = this
    axios.get('http://localhost/TourismApp/interface/strategy.php')
    .then((res) =>{
      console.log(res)
    })
    .catch((error) =>{
      console.log(error)
    })
    // wx.request({
    //   url: 'http://huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
    //   method: 'GET',
    //   data: {},
    //   header: {
    //     'Accept': 'application/json'
    //   },
    //   success: function (res) { 
    //     console.log(res.data)
    //     that.setData({
    //       navLeftItems: res.data,
    //       navRightItems: res.data
    //     })
    //   }
    // })
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  }
})  
