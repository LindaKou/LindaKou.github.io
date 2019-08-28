var common = require('../template/getCode.js');
var Bmob = require("../../utils/bmob.js");
var util = require('../../utils/util.js');
import { $wuxButton } from '../../components/wux'
var app = getApp();
var that;
var optionId; //活动的Id
var publisherId; //信息发布者的Id

var eventMoreId; //当前活动的活动扩展表Id
var commentlist;
let commentText;//评论输入框内容
Page({
  data: {
    accounts: ["微信号", "QQ号", "手机号"],
    accountIndex: 0,
    actStatusArray: ["未找到", "已找到"],
    statusIndex: 0,
    contactValue: "",
    showTopTips: false, //是否显示提示
    TopTips: '', //提示的内容

    //----------------
    tag_select: 0,
    limit: 5,
    showImage: false,
    loading: false,
    isdisabled: false,
    commentLoading: false,
    recommentLoading: false,
    commentList: [],
    status: 0,//tab切换按钮
    showCommentDialog: false,//评论输入框显示
    commentInputHolder: "请输入评论内容",//评论输入框提示
  },


  
  //打开发布者联系方式弹窗
  showmainLink: function () {
    this.setData({
      linkmainHe: true
    })
  },
  //关闭发布者联系方式弹窗
  closemainLink: function () {
    this.setData({
      linkmainHe: false
    })
  },


  //复制联系方式
  copyLink: function (e) {
    var value = e.target.dataset.value;
    wx.setClipboardData({
      data: value,
      success() {
        common.dataLoading("复制成功", "success");
        console.log('复制成功')
      }
    })
  },

  //切换tab操作
  changePage: function (e) {
    let id = e.target.id;
    this.setData({
      status: id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    that = this;
    var openid = wx.getStorageSync("user_openid");
    optionId = options.actid;
    publisherId = options.pubid;
    var buttons2 = new Array()
    wx.getStorage({
      key: 'user_id',
      success: function (ress) {
        if (publisherId == ress.data) {
          that.setData({
            favo: 3, //表示无法收藏
            join: 3, //已经无法加入
            isMe: true,
          })
          console.log("哈哈哈哈哈")
        }
      }
    })

    console.log('this is options.actid=' + options.actid);
    console.log('this is options.pubid=' + options.pubid);
  },
  /**
    * 生命周期函数--监听页面初次渲染完成
    */
  onReady: function () {
    wx.hideToast()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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
  showCommentDialog: function (e) {//显示我要评论弹窗
    this.setData({
      showCommentDialog: true,
      commentInputHolder: typeof e == 'string' ? e : "请输入评论内容",
    })
  },
  hideCommentDialog: function () {//隐藏我要评论弹窗
    this.setData({
      showCommentDialog: false,
      isToResponse: false
    });
  },

  commentText: function (e) {//评论内容赋值
    commentText = e.detail.value
  },

  //点击评论itam
  commentTap: function (e) {
    let that = this;
    let item = e.currentTarget.dataset.item;
    let commentActions;
    if (item.uid == wx.getStorageSync('user_id')) {//自己的评论，可以删除
      commentActions = ["删除"]
    } else {
      commentActions = ["回复"]
    }
    wx.showActionSheet({
      itemList: commentActions,
      success: function (res) {
        let button = commentActions[res.tapIndex];
        if (button == "回复") {
          that.setData({
            pid: item.uid,
            isToResponse: true,
            responseName: item.username
          })

          that.showCommentDialog("回复" + item.username + "：");
        } else if (button == "删除") {
          //删除评论
          var Comments = Bmob.Object.extend("Comments");
          var comment = new Bmob.Query(Comments);
          comment.get(item.id, {
            success: function (result) {
              result.destroy({
                success: function (res) {
                  common.dataLoading("删除成功", "success");
                  console.log("删除成功");

                },
                error: function (res) {
                  console.log("删除评论错误");
                }
              })
            }
          })
          //活动表中评论数量-1
          var Events = Bmob.Object.extend("Events");
          var queryEvents = new Bmob.Query(Events);
          queryEvents.get(optionId, {
            success: function (object) {
              object.set("commentnum", object.get("commentnum") - 1);
              object.save();
            }
          })
          that.onShow();
        }
      }
    });
  },

  //评论活动
  publishComment: function (e) {
    let that = this;
    var isReply = false;
    if (!commentText || commentText.length == 0) {
      this.setData({
        showTopTips: true,
        TopTips: '请输入评论内容'
      });
      setTimeout(function () {
        that.setData({
          showTopTips: false
        });
      }, 3000);
    } else {
      that.setData({
        isdisabled: true,
        commentLoading: true
      })
      wx.getStorage({
        key: 'user_id',
        success: function (ress) {
          that.setData({
            commentLoading: false
          })
          var queryUser = new Bmob.Query(Bmob.User);
          //查询单条数据,第一个参数是这条数据的objectId的值
          queryUser.get(ress.data, {
            success: function (userObject) {
              //查询成功,调用get 方法获取对应属性的值
              var Comments = Bmob.Object.extend("Comments");
              var comment = new Comments();
              var Events = Bmob.Object.extend("Events");
              var event = new Events();
              event.id = optionId;
              var me = new Bmob.User();
              me.id = ress.data;
              comment.set("publisher", me);
              comment.set("event", event);
              comment.set("content", commentText);
              console.log("commentText=" + commentText);
              if (that.data.isToResponse) { //如果是回复的评论
                isReply = true;
                var olderName = that.data.responseName;
                var Comments1 = Bmob.Object.extend("Comments");
                var comment1 = new Comments1();
                comment1.id = that.data.pid; //评论的评论Id
                comment.set("olderUserName", olderName);
                comment.set("olderComment", comment1);
              }
              //添加数据,第一个路口参数是null
              comment.save(null, {
                success: function (res) {
                  var queryEvents = new Bmob.Query(Events);
                  //查询单条数据,敌一个参数就是这条数据的objectId
                  queryEvents.get(optionId, {
                    success: function (object) {
                                    
                      object.set("commentnum", object.get("commentnum") + 1);
                      object.save();

                      var isme = new Bmob.User();
                      isme.id = ress.data;
                      var value = wx.getStorageSync("my_avatar")
                      var my_username = wx.getStorageSync("my_username")

                      var Plyre = Bmob.Object.extend("Plyre");
                      var plyre = new Plyre();
                      console.log("isReply=" + isReply);
                      if (isReply) {//如果是回复评论，则消息通知行为存4
                        plyre.set("behavior", 4); //消息通知方式
                        plyre.set("noticetype", "回复");
                      } else {//如果不是回复评论，则是评论活动，消息通知行为存3
                        plyre.set("behavior", 3); //消息通知方式
                        plyre.set("noticetype", "评论");
                      }
                      plyre.set("bigtype", 1)//动态大类,消息类
                      plyre.set("avatar", value);
                      plyre.set("username", my_username);
                      plyre.set("uid", isme);
                      plyre.set("wid", optionId);
                      plyre.set("fid", publisherId);
                      plyre.set("is_read", 0); //是否已读,0代表没有,1代表读了
                      //添加数据
                      plyre.save(null, {
                        success: function (result) {
                          //添加成功
                          console.log("isReply3=" + isReply);
                          if (isReply) {
                            common.dataLoading("回复成功", "success");
                            console.log("回复成功");
                          } else {
                            common.dataLoading("评论成功", "success");
                            console.log("评论成功");
                          }
                        },
                        error: function (result, error) {
                          console.log("评论失败");
                        }
                      });
                      that.setData({ commentText: '' })
                      that.hideCommentDialog();
                      that.onShow();
                    },
                    error: function (object, error) {
                      //查询失败
                      console.log(error);
                    }
                  });
                  that.setData({
                    publishContent: "",
                    isToResponse: false,
                    responeContent: "",
                    isdisabled: false,
                    commentLoading: false
                  })
                },
                error: function (gameScore, error) {
                  common.dataLoading(error, "loading");
                  that.setData({
                    publishContent: "",
                    isToResponse: false,
                    responeContent: "",
                    isdisabled: false,
                    commentLoading: false
                  })
                }
              });
            },
            error: function (object, error) {
              console.log(error);
            }
          });
        },
      })
    }
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 1000);
  },

  bindKeyInput: function (e) {
    this.setData({
      publishContent: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var myInterval = setInterval(getReturn, 500);//半秒定时查询
    function getReturn() {
      that.setData({
        loading: false
      });
      wx.getStorage({
        key: 'user_id',
        success: function (ress) {
          if (ress.data) {
            clearInterval(myInterval); //清除定时器

            //查询活动信息
            var Diary = Bmob.Object.extend("Events");
            var query = new Bmob.Query(Diary);
            query.equalTo("objectId", optionId);
            query.include("publisher");
            query.find({
              success: function (result) {

                var content = result[0].get("content");
                var publisher = result[0].get("publisher");
                var acttype = result[0].get("acttype");
                var acttypeName = getTypeName(acttype);


                var createdAt = result[0].createdAt;

          
                var commentnum=result[0].get("commentnum");
                var publisherName = publisher.nickname;
                var objectIds = publisher.id;
                var publisherPic;
                var url;
                if (publisher.userPic) {
                  publisherPic = publisher.userPic;
                 }
                else {
                 publisherPic = "/static/images/icon/user_defaulthead@2x.png";
                  }
                if (result[0].get("actpic")) {
                  url = result[0].get("actpic")._url;
                }
                else {
                  url = "http://bmob-cdn-16093.b0.upaiyun.com/2018/01/08/e1ae06cb4083a50280ec6250a2af1abe.png";
                }
                that.setData({
                  listContent: content,
                  publishTime: createdAt,
                  listPic: url,
                  acttype: acttype,
                  acttypeName: acttypeName,
                   publisherPic: publisherPic,
                   publisherName: publisherName,
                  objectIds: objectIds,
                  loading: true,
                  commentnum:commentnum,
                  
                })
                that.commentQuery(result[0]);

                that.eventMore(result[0]);
              },
              error: function (error) {
                that.setData({
                  loading: true
                })
                console.log(error);
              }
            })
          }
        },
      })
    }
  },
  eventMore: function (event) {
    console.log("hahahahha")
    var Diary = Bmob.Object.extend("EventMore");
    var query = new Bmob.Query(Diary);
    query.equalTo("event", event);
    query.find({
      success: function (result) {
        var id = result[0].id;
        eventMoreId = id;
        var Statusname = result[0].get("Statusname");
        var actstatus = result[0].get("Status");
       
       
        that.setData({
          eventMoreId: id,
          statusname: Statusname,
          actstatus: actstatus,
          statusIndex: actstatus,
      
        })
      }
    })
  },
  //查询评论
  commentQuery: function (event) {
    var self = this;
    commentlist = new Array();
    var Comments = Bmob.Object.extend("Comments");
    var queryComment = new Bmob.Query(Comments);
    queryComment.equalTo("event", event);
    queryComment.limit(self.data.comPage);
    queryComment.skip(self.data.comPage * self.data.comCurPage);
    queryComment.descending("createAt");
    queryComment.include("publisher");
    queryComment.find({
    success: function (result) {
        for (var i = 0; i < result.length; i++) {
          var id = result[i].id;
          var pid = result[i].get("olderComment"); //被评论的评论
          var uid = result[i].get("publisher").objectId; //评论人的id
          var content = result[i].get("content");
          var created_at = result[i].createdAt;
          
          var olderUserName;
          var userPic = result[i].get("publisher").userPic;
          var nickname = result[i].get("publisher").nickname;
          if (pid) {
            pid = pid.id;
            olderUserName = result[i].get("olderUserName");
          }
          else {
            pid = 0;
            olderUserName = "";
          }
          var jsonA;
          jsonA = {
            "id": id || '',
            "content": content || '',
            "pid": pid || '',
            "uid": uid || '',
            "created_at": created_at || '',
            "pusername": nickname || '',
            "username": nickname || '',
            "avatar": userPic || '',
            
          }
          commentlist.push(jsonA)
          that.setData({
            commentList: commentlist,
            loading: true
          })
          console.log("真敢咋个回答是滴哦啊时间的");
        }
      },
      error: function (error) {
        common.dataLoadin(error, "loading");
        console.log(error);
      }
    });
  },

  bindKeyInput: function (e) {
    this.setData({
      publishContent: e.detail.value
    })
  },
  //查看发起大图
  seeActBig: function (e) {
    wx.previewImage({
      current: that.data.listPic, // 当前显示图片的http链接
      urls: [that.data.listPic] // 需要预览的图片http链接列表
    })
  },
  //查看发起大图
  seeqrCodeBig: function (e) {
    wx.previewImage({
      current: that.data.qrcode, // 当前显示图片的http链接
      urls: [that.data.qrcode] // 需要预览的图片http链接列表
    })
  },



  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享 
   */
  onShareAppMessage: function () {
    console.log(this.data.listTitle);
    return {
      title: this.data.listTitle,
      path: '/pages/detail/detail?actid=' + optionId + "&pubid" + publisherId,
      imageUrl: this.data.istPic,
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: '转发成功',
          icon: 'success'
        });
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '转发失败',
          icon: 'fail'
        });
      }
    }
  },



  //关闭弹出联系表单
  closeJoin: function () {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },

  //关闭修改联系信息弹窗
  closeUpdJoin: function () {
    this.setData({
      showUpdDialog: false
    });
  },

  //关闭弹出改变状态表单
  closeChange: function () {
    this.setData({
      showStuDialog: false
    });
  },



  //改变活动状态操作
  stuSubmit: function (event) {
    var statusIndex = that.data.statusIndex;
    if (statusIndex == 0) {
      var Statusname = "未找到";
    } else if (statusIndex == 1) {
      var Statusname = "已找到";
    }
    var Diary = Bmob.Object.extend("EventMore");
    var query = new Bmob.Query(Diary);

    query.get(eventMoreId, {
      success: function (result) {
        result.set("Status", Number(statusIndex));
        result.set("Statusname", Statusname);
        result.save();
        if (Statusname == "已找到") { //如果信息状态为已找到，该信息将撤离首页
          var Events = Bmob.Object.extend("Events");
          var evnet = new Bmob.Query(Events);
          evnet.get(optionId, {
            success: function (result) {

              result.save();
              console.log("撤离成功");
            },
            error: function (object, error) {
              console.log("撤离失败" + error);
            }
          });
        }
        that.setData({
          showStuDialog: false
        })
        console.log("改变状态成功");
        common.dataLoading("改变成功", "success");
      },
      error: function (object, error) {
        console.log("改变状态失败" + error);
      }
    });
    that.onShow();
  },








})
//根据联系方式确定序号
function getContactIndex(name) {
  var accountIndex = 0;
  if (name == "微信号") accountIndex = 0;
  else if (name == "QQ号") accountIndex = 1;
  else if (name == "手机号") accountIndex = 2;
  return accountIndex;
}

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