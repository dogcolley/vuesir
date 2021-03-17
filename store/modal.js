export default {
    state:{
        modalList : [],
    },
    mutations: {
        addModalList(state, data) {
            state.modalList.push(data)
        },
        deleteModalList(state, data) {
            state.modalList.shift()
        },
        
    },
    actions: {
    }
}
