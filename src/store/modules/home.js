export const home = {
    namespaced: true,
    state: {
        name: "",
    },
    mutations: {
        setName(state, value) {
            state.name = value;
        }
    },
}