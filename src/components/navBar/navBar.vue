<template>
  <view class="nav-bar-wrap">
    <uni-nav-bar
        dark
        :fixed="true"
        shadow
        background-color="#007AFF"
        status-bar
        left-icon="left"
        left-text="返回"
        title="返图仂"
        @clickLeft="back"
    />
  </view>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
// import { useRouter } from 'vue-router'
// const title = ref('Hello')
// const router = useRouter()
//
const back = () => {
  router.push('/home')
};
</script>

<style lang="less" scoped>
@import url('./navBar.less');
</style>
