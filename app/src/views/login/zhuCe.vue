<template>
  <div class="zhuce">
    <h1>免费注册</h1>
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
          v-model="code"
          type="password"
          name="code"
          placeholder="请输入四位验证码"
          :rules="[{ required: true, message: '请填写密码' }]"
        >
          <template #button>
            <van-button size="small" type="primary" @click="getCode">获取验证码</van-button>
          </template>
        </van-field>

        <van-field
          v-model="pwd"
          type="password"
          name="pwd"
          placeholder="请输入8-25位(数字+字母)密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="pwds"
          type="password"
          name="pwds"
          placeholder="请再次输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin-top: 20px">
        <van-button block type="primary" native-type="submit">
          确定
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup lang='ts'>
import {getCodeApi} from '../../utils/api'
import { ref } from "vue";
const mobile = ref("");
const code = ref("");
const pwd = ref("");
const pwds = ref("");

const getCode=()=>{
        getCodeApi(mobile.value).then(res=>{
            console.log(res)
        })
}

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
</style>