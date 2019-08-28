 //shiwu.js
//获取应用实例
var WxSearch = require('../../wxSearch/wxSearch.js')
var common = require('../../utils/common.js')
var Bmob = require("../../utils/bmob.js");
var util = require('../../utils/util.js');
var app = getApp()
var that;
var smoodList;
Page({
  data: {
    buttonClicked: false, //是否点击跳转
    acttype: 0,
    moodList: [],
    isEmpty: true,
    loading: false,
  },
  //选择要查询的活动类型
  choseTradeType: function (e) {
    var acttype = e.currentTarget.id;
    if (acttype == 0) this.onShow();
    else if (acttype == 1) this.setData({moodList: this.data.keyList});
    else if (acttype == 2) this.setData({ moodList: this.data.bookList });
    else if (acttype == 3) this.setData({ moodList: this.data.cardList });
    else if (acttype == 4) this.setData({ moodList: this.data.schoolbagList });
    else if (acttype == 5) this.setData({ moodList: this.data.watchList });
    else if (acttype == 6) this.setData({ moodList: this.data.cuplist });
    else if (acttype == 7) this.setData({ moodList: this.data.clothesList });
    else if (acttype == 8) this.setData({ moodList: this.data.phoneList });
    else if (acttype == 9) this.setData({ moodList: this.data.glassesList });
    else if (acttype == 10) this.setData({ moodList: this.data.headsetList });
    else if (acttype == 11) this.setData({ moodList: this.data.otherList });
    this.setData({
      acttype: acttype
    })
  },
  onLoad: function () {
    that = this;
    //初始化的时候渲染wxSearchdata
    WxSearch.init(that, 43, ['钥匙', '书', '卡等证件', '书包', '钱包', '水杯','衣服','手机','眼镜','耳机','其他']);
    WxSearch.initMindKeys(['钥匙', '书', '卡等证件', '书包', '钱包', '水杯', '衣服', '手机', '眼镜', '耳机','其他']);
  },
   onShow: function () {
    that.setData({
      loading: false
    });
    var molist = new Array();
    var Diary = Bmob.Object.extend("Events");
    var query = new Bmob.Query(Diary);
    query.descending("createdAt");
    query.include("publisher");
    // 查询所有数据
    query.find({
      success: function (results) {
        for (var i = 0; i < results.length; i++) {
          var publisherId = results[i].get("publisher").objectId;
          var content = results[i].get("content");
          var acttype = results[i].get("acttype");        
         var acttypeName=results[i].get("acttypeName");
          var createdAt = results[i].createdAt;
          var _url
          var actpic = results[i].get("actpic");
          if (actpic) {
            _url = results[i].get("actpic")._url;
          } else {
            _url = "http://bmob-cdn-16093.b0.upaiyun.com/2018/01/08/e1ae06cb4083a50280ec6250a2af1abe.png";
          }
          var publisherName = results[i].get("publisher").nickname;
          var publisherPic = results[i].get("publisher").userPic;
          var contactValue=results[i].get("contactValue");
          var contactWay=results[i].get("contactWay");
          var jsonA;
          jsonA = {
            "content": content || '',
            "acttype": acttype || '',
            "acttypeName": acttypeName || '',
            "publisherId": publisherId || '',
            "pubtime": createdAt || '',
            "attachment": _url || '',
            "contactValue": contactValue || '',
            "contactWay": contactWay || '',
          }
          molist.push(jsonA);
          smoodList = molist;
          var keylist = new Array(); //钥匙
          var booklist = new Array(); //书
          var cardlist = new Array();//卡等证件
          var schoolbaglist = new Array();//书包
          var watchlist = new Array();//钱包
          var cuplist = new Array();//水杯
          var clotheslist = new Array();//衣服
          var phonelist = new Array();//手机
          var glasseslist = new Array();//眼镜
          var headsetlist = new Array();//耳机
          var otherlist = new Array();//其他
          for (var i in molist){
            if (molist[i].acttype == 1) keylist.push(molist[i]);
            else if (molist[i].acttype == 2) booklist.push(molist[i]);
            else if (molist[i].acttype == 3) cardlist.push(molist[i]);
            else if (molist[i].acttype == 4) schoolbaglist.push(molist[i]);
            else if (molist[i].acttype == 5) watchlist.push(molist[i]);
            else if (molist[i].acttype == 6) cuplist.push(molist[i]);
            else if (molist[i].acttype == 7) clotheslist.push(molist[i]);
            else if (molist[i].acttype == 8) phonelist.push(molist[i]);
            else if (molist[i].acttype == 9) glasseslist.push(molist[i]);
            else if (molist[i].acttype == 10) headsetlist.push(molist[i]);
            else if (molist[i].acttype == 11) otherlist.push(molist[i]);
          }
          that.setData({
            keylist: keylist,
            booklist: booklist,
            cardlist: cardlist,
            schoolbaglist: schoolbaglist,
            watchlist: watchlist,
            cuplist: cuplist,
            clotheslist: clotheslist,
            phonelist: phonelist,
            glasseslist: glasseslist,
            headsetlist: headsetlist,
            otherList:otherlist,
          })
        }
      },
      error: function (error) {
        //common.dataLoading(error, "loading");
        console.log(error)
      }
    });
  },
  //js 实现模糊匹配查询
  findEach: function (e) {
    var that = this
    WxSearch.wxSearchAddHisKey(that);
    var strFind = that.data.wxSearchData.value;
    console.log("strFind=" + strFind);
    if (strFind == null || strFind == "") {
      wx.showToast({
        title: '输入为空',
        icon: 'loading',
      })
    }
    if (strFind != "") {
      WxSearch.updateHotMindKeys(that, strFind); //更新热门搜索和搜索记忆提示
      var nPos;
      var resultPost = [];
      for (var i in smoodList) {
        var sTxt = smoodList[i].acttypeName || ''; //活动的标题
        nPos = sTxt.indexOf(strFind); 
        if (nPos >= 0) {//如果输入的关键字在该活动标题中出现过,则匹配该活动
          resultPost.push(smoodList[i]); //将该活动加入到搜索到的活动列表中
        }
      }
      that.setData({
        moodList: resultPost
      })
    }
  },

  // 点击活动进入活动详情页面
  click_activity: function (e) {
    console.log(getCurrentPages()) 
    if (!this.buttonClicked) {
      util.buttonClicked(this);
      let actid = e.currentTarget.dataset.actid;
      let pubid = e.currentTarget.dataset.pubid;
      let user_key = wx.getStorageSync('user_key');
      wx.navigateTo ({
        url: '/pages/detail/detail?actid=' + actid + "&pubid=" + pubid
      });
    }
  },
  //--------------------------------------------------------

  wxSearchInput: function (e) {
    var that = this
    WxSearch.wxSearchInput(e, that);
  },
  wxSerchFocus: function (e) {
    var that = this
    WxSearch.wxSearchFocus(e, that);
  },
  wxSearchBlur: function (e) {
    var that = this
    WxSearch.wxSearchBlur(e, that);
  },
  wxSearchKeyTap: function (e) {
    var that = this
    WxSearch.wxSearchKeyTap(e, that);
  },
  wxSearchDeleteKey: function (e) {
    var that = this
    WxSearch.wxSearchDeleteKey(e, that);
  },
  wxSearchDeleteAll: function (e) {
    var that = this;
    WxSearch.wxSearchDeleteAll(that);
  },
  wxSearchTap: function (e) {
    var that = this
    WxSearch.wxSearchHiddenPancel(that);
  }
})

//根据活动类型获取活动类型名称
function getTypeName(acttype) {
  var acttypeName = "";
  if (acttype == 1) acttypeName = "钥匙";
  else if (acttype == 2) acttypeName = "书";
  else if (acttype == 3) acttypeName = "卡等证件";
  else if (acttype == 4) acttypeName = "书包";
  else if (acttype == 5) acttypeName = "钱包";
  else if (acttype == 6) acttypeName = "水杯";
  else if (acttype == 7) acttypeName = "衣服";
  else if (acttype == 8) acttypeName = "手机";
  else if (acttype == 9) acttypeName = "眼镜";
  else if (acttype == 10) acttypeName = "耳机";
  else if (acttype == 11) acttypeName = "其他";
  return acttypeName;
}