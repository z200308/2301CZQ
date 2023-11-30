<template>
  <div class="body">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="it in banner" :key="it.picUrl">
        <img :src="it.picUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
    <p
      :style="{
        background: checked ? '#000000' : '#fff',
        color: checked ? '#fff' : '#000000',
      }"
      style="text-align: center; padding-top: 20px; font-size: 20px"
    >
      商品列表
    </p>
    <van-list
      :class="checked ? 'van-list' : 'van-lists'"
      :immediate-check="false"
      v-model:loading="loading"
      :offset="30"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="box" :style="{ background: checked ? '#000000' : '#eee' }">
        <div
          class="item"
          :style="{ background: checked ? '#000000' : '#fff' }"
          v-for="it in shopdata"
          :key="it.id"
        >
          <img
            :src="it.pic"
            alt=""
            @click="$router.push('/info?id=' + it.id)"
          />
          <p
            @click="$router.push('/info?id=' + it.id)"
            class="val"
            :style="{ color: checked ? '#fff' : '#000000' }"
          >
            {{ it.name }}
          </p>
          <div class="btn" style="margin-top: 15px">
            <p>
              <span style="color: darkgreen">￥{{ it.numberFav }}</span>
              <s :style="{ color: checked ? '#9a9a9a' : '#909092' }"
                >￥{{ it.originalPrice }}</s
              >
            </p>
            <button :style="{ background: checked ? '#000000' : '#fff' }">
              购买
            </button>
          </div>
        </div>
      </div>
    </van-list>

    <div id="yuan" v-show="checked == true" @click="checked = false">
      <img src="@/icon/yue.png" alt="" />
    </div>

    <div id="yuan1" v-show="checked == false" @click="checked = true">
      <img src="@/icon/yue1.png" alt="" />
    </div>
    <van-back-top bottom="10vh" />

    <van-tabbar
    :class="checked?'van-tabbar van-tabbar-item--active':'van-tabbars'"
    :inactive-color="checked? '#fff':'black'"
    route
    active-color="#63a48e"
  >
    <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/about" icon="search">分类</van-tabbar-item>
    <van-tabbar-item replace to="/search" icon="cart-o">购物车</van-tabbar-item>
    <van-tabbar-item replace to="/my" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
  </div>
</template>
<script setup lang='ts'>
type banners = {
  picUrl: string;
};
const checked = ref(true);


import { reactive, ref } from "vue";
const banner = ref<banners[]>([]);
import { lunbo, shopApi } from "./utils/api";
lunbo().then((res) => {
  banner.value = res.data.data;
});
const shoplist = reactive({
  page: 1,
  pageSize: 10,
  num: 0,
});

const shopdata = ref<shops[]>([]);
type shops = {
  name: string;
  originalPrice: string;
  pic: string;
  numberFav: string;
  id: string;
};

function get() {
  shopApi(shoplist).then((res) => {
    shopdata.value = res.data.data.result;
    shoplist.num = res.data.data.totalRow;
  });
}
get();

const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  console.log(1);
  if (shopdata.value.length >= shoplist.num) {
    finished.value = true;
  } else {
    shoplist.pageSize += 5;
    get();
  }
  loading.value = false;
};
</script>
<style scoped lang='scss'>
.body {
  width: 100%;
  margin-bottom: 50px;
}
.my-swipe img {
  width: 100%;
  height: 200px;
}

.box {
  width: 100%;
  display: flex;
  background-color: #ccc;
  flex-wrap: wrap;
  padding: 10px;

  .item {
    border-radius: 10px;
    margin: 5px;
    padding: 10px;
    height: 255px;
    background-color: #fff;
    width: 47%;
    position: relative;
    img {
      width: 100%;
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
  .btn {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 5px;
    button {
      color: #63a48e;
      border: none;

      border: 2px solid #63a48e;
      padding: 2px 5px;
      border-radius: 5px;
    }
  }
}

#yuan {
  position: fixed;
  right: 30px;
  bottom: 150px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 0px 5px 2px #ccc;
  img {
    width: 20px;
    height: 20px;
  }
}

.van-list {
  background-color: black;
}

.van-lists {
  background-color: #eee;
}

#yuan1 {
  position: fixed;
  right: 30px;
  bottom: 150px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #63a48e;
  box-shadow: 0px 0px 5px 2px #ccc;
  img {
    width: 20px;
    height: 20px;
  }
}
:root{
  --color:black
}


.van-tabbar {
  background-color: black !important;
}

.van-tabbar-item--active {
  background-color: var(--color) ;
}

.van-tabbars {
  background-color: white !important;
}



</style>