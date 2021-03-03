<template>
    <div class="U_login" >
        <div class="wrap">
            <v-card class="content U_clear">
                <div class="left_con">
                    <div class="M_ds_none">
                        <div style="width:260px;height:260px;background:rgba(255,255,255,0.3)">
                            임시 이미지 박스
                        </div>
                        <span class="bg_tit">Seoulouba</span>
                    </div>
                </div>
                <div class="right_con ">
                    <strong class="tit">
                        서울오빠 관리자
                    </strong>
                    <v-card-text>
                        <v-text-field
                            label="ID"
                            v-model="id"
                            outlined
                            solo
                            dense
                            background-color="#fff"
                        ></v-text-field>
                        <v-text-field
                            item-text="name"
                            label="Password"
                            type="password"
                            v-model="pw"
                            solo
                            dense
                            background-color="#fff"
                        ></v-text-field>
                    </v-card-text>

                    <v-divider></v-divider>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-card-text>
                        <v-alert
                            dense
                            outlined
                            type="error"
                            v-if="err"
                        >
                            <strong>정보가 맞지 않습니다.</strong> ID 와 Password를 <strong>다시 확인하여</strong> 접속해주세요
                        </v-alert>

                        <button
                            @click="loginFN"
                            class="btn01"
                        >
                            Login
                        </button>
                    </v-card-text>
                    </v-card-actions>
                    {{$store.state.query.basePage}}
                    <button type="button" @click="$store.dispatch('MEMBER_INFO')">회원정보확인</button>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
export default {
    name:"login",
    data:function(){
        return{
            id : 'super',
            pw : 'super@2016',
            err : false
        }
    },
    mounted(){
        this.$store.commit("querySet")
    },
    methods:{
         loginFN : async function () {
            const data = {
                id : this.id,
                pw : this.pw,
            }
            await this.$store.dispatch("LOGIN",data).then(data=>{
                alert(this.$store.state.query.basePage)
                alert('로그인완료')
                /*
                if(this.$store.state.login){ 
                    if(this.$store.state.query.basePage)
                        this.$store.$router.go(`/${this.$store.state.query.basePage}`)
                    else
                        this.$store.$router.go('/')
                }
                */
            })
        }
    },
}
</script>

<style lang="scss">

.U_login{
    //@extend .U_gd_bg01;
    background-color:$color-theme02;
    @extend .U_modal;

    .wrap{ 
        @extend .U_modal_wrap;
    }

    .content{
        //background:  $color-theme02;
        @extend .U_modal_content;
        @extend .U_gd_bg02;
        @extend .U_wrap2;
        @include mb{
            width:94%
        }
    }



    .U_login_content{
        padding:30px;
        max-width:400px;
        margin: 0 auto
    }
    .tit{
        font-weight: 700;
        padding-bottom:15px;
        @extend .U_ft_sz01 , .U_ds_block, .U_ft_fm01;
        letter-spacing: 0.7px
    }
    
    .btn01{
        @extend .U_btn01;
        @extend .U_ft_sz03;
        @extend .U_gd_bg01;

        color: $color-base;
    }

    .right_con{
        @extend .PT_fl_rt;
        padding:30px;
        width:50%;
        background:$color-base;
        @include mb{
            width:100%
        }
    } 
    .left_con {
        @extend .PT_fl_lt;
        @extend .U_ov_hd;
        width:50%;
        padding:30px;
        
        @include mb{
            width:100%;
            padding:0;
            height:20px;
        }
        
        .bg_tit{
            font-size:3rem;
            color:$color-base;
            font-weight: 700;
            position: absolute;
            left:20px;
            bottom:15px;
            letter-spacing: 0.7px;
            opacity: 0.4;
            @extend .M_ds_none;          
        }
    }


}
</style>