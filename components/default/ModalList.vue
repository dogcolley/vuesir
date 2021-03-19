<template>
  <div class="U-modal">
    <button class="U-close" @click="()=>{$store.commit('modal/deleteModalList',type.type)}" ></button>
    <div class="U-content" :style="{width:`${type.width ? type.width : '600'}px`,height:`${type.height ? type.height : '300'}px`}" >
      <MemberInfo v-if="type.type =='MemberInfo'" />
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
    show:false
 }),
  created(){},
  components:{
    MemberInfo
  },
  mounted(){},
}
</script>

<style lang="scss">
.U-modal{
  width:100%;
  height:100%;
  position: fixed;
  top:0;
  left:0;
  z-index:999;
  background: rgba(0,0,0,0.8);
  padding:0!important;
  overflow: hidden;
  .U-close{
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
  }
  .U-content{
    position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    max-width:90%;
    max-height:90%;
    margin: auto;
    background: $color-base;
    @include xs{
      height : 90% !important;;
      width  : 90% !important;;
    }
  }

}

</style>