<template>
  <div>
    <MyHeader title="MyTabBar"></MyHeader>
    <div class="main">
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
    <MyTabBar :arr="tabList" @changeTab="changeTab"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyTabBar from './components/MyTabBar.vue';
import MyGoodsList from './views/MyGoodsList.vue';
import MyGoodsSearch from './views/MyGoodsSearch.vue';
import MyUserInfo from './views/MyUserInfo.vue';

export default {
  data() {
    return {
      comName: 'MyGoodsList',
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
    };
  },
  methods: {
    changeTab(val) {
      this.comName = val;
    },
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
};
</script>
<style>
.main {
  padding-top: 45px;
  padding-bottom: 51px;
}
</style>
