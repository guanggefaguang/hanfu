//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    item: [{
        img: '../../image/1.jpg',
        name: '菠萝'
      },
      {
        img: '../../image/s3.jpg',
        name: '蔬菜'
      },
      {
        img: '../../image/s1.jpg',
        name: '香蕉'
      },
      {
        img: '../../image/s2.jpg',
        name: '苹果'
      },
    ],
    activyIndex: '',
    username:'',
  },
  onLoad: function() {

  },
  Link: function(e) {
    console.log(e)
    this.setData({
      activyIndex: e.currentTarget.dataset.index
    })
    console.log(e.currentTarget.dataset.index)
  },
  href:function(e){
    console.log(this.username)
  },
  int(e){
    console.log(e)
    let changed = {};
    let prop = e.currentTarget.dataset.prop
    changed[prop] = e.detail.value;
    console.log(changed)
    // this.setData(changed)

  }
})