<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      :class="{ current: item.componentName === currentName }"
      v-for="item in arr"
      :key="item.componentName"
      @click="click(item.componentName)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentName: 'MyGoodsList',
    };
  },
  props: {
    arr: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    click(val) {
      this.currentName = val;
      this.$emit('changeTab', val);
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}

.current {
  color: #1d7bff;
}
</style>
