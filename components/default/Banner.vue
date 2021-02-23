<template>
    <v-container class="U_bnr">
        <div v-if="!hide">
            <v-carousel v-model="model" :height="height ? height : '100px'" hide-delimiters>
                <v-carousel-item
                    v-for="(color, i) in colors"
                    :key="color"
                >
                    <v-sheet
                        :color="color"
                        height="100%"
                        tile
                        class="fill-height"
                        align="center"
                        justify="center"
                    >
                        <v-col class="display-1" height="100%">
                            알림배너 {{ i + 1 }}
                        </v-col>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>        
        </div>

        <button
            @click="hide = !hide"
            class="btn01"
        >
            <v-icon v-if="hide" small style="color:#fff">
                mdi-bulletin-board
            </v-icon>

            <v-icon v-if="!hide"  small style="color:#fff">
                mdi-close
            </v-icon>
        </button>

        <v-btn 
            x-small
            @click="ckHide()"
            class="btn02">
            24시간 숨기기
            <v-icon
                x-small
                style="color:#fff"
            >   
                mdi-close
            </v-icon>
        </v-btn> 
    </v-container>
</template>

<script>
export default {
    props:{
        height: String,
    },
    mounted(){
        this.$store.dispatch('GET_COOKIE',{name:'banner'}).then(data=>{
            if(data)
                this.hide = data
        })
    },
    data(){
        return{
            hide : false,
            model: 0,
            colors: [
            'black',
            'orange',
            ],          
        }
    },
    methods:{
        ckHide:function() {
            this.hide = true
            this.$store.dispatch('SET_COOKIE',{name:'banner',value:true})
        }
    }
}
</script>

<style lang="scss">
.U_bnr{
    padding:0;
    position: relative;


    .btn01{
        z-index:4;
        position:absolute;
        right:10px;
        top:0;
        width:30px;
        height:30px;
        background:$color-theme04!important;
        color:$color-base
    }
    
    .btn02{
        position:absolute;
        bottom:10px;
        left:10px;
        background:$color-theme04!important;
        color:$color-base
    }


}

</style>