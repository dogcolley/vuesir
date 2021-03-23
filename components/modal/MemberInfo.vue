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
                        <v-card-text>
                            <div v-if="item.tab == '회원정보'">
                                <ul class="tab2">
                                    <li v-for="(tab, id) in inc_tab1" :key="id">
                                        <button type="button" @click="inc_tab1_on = tab" :class="inc_tab1_on ==  tab ? 'on' : '' ">
                                            {{tab}}
                                        </button>
                                    </li>
                                </ul>
                                <BasicFrom name="member_basic" action="member/SET_INFO_UPDATE" v-if="inc_tab1_on == '기본정보'" />
                                <BasicFrom name="member_remainder" action="member/SET_INFO_UPDATE" v-if="inc_tab1_on == '추가정보'" />
                                <BasicFrom name="member_channel" action="member/SET_INFO_UPDATE" v-if="inc_tab1_on == '채널정보'" />
                                <BasicFrom name="member_security" action="member/SET_INFO_UPDATE" v-if="inc_tab1_on == '비밀번호변경'" />
                            </div>
                            <div v-if="item.tab == '캠페인'">
                            </div>
                            <div v-if="item.tab == '서울오빠지수'">


                            </div>
                            <div v-if="item.tab == '이슈관리'">


                            </div>
                            <div v-if="item.tab == '포인트'">


                            </div>
                            <div v-if="item.tab == 'SMS'">
                                
                            </div>
                        </v-card-text>
                    </v-card>
                    </v-tab-item>
                </v-tabs-items>               
            </div>
        </article>
    </section>
</template>

<script>

import TopInfo from '~/components/common/TopInfo.vue'
import BasicFrom from '~/components/common/BasicFrom.vue'

export default {
    components:{
        TopInfo,
        BasicFrom,
    },
    props:{
        type : String
    },
    created(){
        this.top_info[0].txt = '이름 (성별) 나이'
        this.top_info[1].txt = 'https://domain.com/testlink'
        this.top_info[2].txt = '186'
        this.top_info[3].txt = '우수'
        this.top_info[4].txt = '닉네임예시입니다.'
        this.top_info[5].txt = 'https://domain.com/testlink'
        this.top_info[6].txt = '96'
        this.top_info[7].txt = '180,500'
        this.top_info[8].txt = '010-1111-2222'
        this.top_info[9].txt = 'https://domain.com/testlink'
        this.top_info[10].txt = '50'
        this.top_info[11].txt = '21-01-02'
        this.top_info[12].txt = '시도/구군'
        this.top_info[13].txt = 'https://domain.com/testlink'
        this.top_info[14].txt = '3%/1%'
        this.top_info[15].txt = '21.01-03'
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
                {tit:'이름'       , txt:''}, 
                {tit:'블로그'     , txt:''}, 
                {tit:'신청'       , txt:''}, 
                {tit:'상태'       , txt:''}, 
                {tit:'닉네임'     , txt:''}, 
                {tit:'인스타그램' , txt:''}, 
                {tit:'선정'       , txt:''}, 
                {tit:'포인트'     , txt:''}, 
                {tit:'연락처'     , txt:''}, 
                {tit:'유투브'     , txt:''}, 
                {tit:'리뷰'       , txt:''}, 
                {tit:'가입일'     , txt:''}, 
                {tit:'활동지역'   , txt:''}, 
                {tit:'카페'       , txt:''}, 
                {tit:'지연/취소'  , txt:''}, 
                {tit:'최근접속'   , txt:''}, 
            ],
            top_img:'',
            tab: null,
            items: [
                {tab: '회원정보'},
                {tab: '캠페인'},
                {tab: '서울오빠지수'},
                {tab: '이슈관리'},
                {tab: '포인트'},
                {tab: 'SMS'}
            ],
            inc_tab1:[
                '기본정보',
                '추가정보',
                '채널정보',
                '비밀번호변경',
            ],
            inc_tab1_on: '기본정보'

        }
    },

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
        .tab2{
            @extend .U_clear;
            padding:0;
            margin-bottom:20px;
            li{padding:0;list-style:none;float:left;margin-right:7px;padding-right:7px;border-right:1px solid #d9d9d9;line-height:1}
            li:last-child{border-right: 0}
            button{color:#777!important}
            .on{color:#000!important}
        }
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