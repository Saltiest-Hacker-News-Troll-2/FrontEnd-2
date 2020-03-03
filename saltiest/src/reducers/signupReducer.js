export const signupReducer = (state, action) => {
    switch(action.type){
        // Read in the data from the onChange handler of each form
        case 'FORM': 
            return {
                ...state,
                [action.field]: action.value
            }
        // When the user attempts to register, zero the fields and set loading to true
        case 'SUBMIT':
            return {
                ...state,
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                password: ''

            }
        default:
            return state;
    }
}