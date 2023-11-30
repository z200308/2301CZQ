<template>
  <div style="display: flex" v-if="shopdata && shopdata.length > 0">
    <van-sidebar v-model="active">
      <van-sidebar-item
        @click="ones(it.id)"
        :title="it.name"
        v-for="it in one"
        :key="it.id"
      />
    </van-sidebar>
      <div class="box">
      <div class="item" v-for="it in shopdata" :key="it.id">
          <img :src="it.pic" alt="" />
        <p class="val">{{ it.name }}</p>
        <p style="color: #63a48e; font-size: 19px">￥{{ it.originalPrice }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { reactive, ref } from "vue";
import { oneApi, twoApi } from "../utils/api";
type shops = {
  name: string;
  originalPrice: string;
  pic: string;
  numberFav: string;
  id: string;
};
type two = {
  categoryId: number;
  page: number;
  pageSize: number;
};

const list = reactive<two>({
  categoryId: 272693,
  page: 1,
  pageSize: 10,
});

const shopdata = ref<shops[]>([]);

function get() {
  twoApi(list).then((res) => {
    shopdata.value = res.data.data.result;
  });
}
get();

type One = {
  name: string;
  id: number;
};
const one = ref<One[]>([]);

oneApi().then((res) => {
  one.value = res.data.data;
});

const ones = (id: number) => {
  list.categoryId = id;
  get();
};

const active = ref(0);
</script>
<style scoped lang='scss'>
.box {
  width: 100%;
  display: flex;
  background-color: #ccc;
  flex-wrap: wrap;

  .item {
    padding: 10px;
    background-color: #fff;
    width: 50%;
    img {
      width: 100%;
    }
  }
  
  .val {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>