<template>
  <view class="home-wrap">
    <view class="home-top">
      <view class="head-wrap">
        <uni-icons type="list" color="#5FB1FF" />
        <text class="text">返图仂</text>
        <uni-icons type="notification" color="#5FB1FF" />
      </view>
      <view class="search-tab">
        <view class="search-tab-text">
          <view class="addSelectText">
            <image class="logo-starlights" src="/static/home/starlights@2x.png" />
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
      <view class="location-wrap">
        <image class="logo-location" src="/static/home/location@2x.png" />
        <text class="text">四川成都</text>
        <image class="logo-jt" src="/static/home/jt@2x.png" />
      </view>
      <view class="location-bullet">
        <view class="text">最近哪里有漫展</view>
        <view class="text">最近哪里有漫展</view>
      </view>
    </view>
    <view class="content-wrap">
      <view class="card">
        <view class="card-bg">
          <text class="address-text">地址</text>
          <text class="address-text2">四川省成都市</text>
        </view>
        <view class="card-title">求拍二次元风格的摄影师</view>
        <view class="card-appeal">#求摄影</view>
        <view class="heat-wrap">
          <view>
            <image class="logo-heat" src="/static/home/list1.png" />
            <text class="text1">贝尔纳迪</text>
          </view>
          <view>
            <image class="logo-heat2" src="/static/home/rd@2x.png" />
            <text class="text2">2345</text>
          </view>
        </view>
      </view>
      <view class="card">
        <view class="card-bg card-bg2">
          <text class="address-text">地址</text>
          <text class="address-text2">四川省成都市</text>
        </view>
        <view class="card-title">求拍二次元风格的摄影师</view>
        <view class="card-appeal">#求摄影</view>
        <view class="heat-wrap">
          <view>
            <image class="logo-heat" src="/static/home/list1.png" />
            <text class="text1">贝尔纳迪</text>
          </view>
          <view>
            <image class="logo-heat2" src="/static/home/rd@2x.png" />
            <text class="text2">2345</text>
          </view>
        </view>
      </view>
      <view class="card">
        <view class="card-bg card-bg2">
          <text class="address-text">地址</text>
          <text class="address-text2">四川省成都市</text>
        </view>
        <view class="card-title">求拍二次元风格的摄影师</view>
        <view class="card-appeal">#求摄影</view>
        <view class="heat-wrap">
          <view>
            <image class="logo-heat" src="/static/home/list1.png" />
            <text class="text1">贝尔纳迪</text>
          </view>
          <view>
            <image class="logo-heat2" src="/static/home/rd@2x.png" />
            <text class="text2">2345</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import swiperScroll from '../../components/swiperScroll/swiperScroll.vue'
const value = ref('')
</script>

<style>
@import url('./home.less');
</style>
