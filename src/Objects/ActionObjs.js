export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADDTOLIST = 'ADDTOLIST'
export const REMOVEITEM = 'REMOVEITEM'
export const INITIATE = 'INITIATE'

let nextid = 0;

export const increment = () => ({
    type:INCREMENT,
})

export const decrement = () => ({
    type:DECREMENT,
})

export const addtolist = (content) => ({
    type:ADDTOLIST, payload:{
        id: nextid++,
        content
    }
})

export const removeitem = (id) =>({
    type:REMOVEITEM, payload:{ id }
})

export const initiate = () =>({
    type:INITIATE
})