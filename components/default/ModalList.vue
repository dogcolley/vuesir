<template>
  <v-content id="U-modal">
    <button class="close" @click="()=>{$store.commit('modal/deleteModalList',type.type)}" ></button>
    <div class="wrap">
        <div class="content" :style="{width:`${type.width}px`,height:`${type.height}px`}">
          <Test v-if="type.type =='Test'"/>
          {{$store.state.modalList}}
        </div>
     </div>   
  </v-content>
</template>

<script>
import Test from '../modal/Test.vue';

export default {
  props: {
    type: Object,
    index: Number,
  },
  components:{
    Test
  }


}
</script>

<style lang="scss">
#U-modal{
  width:100%;height:100%;position: fixed;top:0;left:0;z-index:999;background: rgba(0,0,0,0.8);display:table;
  .close{position:absolute;width:100%;height:100%;left:0;top:0;}
  .wrap{width:100%;height:100%;display: table-cell;vertical-align: middle;}
  .content{max-width:100%;max-height: 100%;margin: auto;background: #fff;position: relative;}
}

</style>