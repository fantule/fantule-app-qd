<template>
  <view class="activity">
	<uni-nav-bar
	    :fixed="true"
	    status-bar
		backgroundColor="transparent"
	    left-icon="left"
	    left-text=""
	    title="活动中心"
		:border="false"
		:shadow="false"
	/>
	<view class="card-content">
		<image class="logo-img" src="/static/home/list1.png" />
		<view class="text1">CYF次元嘉年华动漫展</view>
		<view class="bottom-wrap">
			<view class="text-time">活动时间:2024 8.22 10:00-19:00</view>
			<view class="text-see">
				查看更多<uni-icons type="right" class="right-icon" /><uni-icons type="right" class="right-icon" />
			</view>
		</view>
	</view>
	<view class="card-content">
		<image class="logo-img" src="/static/home/list1.png" />
		<view class="text1">CYF次元嘉年华动漫展</view>
		<view class="bottom-wrap">
			<view class="text-time">活动时间:2024 8.22 10:00-19:00</view>
			<view class="text-see">
				查看更多<uni-icons type="right" class="right-icon" /><uni-icons type="right" class="right-icon" />
			</view>
		</view>
	</view>
  </view>
</template>

<script setup lang="ts">

</script>

<style scoped lang="less">
@import url('./activity.less');
</style>

