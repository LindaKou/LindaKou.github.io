//classroom.js
Page({
  data: {
   indecatorDots:true,
   autoplay:true,
   interval:5000,
   duration:1000,
   imgUrls:[
     '../images/p4.jpg', '../images/p5.jpg', '../images/p6.jpg'
   ],
   flag:'1',
   flag1: '1',
   way:'请选择教学楼',
   way1:'请选择日期',
   array:['第一周','第二周','第三周','第四周','第五周','第六周','第七周','第八周','第九周','第十周','第十一周','第十二周','第十三周','第十四周','第十五周','第十六周','第十七周','第十八周'],
   objectArray:[
     {
     id:0,
     name:'第一周'
     },
     {
       id: 1,
       name: '第二周'
     },
     {
       id: 2,
       name: '第三周'
     },
     {
       id: 3,
       name: '第四周'
     },
     {
       id: 4,
       name: '第五周'
     },
     {
       id: 5,
       name: '第六周'
     },
     {
       id: 6,
       name: '第七周'
     },
     {
       id: 7,
       name: '第八周'
     },
     {
       id: 8,
       name: '第九周'
     },
     {
       id: 9,
       name: '第十周'
     },
     {
       id: 10,
       name: '第十一周'
     },
     {
       id: 11,
       name: '第十二周'
     },
     {
       id: 12,
       name: '第十三周'
     },
     {
       id: 13,
       name: '第十四周'
     },
     {
       id: 14,
       name: '第十五周'
     },
     {
       id: 15,
       name: '第十六周'
     },
     {
       id:16,
       name:'第十七周'
     },
     {
       id:17,
       name:'第十八周'
     }
   ],
   index:0,
  },
  onLoad(options) {
    //页面初始化，options为页面跳转所带来的参数
  },
  bindPickerChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  selectWay:function(){
    this.setData({flag:'0'});
  },
  selectWay1: function () {
    this.setData({ flag1: '0' });
  },
  radioChange: function (e) {
    var way = e.detail.value;
    console.log(way);
    if(way!="请选择教学楼")
      {
        this.setData({disabled:false,btnstate:"primary",flag:'1',way:way});
      }
    else
    {
      this.setData({ disabled: true, btnstate: "default"});
    }
  },
  radioChange1: function (e) {
    var way1 = e.detail.value;
    console.log(way1);
    if (way1!= "请选择日期") {
      this.setData({ disabled: false, btnstate: "primary", flag1: '1', way1: way1 });
    }
    else {
      this.setData({ disabled: true, btnstate: "default" });
    }
  },
  formSubmit:function (e) {
    
   // console.log("这是数据得测试" + this.data.array[this.data.index]);
    console.log(e);
    var jxl = this.data.way;
    var rq = this.data.way1;
    var ind = this.data.array[this.data.index];
    if (jxl =="请选择教学楼"||rq=="请选择日期")
    {
      wx.showModal({
        title: '提示',
        content: '未选择教学楼或日期',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }
        }
      })
    }
    else{
    wx.navigateTo({
      url: '../class/class?ind=' + ind+"&jxl="+jxl+"&rq="+rq,
    })
    }
  }
})