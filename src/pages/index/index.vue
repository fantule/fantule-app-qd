<template>
  <view class="index-wrap">
    <view class="index">
      <text class="skip-text">跳过</text>
      <image class="logo-tl" src="/static/login/logo@2x.png" />
      <uni-forms class="baseForm-wrap" ref="baseForm" :modelValue="baseFormData">
        <uni-forms-item label="">
          <uni-combox
              class="login-num-tip"
              :candidates="baseFormData.candidates"
              placeholder="请选择所在城市"
              v-model="city"
              :border="false"
          />
          <uni-easyinput class="login-it" v-model="baseFormData.name" placeholder="请输入手机号码" />
        </uni-forms-item>
      </uni-forms>
      <text class="password-text">密码登录</text>
      <button class="login-but" type="default" @click="navigateToDetail">本机号码一键登录</button>
      <checkbox-group class="checkbox-wrap">
        <label>
          <checkbox value="cb" :checked="false" color="#5FB1FF" style="transform:scale(0.7)" />
          <text class="checkbox-text">我已阅读并同意《用户协议》《隐私政策》</text>
        </label>
      </checkbox-group>
      <view class="bottom-wrap">
        <text class="bottom-wrap-text">其他登录方式</text>
        <view class="bottom-wrap-img">
          <view>
            <image class="logo-bottom" src="/static/login/qq@2x.png" />
          </view>
          <view>
            <image class="logo-bottom" src="/static/login/wx@2x.png" />
          </view>
          <view>
            <image class="logo-bottom" src="/static/login/wb@2x.png" />
          </view>
          <view>
            <image class="logo-bottom" src="/static/login/xhs@2x.png" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const title = ref('Hello')
const router = useRouter()

const baseFormData = reactive({
  name: '',
  candidates: ['+86'],
});

const city = ref('+86');

const navigateToDetail = () => {
  uni.switchTab({
    url: '/pages/home/home'
  });
};
</script>

<style scoped lang="less">
@import url('./index.less');
</style>
