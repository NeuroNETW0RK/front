<template>
  <d2-container>
    <el-row class="search">
        <el-col :span="12"><div class="grid-content bg-purple">按钮区域</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light">查询区域</div></el-col>
    </el-row>
     <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="image_name"
      label="镜像名称"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="tag_use"
      label="镜像用途"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="tag_num"
      label="tag数量"
      width="120"
      sortable>
    </el-table-column>
    <el-table-column
      prop="username"
      label="创建人"
      width="180">
    </el-table-column>
       <el-table-column
      prop="create_time"
      label="创建时间"
      width="200"
      sortable>
    </el-table-column>
     <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">新增tag</el-button>
        <el-button type="text" size="small">全部tag</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="4">
    </el-pagination>
  </d2-container>
</template>

<script>
export default {
  name: 'image',
  methods: {
    handleClick (row) {
      console.log(row)
    },
    formatter (row, column) {
      return row.address
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  data () {
    return {
      tableData: [{
        id: 1,
        image_name: '镜像名称',
        tag_use: '镜像用途',
        tag_num: 2,
        username: '王小虎',
        create_time: '2016-05-02 17:23:00'
      }, {
        id: 2,
        image_name: '镜像名称',
        tag_use: '镜像用途',
        tag_num: 2,
        username: '王小虎',
        create_time: '2016-05-02 17:23:00'
      }, {
        id: 3,
        image_name: '镜像名称',
        tag_use: '镜像用途',
        tag_num: 2,
        username: '王小虎',
        create_time: '2016-05-02 17:23:00'
      }, {
        id: 4,
        image_name: '镜像名称',
        tag_use: '镜像用途',
        tag_num: 2,
        username: '王小虎',
        create_time: '2016-05-02 17:23:00'
      }],
      currentPage: 5
    }
  }
}
</script>

<style>
  .search {
    background-color: aqua;
    height: 3em;
  }
  .el-col {
    border-radius: 4px;
  }
  .el-pagination {
    margin-top: 2em;
    margin-right: 2em;
    text-align: right;
  }
</style>
