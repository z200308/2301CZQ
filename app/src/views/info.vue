<template>
  <div>
    <img :src="data.pic" alt="" />

    <div style="padding:10px 16px;">
      <p style="color: #63a48e; font-size: 19px">￥{{ data.amountSingle }}</p>
      <p style="font-size: 14px">
        价格￥<s>{{ data.amountSingle }}</s>
      </p>

      <h3>{{ data.goodsName }}</h3>
    </div>
    <van-cell title="运费 包邮" :value="'剩余'+data.amount" />
    <van-cell title="领券" is-link />
    <van-action-bar>
      <van-action-bar-icon
        icon="shop-o"
        text="首页"
        @click="$router.push('/')"
      />
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="shop-o" text="购物车" />
      <van-action-bar-button
        style="color: #63a48e"
        color="#dff6f0"
        type="warning"
        text="加入购物车"
      />
      <van-action-bar-button color="#63a48e" type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
import { InfoApi } from "../utils/api";

const data = ref();

InfoApi({
  goodsId: route.query.id,
  page: 1,
  pageSize: 1,
}).then((res) => {
  data.value = res.data.data.result[0].goods;
});
</script>
<style scoped lang='scss'>
img {
  width: 100%;
}
</style>