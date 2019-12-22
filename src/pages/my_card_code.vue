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
      <span slot='title' style='color:#fff'>我的卡券</span>
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
          <p class='msg-text'>使用二维码</p>
          <img src="" alt="" class='code-img'>
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

.msg-text{width:100%;text-align:left;padding:10px;box-sizing:border-box;}
.code-img{width:180px;height:180px;background-color:#aaa;margin-top:40px;}

</style>

<script>
import Vue from "vue";
import router from './../router.js'
import { NavBar, Overlay,Icon } from "vant";
Vue.use(NavBar).use(Overlay).use(Icon);

export default {
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