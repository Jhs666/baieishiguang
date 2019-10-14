var app = getApp();
Page({
  data: {
    carts: [{
        id: 1,
        title: "新鲜芹菜 半斤1",
        num: 0,
        price: 1,
        selected: false
      },
      {
        id: 2,
        title: "新鲜芹菜 半斤2",
        num: 0,
        price: 1,
        selected: false
      },
      {
        id: 3,
        title: "新鲜芹菜 半斤3",
        num: 0,
        price: 1,
        selected: false
      },
      {
        id: 4,
        title: "新鲜芹菜 半斤4",
        num: 0,
        price: 1,
        selected: false
      },
      {
        id: 5,
        title: "新鲜芹菜 半斤5",
        num: 0,
        price: 1,
        selected: false
      },
    ],
    text: "nihao",
    selectAllStatus: false,
    totalPrice: 0
  },
  sub(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 0) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    })
    this.getTotalPrice()
  },
  add(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    })
    this.getTotalPrice()
  },
  getTotalPrice(e) {
    let carts = this.data.carts;
    let sum = 0;
    for (let i = 0; i < carts.length; i++) {
      sum += carts[i].num * carts[i].price;
    }
    this.setData({
      totalPrice: sum.toFixed(2),
      carts: carts
    })
  },
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1); //splice(2,0)=>添加 splice(2，1)=>删除 splice(2,1,"Toll")=>将下标为2的值修改为Toll
    this.setData({
      carts: carts
    })
  },
  selectAll(e) { //设置selectAllStatus的状态，来进行判断选中与不选中之间的差别
    let carts = this.data.carts;
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    })
  }
})