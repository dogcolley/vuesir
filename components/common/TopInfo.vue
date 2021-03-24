<template>
    <div class="top-info">
        <v-row>
            <v-col cols="5" md="2" >
                <div class="profile">
                    <img src="" alt="">
                </div>
            </v-col>

            <v-col cols="7" md="10">
                <v-row class="top-con U_ft_sz07"  v-if="!this.$vuetify.breakpoint.xs">
                    <v-col v-for="(info, id) in info_arr" :key="id" :md="cols[id < col_length ? id :  id - col_length  * Math.floor(id / col_length)].md" :cols="cols[id < col_length ? id :  id - col_length  * Math.floor(id / col_length)].cols" >
                        <div>
                            <strong v-html="info.tit"></strong>
                            <span v-html="info.txt"></span>
                        </div>
                    </v-col>
                </v-row>

                <v-row class="top-con U_ft_sz07"  v-if="this.$vuetify.breakpoint.xs">
                    <v-col>
                        <div v-if="name='member'">
                           <span v-for="(info,id) in info_arr_m" :key="id">{{info.tit}} : {{info.txt}}</span> 
                        </div>
                        <br/>
                         <v-btn
                            color="blue"
                            dark
                            @click="sheet = !sheet"
                            small
                        >
                            상세보기
                        </v-btn>
                        <v-bottom-sheet v-model="sheet">
                            <v-sheet>
                            <v-row class="top-con-btm U_ft_sz07">
                                <v-col>
                                    상세보기
                                </v-col>

                                <v-col v-for="(info, id) in info_arr" :key="id" :md="cols[id < col_length ? id :  id - col_length  * Math.floor(id / col_length)].md" :cols="cols[id < col_length ? id :  id - col_length  * Math.floor(id / col_length)].cols" >
                                    <div>
                                        <strong v-html="info.tit"></strong>
                                        <span v-html="info.txt"></span>
                                    </div>
                                </v-col>

                                <v-col style="text-align:center;padding-top:20px">
                                    <v-btn
                                        color="red"
                                        dark
                                        @click="sheet = !sheet"
                                    >
                                        close
                                    </v-btn>
                                </v-col>
                            </v-row>
                            </v-sheet>
                        </v-bottom-sheet>
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
        info_arr_m:Array,
        cols:Array,
        name:String
    },
    data(){
        return{
            col_length:0,
            sheet: false,
        }
    },
    created(){
        this.col_length = this.cols.length
        console.log(this.$vuetify)
    }
}
</script>

<style lang="scss">


    .top-info{
        .profile{ background:pink;height:100%}
        .top-con{}
    }
   .top-con-btm{padding:30px 0;
     > *{border-bottom:1px dashed #d9d9d9;padding: 5px 4%}
     > *:last-child{border-bottom: 0;}
     > *:first-child{border-bottom: 2px solid #d9d9d9;}
   }
</style>