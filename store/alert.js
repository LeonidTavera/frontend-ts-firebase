export const mutations = {
    setAlert (state, {message, type}) {
        state.show = truestate.message = message
        state.type = type
        setTimeout(() => {
            state.show = false 
            state.message = ''
        }, 3000)
    }
}