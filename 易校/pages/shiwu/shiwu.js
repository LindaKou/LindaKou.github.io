//index.js
//获取应用实例
var common = require('../../utils/common.js')
var app = getApp()
var Bmob = require("../../utils/bmob.js");
var util=require("../../utils/util.js");
var imageUtil=require('../../utils/util.js');
var that;

Page({
  data: {
    _url:[],
    moodList: [],
    limit: 0,
    page: 3,//当前请求的页数
    currentPage: 0,//当前请求的页数
    isload: false,
    isEmpty: true,
    pageSize: 5,//每次加载多少条
    // limit: 2,//跟上面要一致
    loading: false,
    windowHeight1: 0,
    windowWidth1: 0,
    count: 0,
    scrollTop: {
      scroll_top1: 0,
      goTop_show: false
    },
    buttonClicked: false, //是否点击跳转
    imagewidth:0,//缩放后的宽
    imageheight:0,//缩放后的高
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    console.log('输入了', e.detail.value);

    this.setData({
      inputVal: e.detail.value
    });
    getReturn(this, e.detail.value);
  },
  onLoad: function (t) {

    if (!t) {
      that = this;
      getReturn(that);
    }
   
  },
  onSetData: function (data) {
    console.log(data.length);
    let page = this.data.currentPage = this.data.currentPage + 1;

    //设置数据
    data = data || [];

    this.setData({
      moodList: page === 1 || page === undefined ? data : this.data.moodList.concat(data),
      isEmpty: data.length === 0 ? false : true,
      isload: true
    });
    console.log(this.data.moodList, page);

  },
  seeActBig: function (e) {
    wx.previewImage({
      current: that.data.listPic, // 当前显示图片的http链接
      urls: [that.data.listPic] // 需要预览的图片http链接列表
    })
  },
  onShow: function (e) {
    var molist = new Array();
    // var myInterval = setInterval(getReturn, 500);

    if (e) {
      that.setData({
        currentPage: 0,
        page: 3,
      })

    }

    this.onLoad();





    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight1: res.windowHeight,
          windowWidth1: res.windowWidth
        })
      }
    })
  },

  
  onReachBottom: function () {
    this.onShow();
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh();
    var limit = that.data.limit
    console.log("下拉刷新....." + that.data.limit)
    that.setData({
      limit: that.data.pageSize,

    })
    that.onShow(1)
  },
  scrollTopFun: function (e) {
    if (e.detail.scrollTop > 300) {
      this.setData({
        'scrollTop.goTop_show': true
      });
    } else {
      this.setData({
        'scrollTop.goTop_show': false
      });
    }
  },
  // 点击图片进入失物招领信息详情页面
  click_activity: function (e) {
    if (!this.buttonClicked) {
      util.buttonClicked(this);
      let actid = e.currentTarget.dataset.actid;
      let pubid = e.currentTarget.dataset.pubid;
      let user_key = wx.getStorageSync('user_key');
      wx.navigateTo({
        url: '/pages/detail/detail?actid=' + actid + "&pubid=" + pubid
      });
    }
  },
 
  //点击搜索
  click_search: function () {
    self = this;
    if (!this.buttonClicked) {
      util.buttonClicked(this);
      console.log(getCurrentPages())
      wx.navigateTo({
        url: '/pages/search/search',
      });
    }
  },
  //设置图片在页面中合适比例缩放
  //imageLoad:function(e){
  //  var imageSize=imageUtil.imageUtil(e)
   // this.setData({
    //  imagewidth:imageSize.imageWidth,
    //  imageheight:imageSize.imageHeight
   // })
  //},
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {

  }

})


function getReturn(that, value) {

  if (that.data.isEmpty == false) {
    return;
  }


  that.setData({
    loading: false
  });
  var molist = new Array();


  // clearInterval(myInterval)
  var Diary = Bmob.Object.extend("Events");
  var query = new Bmob.Query(Diary);



  query.limit(that.data.page);
  query.skip(that.data.page * that.data.currentPage);


  //条件查询
  //query.equalTo("is_hide", "1");

  //if (value) {
    //query.equalTo("title", { "$regex": "" + value + ".*" });
  //}
  
  query.descending("createdAt");
  query.include("publisher");
  // 查询所有数据
  query.find({
    success: function (results) {

      for (var i = 0; i < results.length; i++) {
        var publisherId = results[i].get("publisher").id;
        //var title = results[i].get("title");
        var acttype=results[i].get("acttype");
        var acttypeName=results[i].get("acttypeName")
        var Statusname=results[i].get("Statusname");
        var content = results[i].get("content");
        var id = results[i].id;
        var createdAt = results[i].createdAt;
        var _url;
        var contactWay=results[i].get("contactWay");
        var contactValue=results[i].get("contactValue");
        //var likeNum = results[i].get("likeNum");
        var commentnum = results[i].get("commentnum");
        var pic = results[i].get("actpic");
        if (pic) {
          _url = results[i].get("actpic")._url;
        }
        else {
          _url = "http://bmob-cdn-16093.b0.upaiyun.com/2018/01/08/e1ae06cb4083a50280ec6250a2af1abe.png";
        }
        
        
        var jsonA;
        if (pic) {
          jsonA = {        
           "acttype":acttype || '',
           "acttypeName":acttypeName || '',
            "content": content || '',
            "Statusname":Statusname || '',  
            "id":id || '',        
            "created_at": createdAt || '',
            "attachment": _url || '',
            "contactWay": contactWay || '',
            "contactValue": contactValue || '',   
            "commentnum": commentnum || ''        
          }
        }
        else {
          jsonA = {
            "acttype":acttype|| '',
            "acttypeName": acttypeName || '',
            "content": content || '',
            "id": id || '',
            "Statusname": Statusname || '',
            "created_at": createdAt || '',
            "attachment": _url || '',
            "contactWay": contactWay || '',
            "contactValue": contactValue || '',
            "commentnum": commentnum || ''    
          }
        }

        molist.push(jsonA)
      }
      that.onSetData(molist, that.data.currentPage);

    },
    error: function (error) {
    
      console.log(error)
    }
  });

  


}


