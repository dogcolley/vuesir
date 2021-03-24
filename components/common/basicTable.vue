<template>
    <v-container class="U_ft_sz07 U_m_pd0">
        <table class="U_table01">
            <thead>
                <tr>
                    <th 
                        v-for="(item,id) in data.header" 
                        :key="id"
                        :class="$vuetify.breakpoint.xs && !item.xs ? 'U_hd01' : '' "
                    >
                    {{item.name}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(items,id) in data.item" :key="id">
                    <td 
                        v-for="(item,name,id2) in items" 
                        :key="id2"
                        :class="$vuetify.breakpoint.xs && !data.header[id2].xs ? 'U_hd01' : '' "
                    >
                        <span v-if="name!=='btn'">{{item}}</span> 
                        <div v-if="name=='btn'">
                            <button type="button" @click="clickListBtn(btn.action,btn.id)" v-for="(btn,id3) in item" :key="id3">{{btn.text}}</button> 
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <br/>

        <div class="text-center U_page01 U_ft_sz07">
            <ul>
                <li><button type="button" class="start"><v-icon dense>mdi-chevron-left</v-icon><v-icon dense>mdi-chevron-left</v-icon></button></li>
                <li><button type="button"><v-icon dense>mdi-chevron-left</v-icon></button></li>
                <li><button type="button">1</button></li>
                <li class="on"><button type="button">2</button></li>
                <li><button type="button">3</button></li>
                <li><button type="button">4</button></li>
                <li><button type="button">5</button></li>
                <li><button type="button"><v-icon dense>mdi-chevron-right</v-icon></button></li>
                <li><button type="button" class="end"><v-icon dense>mdi-chevron-right</v-icon><v-icon dense>mdi-chevron-right</v-icon></button></li>
            </ul>
        </div>
  </v-container>
</template>

<script>
export default {
    props:{
        data:Object,
        name: String,
    },
    methods:{
        clickListBtn(mode,id){
            switch(mode){
                case 'viewMember':
                    this.$store.dispatch('member/GET_INFO',id)
                    this.$store.commit('modal/addModalList',{
                        type:'MemberInfo',
                        width:1100,
                        height:700,
                        header:true,
                        title:'회원정보',
                        data:''
                    })
                break;
                case '':
                break;
                case '':
                break;
                case '':
                break;
                case '':
                break;
                case '':
                break;
                case '':
                break;
            }
        }
    }
}
</script>

<style >


</style>