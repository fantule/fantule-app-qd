<template>
  <view class="community">
    <hedTop
        title="社群"
    />
	<view class="card">
		<view class="background-wrap">
			<view class="card-text-h1">我的足迹</view>
			<view class="card-text-h2">社群浏览记录</view>
		</view>
		<view class="background-wrap">
			<view class="card-text-h1">我的收藏</view>
			<view class="card-text-h2">收藏的社群</view>
		</view>
	</view>
	<view class="content-wrap">
		 <image class="logo-img" src="/static/home/starlights@2x.png" />
		 <view class="mid-wrap">
			 <view class="text1">bjd娃娃交流</view>
			 <view class="text2">当前该社群用户:152</view>
			 <view class="text2">这里是bjd娃娃分类的内容…</view>
		 </view>
		 <button class="mini-btn add-btn" type="default" size="mini">加入</button>
	</view>
	<view class="content-wrap">
		 <image class="logo-img" src="/static/home/starlights@2x.png" />
		 <view class="mid-wrap">
			 <view class="text1">bjd娃娃交流</view>
			 <view class="text2">当前该社群用户:152</view>
			 <view class="text2">这里是bjd娃娃分类的内容…</view>
		 </view>
		 <button class="mini-btn add-btn" type="default" size="mini">加入</button>
	</view>
  </view>
</template>

<script setup lang="ts">
import hedTop from '../../components/hedTop/hedTop.vue'

</script>

<style scoped lang="less">
@import url('./community.less');
</style>
