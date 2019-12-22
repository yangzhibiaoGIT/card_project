<template>
  <div class="card-verify-page">
    <van-nav-bar
      title="卡券核销"
      left-arrow
      @click-left="onClickLeft"
      :border="false"
      style="background-color:#459CDF;"
    >
      <van-icon name="arrow-left" slot='left' size='25' color='#fff'/>
      <span slot='title' style='color:#fff'>卡券核销</span>
    </van-nav-bar>

    <div class="contair">
      <div class="content-box">
        <div>
          <img src alt class="card-img" />
          <p class="shop-name">绝味鸭脖</p>
          <span class="zk-text">折扣券</span>
          <p class="card-title">
            仅新用户满
            <span>20元</span>使用
          </p>
          <p class="valid-time">有效期：2019.3.25</p>
        </div>
        <p class="line-box">
          <span></span>
          <i></i>
          <span></span>
        </p>
        <div>
          <p class="msg-text">使用时请出示给店员输入密码进行核销</p>
          <div class="ipts-box">
            <input type="text" maxlength="1" />
            <input type="text" maxlength="1" />
            <input type="text" maxlength="1" />
            <input type="text" maxlength="1" />
          </div>
          <p class='confirm-btn' @click="openModel">确认核销</p>
          <van-overlay :show="show" @click="closeModel" text='确认核销'>
            <div class="wrapper" @click.stop='closeModel'>
              <div class='model-content'>
                <van-icon name="checked" size='40' color='#1296DB'/>
                <p class='succeed-text'>核销成功</p>
                <span class='confirm-btn'>确定</span>
              </div>
            </div>
          </van-overlay>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-verify-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #459cdf;
}

.contair {
  padding: 70px 20px;
  flex: 1;
}
.content-box {
  background-color: #fff;
  border-radius: 8px;
  height: 100%;
  position: relative;
  padding-top: 30px;
}
.content-box > div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #aaa;
  position: absolute;
  top: -25px;
}
.shop-name {
  font-size: 15px;
  color: #222;
}
.zk-text,
.valid-time {
  font-size: 13px;
  color: #bbb;
  margin-top: 15px;
  margin-bottom: 10px;
}
.card-title {
  font-size: 20px;
  color: #222;
}
.card-title > span {
  color: #fe8d86;
}

.line-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.line-box > span {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #459cdf;
}
.line-box > span:first-child {
  transform: translateX(-50%);
}
.line-box > span:last-child {
  transform: translateX(50%);
}
.line-box > i {
  flex: 1;
  border-top: 1px dotted #aaa;
}

.msg-text {
  padding: 30px 0;
}
.ipts-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 50px;
}
.ipts-box > input {
  width: 40px;
  height: 40px;
  text-align: center;
  margin: 0 10px;
  border: 1px solid #999;
  outline: none;
}

.confirm-btn {
  background-color: #2a81c5;
  border-radius: 5px;
  padding: 8px 12px;
  color: #fff;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.model-content {
  width: 80%;
  background-color: #fff;
  border-radius:8px;
  padding:20px 0;
}
.succeed-text{font-size:16px;margin:30px 0;}

</style>

<script>
import Vue from "vue";
import router from './../router.js'
import { NavBar, Overlay,Icon } from "vant";
Vue.use(NavBar).use(Overlay).use(Icon);

export default {
  mounted(){
    var ipts=document.getElementsByClassName('ipts-box')[0].children;
    function iptChange(){
      if(this.value!=''){
        this.blur()
        var next=this.nextElementSibling
        if(next){
          next.focus();
        }
      }else{
        var prev=this.previousElementSibling;
        if(prev){
          prev.focus()
        }
      }
    }
    for(var ipt of ipts){
      ipt.oninput=iptChange
    }
  },
  data() {
    return {
      show:false
    };
  },
  methods: {
    onClickLeft() {
      //window.console.log("返回");
      router.back();
    },
    openModel(){
      this.show=true;
    },
    closeModel(){
      this.show=false
    }
  },
};
</script>