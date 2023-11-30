<template>
    <body>
        
        <div>
      <div class="top">
        <img src="../../../../A//植物大战僵尸/reanim/Cactus_body1.png" alt="">
        <h3><span>登录</span>/<span>注册</span></h3>
      </div>
      <div class="fun">
        <div class="Integral">
          <p>--</p>
          <p>积分</p>
        </div>
        <div class="Coupons">
          <p>--</p>
          <p>优惠券</p>
        </div>
        <div class="balance">
          <p>--</p>
          <p>余额</p>
        </div>
      </div>
      <div class="orders">
        <div class="orders-item">
          <p>我的订单</p>
          <p class="or">查看我的订单></p>
        </div>
        <div class="item">
          <div>
            <van-icon name="pending-payment" />
            <p>待付款</p>
          </div>
          <div>
            <van-icon name="tosend" />
            <p>代发货</p>
          </div>
          <div>
            <van-icon name="logistics" />
            <p>待收货</p>
          </div>
          <div>
            <van-icon name="cash-o" />
            <p>退款/ 售后</p>
          </div>
        </div>
      </div>
      <div class="use">
        <h4>常用功能</h4>
        <div class="con">
          <div>
            <van-icon name="balance-o" />
            <p>我的钱包</p>
          </div>
          <div>
            <van-icon name="point-gift-o" />
            <p>积分兑换</p>
          </div>
          <div>
            <van-icon name="orders-o" />
            <p>优惠券</p>
          </div>
          <div>
            <van-icon name="location-o" />
            <p>收货地址</p>
          </div>
          <div>
            <van-icon name="setting-o" />
            <p>设置</p>
          </div>
          <div>
            <van-icon name="coupon" />
            <p>主题</p>
          </div>
          <div>
            <van-icon name="manager" />
            <p>我的设备</p>
          </div>
        </div>
      </div>
    </div>
    </body>
  </template>
  
  <script lang="ts" setup>
  </script>
  <style scoped lang='scss'>
  * {
    margin: 0;
    padding: 0;
  }
  .top {
    width: 100vw;
    color: white;
    font-weight: 800px;
    text-align: center;
    line-height: 200px;
    background-color: #50a586;
    display: flex;
    align-items: center;
    img{
      width: 80px;
      height: 80px;
      margin: 0 20px;
      border-radius: 50%;
    }
  }
  .fun {
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .Integral,
    .Coupons,
    .balance {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: space-around;
    }
  }
  
  .orders {
    width: 100vw;
    height: 80px;
    margin-top: 60px;
  }
  .orders-item {
    display: flex;
    justify-content: space-between;
    .or {
      color: #ccc;
      font-size: 12px;
    }
  }
  .item {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    margin-top: 15px;
  }
  .use {
    width: 100vw;
    height: 80px;
    margin-top: 60px;
  }
  .con {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    div{
        width: 25%;
        margin: 10px 0px;
    }
  }
  .con div {
  }
  .van-icon {
    width: 30px;
    height: 30px;
  }
  body{
    margin-bottom: 200px;
  }
  </style>
  