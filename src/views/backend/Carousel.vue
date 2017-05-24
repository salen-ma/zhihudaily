<template>
  <div class="carousel">
    <el-carousel :interval="2000" arrow="never" height="500px">
      <el-carousel-item v-for="item,index in topStories" :key="index">
        <h3>
          <img :src="item.image" alt="" width="100%" height="100%">
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default{
    props:['topStories']
  }
</script>

<style  lang="less" scoped>
  @rem:40rem;

  .carousel{
    padding-top: 168/@rem;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-carousel__indicators{
    background-color:red;
  }
</style>