export const loginReducer = (state, action) => {
    switch(action.type){
        // Read in the data from the onChange handler of each form
        case 'FORM': 
            return {
                ...state,
                [action.field]: action.value
            }
        // When the user attempts to log in, zero the fields
        case 'LOGIN':
            return {
                ...state,
                username: '',
                password: '',
            }
        default:
            return state;
    }
}