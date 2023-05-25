<template>
  <div class="index-title">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <b class="index-title">欢迎使用AI平台</b>
        <p>
          Al平台是一个面向企业和个人开发者的机器学 习集成开发环境，为机器学习提供了从数据处理、模型训练、模型管理到模型推理的全生命周期管理服务，帮助用户更快的构建、训练和部署模型。
        </p>
      </div></el-col>
    </el-row>
    <el-row class="index-page-card">
      <el-col :span="6"><div class="index-page-card-title">
        <p class="index-page-card-icon"><i class="el-icon-pie-chart"></i></p>
        <b>数据管理</b>
        <p>支持用户上传数据到后台进行托管</p>
      </div></el-col>
      <el-col :span="6"><div class="index-page-card-title">
        <p class="index-page-card-icon"><i class="el-icon-magic-stick"></i></p>
        <b>模型训练</b>
        <p>支持异构分布式基础资源，支持多机多卡分布式训练</p>
        <p></p>
      </div></el-col>
      <el-col :span="6"><div class="index-page-card-title">
        <p class="index-page-card-icon"><i class="el-icon-s-order"></i></p>
        <b>模型管理</b>
        <p>为所有模型提供统一管理视图</p>
      </div></el-col>
      <el-col :span="6"><div class="index-page-card-title">
        <p class="index-page-card-icon"><i class="el-icon-s-promotion"></i></p>
        <b>模型部署</b>
        <p>支持将模型转化为适合业务场景的推理模式</p>
      </div></el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">
        <b class="index-title">后台使用情况</b>
      </div></el-col>
    </el-row>
    <el-row class="index-page-card2">
      <el-col :span="6"><div class="index-page-card2-container">
        <p class="index-page-card-icon"><i class="el-icon-pie-chart index-page-card2-container-title"></i><span>数据集</span></p>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="12"><div class="index-page-card2-container-info">
            <b>104</b>
            <p>数据集个数</p>
          </div></el-col>
          <el-col :span="12"><div class="index-page-card2-container-info">
            <b>400</b>
            <p>数据量</p>
          </div></el-col>
        </el-row>
      </div></el-col>
      <el-col :span="6"><div class="index-page-card2-container">
        <p class="index-page-card-icon"><i class="el-icon-magic-stick index-page-card2-container-title"></i><span>训练任务</span></p>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="12"><div class="index-page-card2-container-info">
            <b>104</b>
            <p>数据集个数</p>
          </div></el-col>
          <el-col :span="12"><div class="index-page-card2-container-info">
            <b>400</b>
            <p>数据量</p>
          </div></el-col>
        </el-row>
      </div></el-col>
      <el-col :span="6"><div class="index-page-card2-container">
        <p class="index-page-card-icon"><i class="el-icon-s-order index-page-card2-container-title"></i><span>开发容器</span></p>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="12"><div class="index-page-card2-container-info">
            <b>104</b>
            <p>数据集个数</p>
          </div></el-col>
          <el-col :span="12"><div class="index-page-card2-container-info">
            <b>400</b>
            <p>数据量</p>
          </div></el-col>
        </el-row>
      </div></el-col>
      <el-col :span="6"><div class="index-page-card2-container">
        <p class="index-page-card-icon"><i class="el-icon-s-promotion index-page-card2-container-title"></i><span>模型仓库</span></p>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="12"><div class="index-page-card2-container-info">
            <b>104</b>
            <p>数据集个数</p>
          </div></el-col>
          <el-col :span="12"><div class="index-page-card2-container-info">
            <b>400</b>
            <p>数据量</p>
          </div></el-col>
        </el-row>
      </div></el-col>
      <el-col :span="6"><div class="index-page-card2-container">
        <p class="index-page-card-icon"><i class="el-icon-s-promotion index-page-card2-container-title"></i><span>模型服务</span></p>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="12"><div class="index-page-card2-container-info">
            <b>104</b>
            <p>数据集个数</p>
          </div></el-col>
          <el-col :span="12"><div class="index-page-card2-container-info">
            <b>400</b>
            <p>数据量</p>
          </div></el-col>
        </el-row>
      </div></el-col>
    </el-row>
    <slot name="footer"/>
  </div>
</template>
<style lang="scss" scoped>
.d2-page-cover {
  @extend %full;
  @extend %unable-select;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.index-title {
  b {
    font-size: 1em;
    font-weight: bold;
  }
  p {
    font-size: 0.8em;
    font-weight: lighter;
  }
}
.index-page-card {
  p {
    margin-bottom: 12px;
  }
  text-align: center;
  .index-page-card-title {
    .index-page-card-icon {
      color: #4073c9;
      font-size: 4em;
    }
    b {
      font-size: 0.8em;
    }
    p {
      font-size: 0.5em;
    }
  }
}
.index-page-card2-container {
  padding: 20px;
  .index-page-card2-container-title {
    padding-left:15px;
    padding-right:5px;
  }
  .index-page-card2-container-info {
    text-align: center;
    b {
      color: #4073c9;
      font-size: 2em;
      font-weight: 300;
    }
    p {
      font-size: 0.8em;
    }
  }
}
</style>
<script>
</script>
