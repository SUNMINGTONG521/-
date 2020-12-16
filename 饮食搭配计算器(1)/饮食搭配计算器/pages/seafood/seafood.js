Page({
  data: {
    carts:[],  //存放数据
    hasList:false,
    deleteData: '',//当页面上没有数据时显示的
    selectAllStatus:false,    //全选状态
    totalPrice: 0,  //总价格
    totaldanbai:0,
    totalCount: 0 ,   //总数量
    lastTapDiffTime: 0,
    ClickNum: 0,
    addBookrackSucceed: true,
    iconAddBookrack: "/pages/logs/心 (1).png",        
    iconAddBookrackSucceed: "/pages/logs/心.png", 
  },
  
  /**
   * 生命周期函数--监听页面显示
   */
 
  onShow: function () {   //页面显示时出现2秒的加载过程
    wx.showToast({
      title: 'loading',
      icon:'loading',
      
    });
    
    this.setData({
      hasList:true,
      carts: [
        { id: 1, title: "秋蛤蜊", selected: false, num: 100, price:89,zhifang: 0.7 ,danbai:15.6},
        { id: 2, title: "海虾", selected: false, num: 100,price:93,zhifang: 0.6,danbai:16.8 }, 
        { id: 3, title: "毛蛤蜊", selected: false, num: 100, price:62,zhifang: 1.0,danbai:15.0 },
        { id: 4, title: "贻贝", selected: false, num: 100,price:80, zhifang: 9.3,danbai:47.8 },
        { id: 5, title: "鲍鱼", selected: false, num: 100, price:84,zhifang: 5.6,danbai:54.1 },
        { id: 6, title: "螺", selected: false, num: 100, price:100,zhifang: 1.2,danbai:15.7 },
        { id: 7, title: "河蟹", slected: false, num: 100, price:103,zhifang: 2.6,danbai:17.5 },
      ]
    })
    //显示页面时就调用总价格和总数量
    this.getTotalPrice();
    this.totalCount();
    this.getTotaldanbai();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  
  /**
   * 当前商品选中事件
   */
  handleselectList(e){
    //获取当前的下标
    const index=e.currentTarget.dataset.index;
    //获取是否选中状态
    const selected = this.data.carts[index].selected;
    //默认全选的复选框是选中的
    this.data.selectAllStatus=true;
    //true --- false之间的切换
    this.data.carts[index].selected=!selected;
    //循环数组，判断选中还是未选中（selected）
    for (var i = this.data.carts.length - 1; i>=0;i--){
      if (!this.data.carts[i].selected){
        this.data.selectAllStatus=false;
        break;
      }
    }
    this.setData({ 
      //让最后的结果显示在页面上
      carts: this.data.carts,
      selectAllStatus: this.data.selectAllStatus
    });
    this.getTotalPrice();
    this.totalCount();
    this.getTotaldanbai();
  },
 
  /**
   * 数量增加事件
   */
  handleadd(e){
    const index = e.currentTarget.dataset.index;
    let num=this.data.carts[index].num;
    //注意此处的num不能用const申明（let声明的变量可以改变，值和类型都可以改变，没有限制。const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。）
    num=num+100;
    this.data.carts[index].num=num;
    this.setData({
      carts: this.data.carts
    });
    this.getTotalPrice();
    this.totalCount();
    this.getTotaldanbai();
  },
  /**
   * 数量减少事件
   */
  handleredus(e){
    let index=e.currentTarget.dataset.index;
    let num=this.data.carts[index].num;
    if (num <= 1) {
      return;
    }
    num=num-100;
    this.data.carts[index].num=num;
    this.setData({
      carts:this.data.carts
    });
    this.getTotalPrice();
    this.totalCount();
    this.totaldanbai();
  },
 
  /**
   * 总能量
   */
  getTotalPrice(){
    let total=0;
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++){
      if(carts[i].selected){
        total += carts[i].num * carts[i].price;
        total=total;/*合计!!!!!*/
      }
    }

    total=total/100;
    this.setData({
      carts:carts,  //渲染数据
      totalPrice:total.toFixed(2)
    })
  },
  getTotaldanbai(){
    let total=0;
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++){
      if(carts[i].selected){
        total += carts[i].num * carts[i].danbai;
        total=total;/*合计!!!!!*/
      }
    }
    total=total/100;
    this.setData({
      carts:carts,  //渲染数据
      totaldanbai:total.toFixed(2)
    })
  },
  totalCount(){
    let total=0;
    let carts = this.data.carts
    for (let i = 0; i < carts.length; i++){
      if(carts[i].selected){
        total += carts[i].num * carts[i].zhifang;
        total=total;/*合计!!!!!*/
      }
    }
    total=total/100;
    this.setData({
      carts:carts,  //渲染数据
      totalCount:total.toFixed(2)
    })
  },
  chooseAddBookrack: function() {
    let value = this.data.addBookrackSucceed;
    wx.showToast({
      title: '收藏成功',      //标题
      icon: "success",        //图标类型, 默认success
      duration: 1500                //提示框停留时间, 默认1500ms
    })
    this.setData({
      addBookrackSucceed: !value
    })
    console.log(value)
},
 
})
