<template>
    <section class="modal-content">
        <header class="hd U_clear">
            <h3 class="tit U_ft_sz04">제목이지</h3>
            <v-btn
                @click="()=>{$store.commit('modal/deleteModalList',type)}" 
                icon
            >
                <v-icon>
                    mdi-close
                </v-icon>
            </v-btn>
        </header>
        <article class="con">


            <div>
                
                <img src="" alt="">
                
                <ul>
                    <li></li>
                </ul>

                <ul>
                    <li></li>
                </ul>
                
                <ul>
                    <li></li>
                </ul>
                
            </div>

            <div>
                <ul>
                    <li></li>
                </ul>


                <ul>
                    <li></li>
                </ul>
            </div>

        </article>
    </section>
</template>

<script>
export default {
    props:{
        type : String
    }
}
</script>

<style lang="scss">
    .modal-content{
        height:100%;
        .hd{height:50px;border-bottom:1px solid $color-border01;padding: 0 20px;line-height:50px;text-align: right;
            .tit{float:left}
        }
        .con{height: calc( 100% - 51px );padding:20px;box-sizing: border-box;overflow: auto;}


    }
</style>