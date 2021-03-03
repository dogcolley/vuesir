export default {
    state:{
        modalList : [],
    },
    mutations: {
        addModalList(state, data) {
            state.modalList.push(data)
        },
        deleteModalList(state, data) {
            //state.modalList.splice(data, 1)
            state.modalList.shift()
        },
    },
    actions: {

    }
}