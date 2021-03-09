<template>
    <v-template class="detail-wrap" style="position:relative" >


        <span class="tit"
            v-if="data.type == 'checkbox' || data.type == 'radio01' "
        >{{data.text}}</span>

        <v-text-field label="Main input" class="input01" hide-details="auto" v-if="data.type == 'text'"></v-text-field>

        <v-radio-group v-if="data.type == 'radio'" row class="radio01" >
            <v-radio
                v-for=" (value, id) in data.option"
                :key="id"
                :label="`${value}`"
                :value="value"
                color="#6292FF"
            ></v-radio>
        </v-radio-group>

        <div v-if="data.type == 'checkbox'"></div>
        <v-checkbox class="checkbox01" v-if="data.type == 'checkbox'" color="#6292FF" :label="`Checkbox 1`" v-for=" (value,id) in data.option" :key="id" ></v-checkbox>

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
              label="Picker without buttons"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker ></v-date-picker>
        </v-menu>

        


    </v-template>
</template>

<script>
export default {
    props:{
        data:Object,
        name:String
    },
    data:(()=>{
    }),
}
</script>

<style lang="scss">


    .detail-{
        &wrap{
            .tit{position:absolute;top:0; @extend .U_ft_sz07 ; min-width:300px}

            .input01{}
            
            .checkbox01 {
                display: inline-block !important;
                .v-messages{display:none!important}
                .v-input__slot{margin-bottom:0!important}
                
            }
            
            .radio01{/*margin-top:0!important*/}
            
            .date01{}
            
            .mail01{}

            .number01{}

        }
    }


</style>