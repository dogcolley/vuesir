<template>
  <div class="U-modal">
    <button class="close" @click="()=>{$store.commit('modal/deleteModalList',type.type)}" ></button>
    <div class="wrap">
        <div class="content" :style="{maxWidth:`${type.width ? type.width : '600'}px`,maxHeight:`${type.height ? type.height : '300'}px`}">
          <MemberInfo v-if="type.type =='MemberInfo'" :type="type.type"/>
        </div>
     </div>   
  </div>
</template>

<script>
import MemberInfo from '../modal/MemberInfo.vue';

export default {
  props: {
    type: Object,
    index: Number,
  },
  data: () => ({
    style:{
      header:{

      },
      content:{
        
      },
      footer:{
        
      }
    }
 }),
  created(){
    const height = this.type.height;
    const width = this.type.width;
  },
  components:{
    MemberInfo
  }


}
</script>

<style lang="scss">
.U-modal{
  width:100%;height:100%;position: fixed;top:0;left:0;z-index:999;background: rgba(0,0,0,0.8);display:table;padding:0!important;
  .close{position:absolute;width:100%;height:100%;left:0;top:0;}
  .wrap{width:100%;height:100%;display: table-cell;vertical-align: middle;}
  .content{width:90%;height:90%;margin: auto;background: $color-base;position: relative;}
}

</style>