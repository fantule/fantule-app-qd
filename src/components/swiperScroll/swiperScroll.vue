<template>
  <view>
    <image class="logo-scroll" src="/static/home/arrow@2x.png" />
    <scroll-view class="swiperScroll" scroll-x="true" scroll-left="0">
      <view class="text textFirst">推荐</view>
      <view class="text">热门</view>
      <view class="text">摄影</view>
      <view class="text">道具</view>
      <view class="text">毛物</view>
      <view class="text">热门</view>
      <view class="text">摄影</view>
      <view class="text">道具</view>
      <view class="text textLast">毛物</view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
@import url('./swiperScroll.less');
</style>
