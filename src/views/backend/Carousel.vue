<template>
  <swipe :auto="4000" id="swipe-wrap">
      <swipe-item v-for="(item, index) in topStories" :key="index">
        <router-link
          class="top-img"  
          :to="`/detail/${item.id}`"
          tag="div"
          :style="{'background-image':`url(${item.image})`}"
        ></router-link>        
      </swipe-item>
  </swipe>  
</template>

<script>
  import {Swipe, SwipeItem} from 'mint-ui'

  export default{
    props:['topStories'],
    components: {
        Swipe,
        SwipeItem
    }
  }
</script>

<style  lang="less">
  @rem:40rem;
  #swipe-wrap{
    padding-top: 168/@rem;
    height:610/@rem;

    .top-img{
      width:100%; 
      height:100%;
      background-repeat: no-repeat;
      background-position: center;       
      background-size: cover;
    }

    .mint-swipe-indicators{
      .mint-swipe-indicator {
        width: 18/@rem; 
        height: 18/@rem; 
        background: rgba(255, 255, 255, 0.6);
        opacity: 1;
      }
      .is-active{
        background:#fff;
      }
    }    
  }
</style>