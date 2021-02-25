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
    }
}