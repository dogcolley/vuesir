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
            <TopInfo :info_arr="top_info" :img="top_img" :cols="top_col"/>

            <div>
                <v-tabs
                    class="tab1"
                    v-model="tab"
                    background-color="primary"
                    dark
                >
                    <v-tab
                    v-for="item in items"
                    :key="item.tab"
                    >
                    {{ item.tab }}
                    </v-tab>
                </v-tabs>
            
                <v-tabs-items v-model="tab">
                    <v-tab-item
                    v-for="item in items"
                    :key="item.tab"
                    >
                    <v-card flat>
                        <v-card-text>{{ item.content }}</v-card-text>
                    </v-card>
                    </v-tab-item>
                </v-tabs-items>
                

            </div>

        </article>
    </section>
</template>

<script>
import TopInfo from '~/components/common/TopInfo.vue';

export default {
    props:{
        type : String
    },
    components:{
        TopInfo
    },
    data(){
        return{
            top_col:[
                {cols:"12",md:"3"},
                {cols:"12",md:"5"},
                {cols:"12",md:"2"},
                {cols:"12",md:"2"},
            ],
            top_info:[
                {tit:'이름'       , txt:'이름 (성별) 나이'}, 
                {tit:'블로그'     , txt:"https://domain.com/testlink"}, 
                {tit:'신청'       , txt:'186'}, 
                {tit:'상태 '      , txt:'우수'}, 
                {tit:'닉네임'     , txt:'닉네임예시입니다'}, 
                {tit:'인스타그램' , txt:'https://domain.com/testlink'}, 
                {tit:'선정'       , txt:'96'}, 
                {tit:'포인트'     , txt:'180,500'}, 
                {tit:'연락처'     , txt:'010-1111-2222'}, 
                {tit:'유투브'     , txt:'https://domain.com/testlink'}, 
                {tit:'리뷰'       , txt:'50'}, 
                {tit:'가입일'     , txt:'21-01-02'}, 
                {tit:'활동지역'   , txt:'시도/구군'}, 
                {tit:'카페'       , txt:'https://domain.com/testlink'}, 
                {tit:'지연/취소'  , txt:'3%/1%'}, 
                {tit:'최근접속'   , txt:'21.01-03'}, 
            ],
            top_img:'',
            tab: null,
            items: [
                { tab: 'One'     , content: 'Tab 1 Content' },
                { tab: 'Two'     , content: 'Tab 2 Content' },
                { tab: 'Three'   , content: 'Tab 3 Content' },
                { tab: 'Four'    , content: 'Tab 4 Content' },
                { tab: 'Five'    , content: 'Tab 5 Content' },
                { tab: 'Six'     , content: 'Tab 6 Content' },
                { tab: 'Seven'   , content: 'Tab 7 Content' },
                { tab: 'Eight'   , content: 'Tab 8 Content' },
                { tab: 'Nine'    , content: 'Tab 9 Content' },
                { tab: 'Ten'     , content: 'Tab 10 Content' },
            ],
        }
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

        .tab1{}
        .v-item-group{background:none!important;
            * {color: #000 !important}
        }
        .v-slide-group__wrapper{border-left:1px solid #d9d9d9;margin-top:20px}
        .v-tabs-slider{background:#d9d9d9!important}
        .v-tab{border:1px solid #d9d9d9;border-left:0;background:#f9f9f9;border-bottom:0}
        .v-tab--active{background:#fff;border-bottom:0}
        .v-tabs-items{border-top:1px solid #d9d9d9}
    }
</style>