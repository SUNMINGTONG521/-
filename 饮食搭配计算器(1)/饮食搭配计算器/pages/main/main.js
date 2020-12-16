Page({
  data: {
    isPopping: false,
    animPlus: {},
    animCollect: {},
    animTranspond: {},
    animInput: {},
    animCloud:{},
    aninWrite:{},
  },
  //点击弹出
  plus: function () {
    if (this.data.isPopping) {
      //缩回动画
      this.popp();
      this.setData({
        isPopping: false
      })
    } else if (!this.data.isPopping) {
      //弹出动画
      this.takeback();
      this.setData({
        isPopping: true
      })
    }
  },
  input: function () {
    console.log("input")
  },
  transpond: function () {
    console.log("transpond")
  },
  collect: function () {
    console.log("collect")
  },
  cloud:function(){
    console.log("cloud")
  },
  dou:function(){
    wx.navigateTo({
      url: '../index/index',
    })
  },
  rou:function(){
    wx.navigateTo({
      url: '../rou/rou',
    })
  },
  gu:function(){
    wx.navigateTo({
      url: '../gu/gu',
    })
  },
  seafood:function(){
    wx.navigateTo({
      url: '../seafood/seafood',
    })
  },
vegetables:function(){
    wx.navigateTo({
      url: '../vegetables/vegetables',
    })
  },
  //弹出动画
  popp: function () {
    //plus顺时针旋转
    var animationPlus = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out'
    })
    var animationcollect = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out'
    })
    var animationTranspond = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out'
    })
    var animationInput = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out'
    })
    var animationCloud = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out'
    })
    var animationWrite = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out'
    })
    animationPlus.rotateZ(180).step();
    animationcollect.translate(-90, -100).rotateZ(180).opacity(1).step();
    animationTranspond.translate(-140, 0).rotateZ(180).opacity(1).step();
    animationInput.translate(-90, 100).rotateZ(180).opacity(1).step();
    animationCloud.translate(0, 135).rotateZ(180).opacity(1).step();
    animationWrite.translate(0, -135).rotateZ(180).opacity(1).step();
    this.setData({
      animPlus: animationPlus.export(),
      animCollect: animationcollect.export(),
      animTranspond: animationTranspond.export(),
      animInput: animationInput.export(),
      animCloud: animationCloud.export(),
      animWrite: animationWrite.export(),
    })
  },
  //收回动画
  takeback: function () {
    //plus逆时针旋转
    var animationPlus = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out'
    })
    var animationcollect = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out'
    })
    var animationTranspond = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out'
    })
    var animationInput = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out'
    })
    var animationCloud = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out'
    })
    var animationWrite = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-out'
    })
    animationPlus.rotateZ(0).step();
    animationcollect.translate(0, 0).rotateZ(0).opacity(0).step();
    animationTranspond.translate(0, 0).rotateZ(0).opacity(0).step();
    animationInput.translate(0, 0).rotateZ(0).opacity(0).step();
    animationCloud.translate(0, 0).rotateZ(0).opacity(0).step();
    animationWrite.translate(0, 0).rotateZ(0).opacity(0).step();
    this.setData({
      animPlus: animationPlus.export(),
      animCollect: animationcollect.export(),
      animTranspond: animationTranspond.export(),
      animInput: animationInput.export(),
      animCloud: animationCloud.export(),
      animWrite: animationWrite.export(),
    })
  },
  
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏
  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})
