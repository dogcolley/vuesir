<template>
  <div class="U-modal-wrap">
    <div class="U-modal">
      <button class="close" @click="()=>{$store.commit('modal/deleteModalList',type.type)}" ></button>
      <div class="wrap">
          <div class="content" :style="{width:`${type.width ? type.width : '600'}px`,height:`${type.height ? type.height : '300'}px`}">
            <MemberInfo v-if="type.type =='MemberInfo'" :type="type.type"/>
          </div>
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
.U-modal-wrap{position: fixed;position: fixed;top:0;left:0;z-index:999;background: rgba(0,0,0,0.8);padding:0!important;}
.U-modal{
  width:100%;height:100%;max-width:100%;max-height:100%;display:table;
  .close{position:absolute;width:100%;height:100%;left:0;top:0;}
  .wrap{max-width:100%;height:100%;display: table-cell;vertical-align: middle;}
  .content{max-width:90%;max-height:90%;margin: auto;background: $color-base;position: relative;}
}

</style>