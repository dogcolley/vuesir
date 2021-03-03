<template>
    <div class="loading-page" v-if="$store.state.loading.loading" >
      <div class="loading-content">
        <div class="loading-icon"></div>
        <p class="loading-text">
          {{$store.state.loading.loadingTxt}}
        </p>
      </div>
    </div>
</template>
<script>
  export default {
    name:'loading',
    data(){
      return{
        loading:true
      }
    },
    mounted(){

    }
  }
</script>
<style scoped lang="scss">
  .loading-page {
    background:$color-mask;
    @extend .U_modal;
  }
  .loading-content{
    @extend .U_modal_wrap;
  }
  .loading-icon {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border: 4px solid $color-base;
    border-radius: 50%;
    border-top-color: $color-theme01;
    animation: spin 1s ease-in-out infinite;
  }
  .loading-text{
    color:#fff
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
</style>
