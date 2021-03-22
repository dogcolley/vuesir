<template>
    <v-container class="U-from-wrap">
        <form @submit="submitAction">
            안녕 나는 서브및!
            <div clas="U-from-btns">
                <button type="submit">저장</button>
                <button type="button">리셋</button>
            </div>
        </form>
    </v-container>
</template>

<script>
export default {
    props:{
        action:String
    },
    methods:{
        submitAction(){
            this.$store.dispatch(`${this.action}`)
            return false
        },
        submitReset(){

        }
    }
}
</script>

<style>

/* manager@x-lation.net */
</style>