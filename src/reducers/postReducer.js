export const initialState = {
    comment: ''
}

export const postReducer = (state,action) => {
    switch(action.type){
        case 'FORM':
            return {
                ...state,
            }
    }
}