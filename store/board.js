export default {
    state:{
        lists:[],
        items:[],
    },
    mutations: {
        reset_item(sto){
            sto.lists = []
            sto.items = []
        },

    },
    actions: {
        RESET_ITEM(state,data){

        },
        CHOISE_LISTS(state,data){

        },
        SET_LIST(state,data){

        },
        GET_ITEMS(state,data){

        },
        GET_ITEM(state,data){

        },
        GET_CATE(state,data){

        },
        SET_CATE(state,data){

        }, 
    }
}