<template>
  <div class='my-card-page'>
    <van-nav-bar title="我的卡券" left-arrow @click-left="onClickLeft" />
    <van-tabs
      v-model="tabActive"
      line-height="2"
      line-width="30%"
      color="#51A1E0"
      title-active-color="#51A1E0"
    >
      <van-tab v-for="(temp,index) in tabList" v-bind:key="index" v-bind:title="temp.name"></van-tab>
    </van-tabs>

    <div class='list-box'>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadData" direction='down' :offset="20">
        <div class='list-item' v-for='(temp,index) in list' :key='index' v-on:click="jump1">
          <div>
            <img src="" alt="" class='card-img'>
            <p v-bind:class="{'card-title':true,'text-color':tabActive==2}">{{temp.cardTitle}}</p>
            <p v-bind:class="{'card-money':true,'text-color':tabActive==2}">{{temp.cardMoney}}<span>元</span></p>
          </div>
          <div class='line-box'>
            <span></span>
            <p></p>
            <span></span>
          </div>
          <div>
            <span class='shop-name'>{{temp.shopName}}</span>
            <span class='valid-time'>有效期：{{temp.validTime}}</span>
            <span v-bind:class="{btn:true,'btn-text-color':tabActive!==0}"
              v-on:click.stop="jump2"
            >{{btnText}}</span>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<style scoped>
  .my-card-page{
    display:flex;flex-direction:column;height:100%;
  }
  .list-box{
      overflow-y:scroll;flex:1;padding:15px;background-color:#F5F5F5;
  }
  .list-item{
    background-color:#fff;border-radius:8px;padding:15px;border-radius:8px;margin-bottom:15px;
  }
  
  .list-item>div{display:flex;flex-direction:row;align-items:center;}
  .card-img{width:50px;height:50px;border-radius:50%;background-color:#aaa}
  .card-title{font-size:20px;color:#222;flex:1;text-align:left;padding:10px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;}
  .card-money{font-size:25px;color:#FE6E65;}
  .card-money>span{font-size:20px;}
  .line-box{position:relative;height:30px;}
  .line-box>span{
    background-color:#F5F5F5;width:25px;height:25px;border-radius:50%;position:absolute;
  }
  .line-box>span:first-child{left:-30px;}
  .line-box>span:last-child{right:-30px}
  .line-box>p{border-bottom:1px dotted #ccc;flex:1}

  .shop-name{font-size:14px;color:#aaa;}
  .valid-time{font-size:13px;color:#bbb;padding-left:10px;flex:1;text-align:left}
  .btn{font-size:15px;color:#FE857E;border:1px solid #FE857E;padding:5px 10px;border-radius:30px;}
  
  .text-color{color:#A2A2A2;}
  .btn-text-color{color:#A2A2A2;border-color:#A2A2A2;}
</style>

<script>
import Vue from "vue";
import router from './../router.js'
import { NavBar, Tab, Tabs, List,Cell } from "vant";
Vue.use(NavBar)
  .use(Tab)
  .use(Tabs)
  .use(List).use(Cell);

export default {
  data() {
    return {
      tabActive: 0,
      tabList: [{ name: "未使用" }, { name: "已使用" }, { name: "已过期" }],
      list: [
        {
          shopName:'绝味鸭脖',
          cardImg:'',
          validTime:'2019.3.25',
          cardMoney:5,
          cardTitle:'仅限新用户满30可用',
        },
        {
          shopName:'绝味鸭脖',
          cardImg:'',
          validTime:'2019.3.25',
          cardMoney:5,
          cardTitle:'仅限新用户满30可用',
        },
        {
          shopName:'绝味鸭脖',
          cardImg:'',
          validTime:'2019.3.25',
          cardMoney:5,
          cardTitle:'仅限新用户满30可用',
        },
        {
          shopName:'绝味鸭脖',
          cardImg:'',
          validTime:'2019.3.25',
          cardMoney:5,
          cardTitle:'仅限新用户满30可用',
        },
        {
          shopName:'绝味鸭脖',
          cardImg:'',
          validTime:'2019.3.25',
          cardMoney:5,
          cardTitle:'仅限新用户满30可用',
        },
      ],
      loading: false,
      finished: false
    };
  },
  computed:{
    btnText(){
      var status=this.tabActive;
      if(status===0){
        return '立即使用'
      }else if(status===1){
        return '已使用'
      }else{
        return '已过期'
      }
    }
  },
  methods: {
    onClickLeft() {
      window.console.log(123456789);
    },
    loadData(){//下拉加载列表数据
      window.console.log(123456789);
      var time=setTimeout(()=>{
        this.loading=true;
        this.finished=true;
        clearTimeout(time)
        time=null
      },2000)
    },
    jump1(){
      //window.console.log('jump1')
      router.push({path:'/card_verify'})
    },
    jump2(){
      //window.console.log('jump2')
      router.push({path:'/my_card_code'})
    }
  }
};
</script>

