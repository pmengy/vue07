<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>序号</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <span
            v-for="(str, index) in scope.row.tags"
            :key="index"
            class="badge badge-warning"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue';
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios({
        url: '/api/goods',
      }).then((res) => (this.list = res.data.data));
    },
    del(id) {
      const index = this.list.findIndex((ele) => ele.id === id);
      this.list.splice(index, 1);
    },
  },
  components: {
    MyTable,
  },
};
</script>

<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
