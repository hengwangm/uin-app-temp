<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
      };
    },
    onLoad() {},
    methods: {},
  };
</script>

<style lang="scss">
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .logo {
    margin: 200rpx auto 50rpx;
    width: 200rpx;
    height: 200rpx;
  }
  .text-area {
    display: flex;
    justify-content: center;
  }
  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>
