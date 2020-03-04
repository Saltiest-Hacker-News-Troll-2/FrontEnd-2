export const initialState = {
    text: ''
}

export const postReducer = (state,action) => {
    switch(action.type){
        case 'FORM':
            return {
                ...state,
                [action.field]: action.value
            }
        case 'POST':
            return {
                ...state,
                text: ''
            }
        default: 
            return state;
    }
}