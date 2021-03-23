<template>
    <div class="top-info">
        <v-row>
            <v-col cols="5" sm="2" >
                <div class="profile">
                    <img src="" alt="">
                </div>
            </v-col>

            <v-col cols="7" sm="10" >
                <v-row class="top-con U_ft_sz06">
                    <v-col v-for="(info, id) in info_arr" :key="id" :md="cols[id < col_length ? id :  id - col_length  * Math.floor(id / col_length)].md" :cols="cols[id < col_length ? id :  id - col_length  * Math.floor(id / col_length)].cols" >
                        <div>
                            <strong v-html="info.tit"></strong>
                            <span v-html="info.txt"></span>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    props:{
        img:String,
        info_arr:Array,
        cols:Array,
    },
    data(){
        return{
            col_length:0
        }
    },
    created(){
        this.col_length = this.cols.length
    }
}
</script>

<style lang="scss">


    .top-info{
        .profile{ background:pink;height:100%}
        .top-con{}

        @include xs{display:none}
    }
</style>