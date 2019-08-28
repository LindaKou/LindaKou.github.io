var Bmob = require('../../utils/bmob.js');
var common = require('../../utils/common.js');
var util = require('../../utils/util.js');
var app  =  getApp() 
Page({
  data:{
    jxl:'',
    rq:'',
    index:'',
    imagalist:[]
  },
  onLoad:function(e){
    var jxl = e.jxl;//教学楼
    var rq = e.rq;//日期
    var ind = e.ind;
    this.setData({ 
      index: ind,
      jxl:jxl,
      rq:rq
    });
    var page=this;
    this.previewImage();
  },
  
  previewImage:function(e)
   {
       var jxl = this.data.jxl;
       var index=this.data.index;
       var rq=this.data.rq;
        if(jxl=="基础教学楼")
        {
          if(index=="第十七周")
          {
          if(rq=="星期一")
          {
         this.setData({
           imagalist: [
             'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/6293b65140c75b418041e0b42385142c.PNG',
             'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/bacee650403f275d80dc248121ef95d4.PNG',
             'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/0aa3ec7740dbb5e18010f2937700a695.PNG',
             'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/993b1c80409ec3c5808fa905d5bdd889.PNG',
             'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/f9772f8740df6314801a6c528c4dc6c4.PNG',
             'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/c175bb8b40dc4645800028dfcbef4dcb.PNG'
           ] 
         })
         wx.previewImage({
          urls: this.data.imagalist 
         })
         }
         else if(rq=="星期二")
         {
            this.setData({
              imagalist: [
               'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/472bcc5a40871d6180d759a08d0bc3c7.PNG',
               'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/8db56b824039aab380934dc320ca3328.PNG',
               'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/d14997b1409f69c880fa83ee7d5fb179.PNG',
               'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/37d44df240e8bf44808aeb48a6219ae0.PNG',
               'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/11f5d10d40b7b8c08021aa7558ea72d9.PNG',
               'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/78ea4ac3409e365680135f326e86c398.PNG',
              ]
            })
            wx.previewImage({
              urls: this.data.imagalist
            })
          }
          else if (rq == "星期三") {
            this.setData({
              imagalist: [
               'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/089fc84e40847476805422ff108d9fd5.PNG',
               'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/07709b0840726a6880b54c8170e241f8.PNG',
               'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/47d65faa40961678808d098890e9adc1.PNG',
               'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/b2e79fdc406fb51f8007884268d9d35d.PNG',
               'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/7cb3b14f40fc3763809d025e247fe9df.PNG',
               'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/f9e59af3402c121780de83000a230b1c.PNG'
              ]
            })
            wx.previewImage({
              urls: this.data.imagalist
            })
          }
          else if (rq == "星期四") {
            this.setData({
              imagalist: [
                'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/505ef8f5402dacd9806c4521194396e7.PNG',
                'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/474b653840cc563180084f445785138a.PNG',
                'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/b7ab2ce4407cf7eb8061e020966f7c86.PNG',
                'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/5d0bd143401f8fce806d439df58fe583.PNG',
                'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/acc556a8400bfbaa802976c38bc25c77.PNG',
                'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/99857ed1409d07cf800994448b3bb053.PNG',
              ]
            })
            wx.previewImage({
              urls: this.data.imagalist
            })
          }
          else if (rq == "星期五") {
            this.setData({
              imagalist: [
                'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/9e68a8d740c0b0ce80383e08a512c178.PNG',
                'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/8f4a6cd140ef83d980cbf6b9d7a724cf.PNG',
                'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/0cd5117d40fedf0c805e7a93e348c868.PNG',
                'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/645d961a4038a19c80a9aa97ab155e9c.PNG',
                'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/fa2b984f40cadab88021b001d3362f8a.PNG',
                'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/480d96a44047988f808fe1d63160d691.PNG'
              ]
            })
            wx.previewImage({
              urls: this.data.imagalist
            })
          }
         }
          else {
            if (rq == "星期一") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/6293b65140c75b418041e0b42385142c.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/bacee650403f275d80dc248121ef95d4.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/0aa3ec7740dbb5e18010f2937700a695.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/993b1c80409ec3c5808fa905d5bdd889.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/f9772f8740df6314801a6c528c4dc6c4.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/c175bb8b40dc4645800028dfcbef4dcb.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期二") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/472bcc5a40871d6180d759a08d0bc3c7.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/8db56b824039aab380934dc320ca3328.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/d14997b1409f69c880fa83ee7d5fb179.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/37d44df240e8bf44808aeb48a6219ae0.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/11f5d10d40b7b8c08021aa7558ea72d9.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/78ea4ac3409e365680135f326e86c398.PNG',
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期三") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/089fc84e40847476805422ff108d9fd5.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/07709b0840726a6880b54c8170e241f8.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/47d65faa40961678808d098890e9adc1.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/b2e79fdc406fb51f8007884268d9d35d.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/7cb3b14f40fc3763809d025e247fe9df.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/f9e59af3402c121780de83000a230b1c.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期四") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/505ef8f5402dacd9806c4521194396e7.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/474b653840cc563180084f445785138a.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/b7ab2ce4407cf7eb8061e020966f7c86.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/5d0bd143401f8fce806d439df58fe583.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/acc556a8400bfbaa802976c38bc25c77.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/99857ed1409d07cf800994448b3bb053.PNG',
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期五") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/9e68a8d740c0b0ce80383e08a512c178.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/8f4a6cd140ef83d980cbf6b9d7a724cf.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/0cd5117d40fedf0c805e7a93e348c868.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/645d961a4038a19c80a9aa97ab155e9c.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/fa2b984f40cadab88021b001d3362f8a.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/05/480d96a44047988f808fe1d63160d691.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
          }
         }
         else if(jxl=="第二教学楼")
         {
          if (index == "第十七周") {
            if (rq == "星期一") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/89e17170402b3f0780c2f96311488796.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/de93b3644073c2b580e93c321a3e3bb2.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/5d348bf140bfaf01800781971d6c078f.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/36ee840540766cb88084d9b30bb09218.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/b1d21e524071275780baf0d4913d587d.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期二") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/b2036ab140bb52de80f4ea801d01567c.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/e0761c1f405186bc80d4cf74bd714fe4.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/e06630ef40fcaabc808f80aa1a86a28a.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/37982a2f40a0ca5c80950b8ad4c0237c.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/ced8ac6940dc330c8057d82075744699.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期三") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/99a71d6340f896ff804ba64a58ca8aee.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/b66411134052222680b832038482f433.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/5072a134405f107080386a36e2ad7c8d.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/803d7a8440567e088019810bacea713e.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/464f6f1840d50033804a947572b545d6.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期四") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/04c5672c4059c48c80e66c673f933964.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/09a22a14403a99be800defbcf4e93e64.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/b0bb65b3406b4d6d80cc9bf17862febf.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/60fd4b3f40dd8c0b809dfdf13f6b0ff4.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/65f287134056a6ac8098c74bc3559b74.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期五") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/cc7d3f9440dc3ffd8090796de5442d2a.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/2165ea2c40b9043180698f90dab36da7.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/a223fca940c639c5805a4c8bc4a5d634.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/24c4b49640b4ae82804c5ed4e12898cf.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/4490e9c24008196c800419a7e4a0d20d.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
          }
          else {
            if (rq == "星期一") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/89e17170402b3f0780c2f96311488796.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/de93b3644073c2b580e93c321a3e3bb2.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/5d348bf140bfaf01800781971d6c078f.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/36ee840540766cb88084d9b30bb09218.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/b1d21e524071275780baf0d4913d587d.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期二") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/b2036ab140bb52de80f4ea801d01567c.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/e0761c1f405186bc80d4cf74bd714fe4.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/e06630ef40fcaabc808f80aa1a86a28a.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/37982a2f40a0ca5c80950b8ad4c0237c.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/ced8ac6940dc330c8057d82075744699.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期三") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/99a71d6340f896ff804ba64a58ca8aee.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/b66411134052222680b832038482f433.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/5072a134405f107080386a36e2ad7c8d.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/803d7a8440567e088019810bacea713e.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/464f6f1840d50033804a947572b545d6.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期四") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/04c5672c4059c48c80e66c673f933964.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/09a22a14403a99be800defbcf4e93e64.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/b0bb65b3406b4d6d80cc9bf17862febf.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/60fd4b3f40dd8c0b809dfdf13f6b0ff4.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/65f287134056a6ac8098c74bc3559b74.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期五") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/cc7d3f9440dc3ffd8090796de5442d2a.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/2165ea2c40b9043180698f90dab36da7.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/a223fca940c639c5805a4c8bc4a5d634.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/24c4b49640b4ae82804c5ed4e12898cf.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/4490e9c24008196c800419a7e4a0d20d.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            }
         }
        else if(jxl=="土木楼")
        {
          if (index == "第十七周") {
            if (rq == "星期一") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/535c9c124013d3df80b717d9da7e1274.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/1bfc5c3f40338c058008248992c17a64.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/5bfce10540a69bb0804389af8804a47e.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期二") {
              this.setData({
                imagalist: [
                 'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/715f676f40efd2498087fefc320d81d2.PNG',
                 'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/38678d0b4011812480d77c97a9fd5b49.PNG',
                 'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/b9fc253b40369c12809ced5c48425b51.PNG',
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期三") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/ce723519408e40f5807c14f282609532.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/c403b170401e219380715295a658fb82.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/5bf0e182402e12d380cb7a69aa0b9646.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期四") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/a5121439407ac5558079fb646a627fb2.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/d0a1c558404dd837804a912a191d0091.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/d7f457894068196b80102f033e6830d5.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期五") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/460975dc406823ad809c84dd1339d89d.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/effeb963407b4b5780fc57e499689a26.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/92e64b71402f9381809a4e5edb8e8df2.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
          }
          else {
            if (rq == "星期一") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/535c9c124013d3df80b717d9da7e1274.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/1bfc5c3f40338c058008248992c17a64.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/5bfce10540a69bb0804389af8804a47e.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期二") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/715f676f40efd2498087fefc320d81d2.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/38678d0b4011812480d77c97a9fd5b49.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/b9fc253b40369c12809ced5c48425b51.PNG',
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期三") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/ce723519408e40f5807c14f282609532.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/c403b170401e219380715295a658fb82.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/5bf0e182402e12d380cb7a69aa0b9646.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期四") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/a5121439407ac5558079fb646a627fb2.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/d0a1c558404dd837804a912a191d0091.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/d7f457894068196b80102f033e6830d5.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期五") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/460975dc406823ad809c84dd1339d89d.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/effeb963407b4b5780fc57e499689a26.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/92e64b71402f9381809a4e5edb8e8df2.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
          }
        }
        else if (jxl == "第三教学楼") {
          if (index == "第十七周") {
            if (rq == "星期一") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/f86eda7740a0ea82806d28e950b35d04.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/0a7f5577401f99f0802094bd07f2609a.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期二") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/7db1414340a58e2780682fb87aa61242.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/a1b6ce7a404fb88780944010e19caae7.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期三") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/0c6b951e400d1807806a52dcb9e5415a.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/dea3b8434020d47b802a69c8ff5f2667.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期四") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/08665801408492ba8040c26ac4f7f91e.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/226fa16f40e72138808e99de2667c5e4.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期五") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/880310b4409538ec80987c171b1e1fc1.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/4a3e0a0d40eb1bb480fd2f580de538fb.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
          }
          else {
            if (rq == "星期一") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/f86eda7740a0ea82806d28e950b35d04.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/0a7f5577401f99f0802094bd07f2609a.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期二") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/7db1414340a58e2780682fb87aa61242.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/a1b6ce7a404fb88780944010e19caae7.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期三") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/0c6b951e400d1807806a52dcb9e5415a.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/dea3b8434020d47b802a69c8ff5f2667.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期四") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/08665801408492ba8040c26ac4f7f91e.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/226fa16f40e72138808e99de2667c5e4.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
            else if (rq == "星期五") {
              this.setData({
                imagalist: [
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/880310b4409538ec80987c171b1e1fc1.PNG',
                  'http://bmob-cdn-16093.b0.upaiyun.com/2018/01/06/4a3e0a0d40eb1bb480fd2f580de538fb.PNG'
                ]
              })
              wx.previewImage({
                urls: this.data.imagalist
              })
            }
          }
        }
        }
   })


   
  

  
