<template>
  <div>
    <ul v-for="item in list" :key="item.id" >
      <li>{{ item.goods_name }}</li>
      <li>{{ item.goods_price }}</li>
      <li>
        <button v-isShow="arr">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      arr: ['admin', 'test', 'developer'],
      current: ' ',
    };
  },
  methods: {
    getList() {
      this.$axios({
        url: '/api/goods',
      }).then((res) => {
        this.list = res.data.data;
      });
    },
  },
  created() {
    this.getList();
  },
  directives: {
    isShow: {
      inserted(el, binding, vnode) {
        if (vnode.context[binding.expression].includes(vnode.context.current)) {
          el.style.display = 'block';
          return true;
        } else {
          el.style.display = 'none';
        }
      },
      update(el, binding, vnode) {
        if (vnode.context[binding.expression].includes(vnode.context.current)) {
          el.style.display = 'block';
          return;
        } else {
          el.style.display = 'none';
        }
      },
    },
  },
};
</script>

<style></style>
