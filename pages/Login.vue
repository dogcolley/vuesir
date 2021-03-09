<template>
    <div class="U_login" >
        <div class="wrap">
            <v-card class="content U_clear" >
                <v-row>
                    <v-col class="left_con" cols="12" sm="6" md="6">
                        <div class="M_ds_none">
                            <div style="width:260px;height:260px;background:rgba(255,255,255,0.3)">
                                임시 이미지 박스
                            </div>
                            <span class="bg_tit">Seoulouba</span>
                        </div>
                    </v-col>
                    <v-col class="right_con" cols="12" sm="6" md="6">
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
                    </v-col>
                </v-row>
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
                if(this.$store.state.login){ 
                    if(this.$store.state.query.basePage)
                        this.$store.$router.go(`/${this.$store.state.query.basePage}`)
                    else
                        this.$store.$router.go('/')
                }
            })
        }
    },
}
</script>

<style lang="scss">

.U_login{
    background-color:$color-theme02;
    @extend .U_modal;

    .wrap{ 
        @extend .U_modal_wrap;
    }

    .content{
        @extend .U_modal_content;
        @extend .U_gd_bg02;
        @extend .U_wrap2;

         @include xs{
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
        padding:30px;
        background:$color-base;
    } 
    .left_con {
        @extend .U_ov_hd;
        @include xs{display:none}
        padding:30px;
        
        .bg_tit{
            font-size:3rem;
            color:$color-base;
            font-weight: 700;
            position: absolute;
            left:20px;
            bottom:15px;
            letter-spacing: 0.7px;
            opacity: 0.4;
        }
    }


}
</style>