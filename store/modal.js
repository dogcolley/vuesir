export default {
    state:{
        modalList : [],
        list:{}
    },
    mutations: {
        addModalList(state, data) {
            state.modalList.push(data)
        },
        deleteModalList(state, data) {
            state.modalList.shift()
        },
        getList(state,data){
            state.list = data;
        }
    },
    actions: {
        GET_LIST(sto, data){
            switch(data.type){
                case 'member':
                    this.dispatch('member/GET_LIST').then(data=>{
                        sto.commit('getList')
                    }) 
                break;
            }
        }
    }
}
