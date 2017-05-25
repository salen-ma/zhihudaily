<template>
  <swipe :auto="4000" class="swipe-wrap">
      <swipe-item v-for="(item, index) in topStories" :key="index">
          <img :src="item.image" alt="" width="100%" height="100%">
      </swipe-item>
  </swipe>  
</template>

<script>
  import {Swipe, SwipeItem} from 'mint-ui'

  export default{
    props:['topStories'],
    components: {
        Swipe,
        SwipeItem,
    }
  }
</script>

<style  lang="less" scoped>
  @rem:40rem;
  .swipe-wrap{
    padding-top: 168/@rem;
    height:600/@rem;
  }
</style>