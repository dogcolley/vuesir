<template>
    <v-container class="U-from-wrap">
        <form  
            @submit="submitAction"
            method="post"
        >
            <v-row class="U-from-inpput" v-if="name == 'member_basic'">
                <v-col cols="12" sm="4">
                    <SearchOptions  name="mb_name" :data="{type:'text',text:'이름'}" />
                </v-col>
                <v-col cols="12" sm="4">
                    <SearchOptions  name="mb_mail" :data="{type:'email',text:'E-mail'}" />
                </v-col>
                <v-col cols="12" sm="4">
                    <SearchOptions  name="mb_phone" :data="{type:'number',text:'휴대번번호'}" />
                </v-col>
                <v-col cols="12" sm="4">
                    <SearchOptions  name="test" :data="$store.state.config.member.ch.detail[4]" />
                </v-col>
                <v-col cols="12" sm="4">
                    <SearchOptions  name="test" :data="{type:'number',text:'출생년도'}" />
                </v-col>
                <v-col cols="12" sm="4">
                    <SearchOptions  name="test" :data="{type:'text',text:'직업'}" />
                </v-col>
                <v-col cols="12" sm="6">
                    <SearchOptions  name="test" :data="{type:'address',text:'주소'}" />
                </v-col>
                <v-col cols="12" sm="6">
                    <SearchOptions  name="test" :data="{type:'file',text:'프로필 사진'}" />
                </v-col>
            </v-row>

            <v-row class="U-from-inpput" v-if="name == 'member_remainder'">
                <v-col cols="12" sm="4">
                    <SearchOptions  name="test" :data="{type:'text',text:'테스트'}" />
                </v-col>
            </v-row>

            <v-row class="U-from-inpput" v-if="name == 'member_channel'">
                <v-col cols="12" sm="4">
                    <SearchOptions  name="test" :data="{type:'text',text:'테스트'}" />
                </v-col>
            </v-row>

            <v-row class="U-from-inpput" v-if="name == 'member_security'">
                <v-col cols="12" sm="4">
                    <SearchOptions  name="test" :data="{type:'text',text:'테스트'}" />
                </v-col>
            </v-row>

            <br/>
            
            <div class="U-from-btns">
                <button type="submit">저장</button>
                <button type="button">리셋</button>
            </div>
            
        </form>
    </v-container>
</template>

<script>
import SearchOptions from '~/components/common/SearchOptions.vue'

export default {
    components:{
        SearchOptions
    },
    props:{
        action:String,
        name  :String
    },
    methods:{
        submitAction(e){
            e.preventDefault()
            this.$store.dispatch(`${this.action}`)
        },
        submitReset(){
            
        }
    }
}
</script>

<style lang="scss" >

.U-from-inpput{

    > * {
        border-bottom:1px solid #d9d9d9;
         @include xs{border-left:1px solid #d9d9d9;border-right:1px solid #d9d9d9}
    }
    > *:nth-child(1) {border-top:1px solid #d9d9d9}
    > *:nth-child(2),> *:nth-child(3){
        border-top:1px solid #d9d9d9;
        @include xs{border-top:0}
    }
    >*:nth-child(3n+2),*:nth-child(3n+3){
        border-left:1px solid #d9d9d9;
    }
}

.U-from-btns{
    margin-top:30px;text-align:center;
    > * {display:inline-block;}
    > *:first-child{background:#f9f9f9}
    button{
        border:1px solid #d9d9d9;
        padding:3px 12px;
        @extend .U_ft_sz08;
    }

}

/* manager@x-lation.net */
</style>