<template>
    <div class="detail-wrap">


        <span class="tit"
            v-if="data.type == 'checkbox' || data.type == 'radio'  || data.type == 'select' "
        >{{data.text}}</span>

        <v-text-field :label="data.text" v-model="value" @change="valueFilter" class="input01" hide-details="auto" v-if="data.type == 'text' || data.type == 'number'"></v-text-field>

        <v-radio-group v-if="data.type == 'radio'" row class="radio01" >
            <v-radio
                v-for=" (value, id) in data.option"
                :key="id"
                :label="data.label[id]"
                :value="value"
                color="#6292FF"
                dense
            ></v-radio>
        </v-radio-group>

        <div v-if="data.type == 'checkbox'"></div>
        <span v-if="data.type == 'checkbox'" >
            <v-checkbox dense class="checkbox01" color="#6292FF" :label="data.label[id]" v-for=" (value,id) in data.option" :key="id" ></v-checkbox>
        </span>

        <v-menu
          v-if="data.type == 'date'" 
          class="date01"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :label="data.text"
              prepend-icon="mdi-calendar"
              readonly
              v-model="value"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker  v-model="value"  @input="date = false" ></v-date-picker>
        </v-menu>

        <select :name="data.name" v-if=" data.type == 'select' " class="U_select03">
            <option v-for="(value , id) in data.option" :key="id" :value="value"> {{data.label[id] ? data.label[id] : value}}</option>
        </select>


        
        <v-select
            v-if="data.type == 'select-checkbox'"
            :items="data.option"
            v-model="value"
            :label="data.text"
            multiple
        >
            <template v-slot:selection="{ item, index }">
                <v-chip v-if="index === 0">
                <span>{{ item.text }}</span>
                </v-chip>
                <span
                v-if="index === 1"
                class="grey--text caption"
                >
                (+{{ value.length - 1 }} others)
                </span>
            </template>
        </v-select>
        
        <div v-if="data.type == 'select-checkbox'" class="sc-info01">
            <button type="button" @click="selectCheckboxAll" class="U_ft_sz09">
                <v-icon small v-if="this.value.length !== this.data.option.length">mdi-checkbox-blank-outline</v-icon>
                <v-icon small v-if="this.value.length == this.data.option.length">mdi-check-box-outline</v-icon>
                {{this.value.length == this.data.option.length ? '전체 해제' : '전체 선택' }}
            </button>
        </div>


        <v-select
            v-if="data.type == 'select-radio'"
            :items="data.option"
            v-model="value"
            :label="data.text"
        >
            <template v-slot:item="{ item, attrs, on }">
            <v-list-item
                v-bind="attrs"
                v-on="on"
            >
                <v-list-item-title
                v-text="item.text"
                ></v-list-item-title>
            </v-list-item>
            </template>
        </v-select>
        
        <div v-if="data.type == 'select-radio'" class="sc-info01">
            <button type="button" @click="selectEmpty" class="U_ft_sz09">
                <v-icon small v-if="this.value.length !== this.data.option.length">mdi-cursor-default-click-outline</v-icon>
                 비우기
            </button>
        </div>



    </div>
</template>

<script>
export default {
    props:{
        data:Object,
        name:String
    },
    data: () => ({
        date : false,
        value : '',
    }),
    computed:{
        value:function(){
            switch(this.data.type){
                case 'date':
                    return {};
                break;
                case 'checkbox' || 'select-checkbox':
                    return [];
                break;

            }
            
        }
    },
    methods:{
        selectCheckboxAll(){
            this.value = this.value.length == this.data.option.length ? []  : this.data.option ;
        },
        selectEmpty(){
            this.value = ''
        },
        valueFilter(){
            switch(this.data.type){
                case 'number' :
                    const regexp = /^[0-9]*$/
                    if(!regexp.test(this.value)){
                        alert('숫자만 입력해주세요!')
                        this.value = '';
                    }
                break;
            }
        }
    }
}
</script>

<style lang="scss">


    .detail-{
        &wrap{
            position: relative;
            .tit{position:absolute;top:0; @extend .U_ft_sz07 ; min-width:300px}

            .input01{}
            
            .checkbox01 {
                display: inline-block !important;
                .v-messages{display:none!important}
                .v-input__slot{margin-bottom:0!important}
                
            }
            
            .radio01{   
                .v-messages{display:none!important}
            }
            
            .date01{}
            
            .mail01{}

            .number01{}

            .sc-info01{position: absolute;bottom:0;left:0}

        }
    }


</style>