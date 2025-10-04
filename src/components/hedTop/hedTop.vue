<template>
  <view class="hedTop-wrap">
    <view class="home-top">
      <view class="head-wrap">
        <uni-icons type="list" color="#5FB1FF" />
        <text class="text">{{ title }}</text>
        <uni-icons type="notification" color="#5FB1FF" />
      </view>
      <view class="search-tab">
        <view class="search-tab-text">
          <view class="addSelectText">
            <image class="logo-starlights" src="../../static/home/starlights@2x.png" />
            全部
          </view>
          <view>委托</view>
          <view>寻米</view>
          <view>看心情</view>
        </view>
        <uni-easyinput
            class="uni-mt-5"
            suffixIcon="search"
            v-model="value"
            placeholder="搜索"
        />
      </view>
      <swiperScroll />
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import swiperScroll from '../../components/swiperScroll/swiperScroll.vue'

const value = ref('')
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: ''
  },
  message: {
    type: String,
    default: 'Default message' // 提供一个默认值
  },
  count: {
    type: Number,
    default: 0 // 提供一个默认值
  }
});

</script>

<style scoped lang="less">
@import url('./hedTop.less');
</style>
