export default {
    state:{
        test_sms : 1
    },
    mutations: {
        test_sms_add (state){
            state.test_sms ++;
        }
    },
    actions: {
        test_sms_add_action (sto){
            sto.commit('test_sms_add')
        },
        test_sms_return(sto){
            return 'ok'
        },
        test_other_action(sto){
            console.log(sto)
            console.log(this)
            this.dispatch('TEST')
        }
    }
}