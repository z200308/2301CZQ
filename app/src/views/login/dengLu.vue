<template>
    <div class="zhuce">
      <h1>账号密码登录</h1>
      <p style="margin: 15px 0px;">为了你的账号安全,请使用手机号登录</p>
      <van-form @submit="onSubmit">
        <van-cell-group>
          <van-field
            v-model="mobile"
            name="mobile"
            label="中国 +86"
            placeholder="请输入手机号"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
         
          <van-field
            v-model="pwd"
            type="password"
            name="pwd"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
          
        </van-cell-group>
        <div style="margin-top: 20px">
          <van-button block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      <div class="s">
            <span>验证码登录</span>
            <p>忘记密码 免费注册</p>
      </div>
    </div>
  </template>
  <script setup lang='ts'>
  import {getCodeApi} from '../../utils/api'
  import { ref } from "vue";
  const mobile = ref("");
  const code = ref("");
  const pwd = ref("");
  const pwds = ref("");
  
  
  
  const onSubmit = (values) => {
    console.log(values);
  };
  </script>
  <style scoped lang='scss'>
  .zhuce {
    width: 100%;
    height: 100vh;
    background-color: #eee;
    padding: 20px 15px;
  }

  .s{
    display: flex;
    color: blue;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    font-size: 14px;
  }
  </style>