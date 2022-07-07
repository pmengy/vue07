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
          <input
            v-model="scope.row.inputValue"
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            @blur="scope.row.inputVisible = false"
            @keyup.enter="enter(scope.row)"
            @keyup.esc="scope.row.inputValue = ''"
            v-if="scope.row.inputVisible"
            v-focus
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>

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
    enter(val) {
      if (val.inputValue.trim().length === 0) {
        return alert('Please enter a tag');
      }
      val.tags.push(val.inputValue);
      val.inputValue = '';
      val.inputVisible = false;
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
