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
                fname: '',
                lname: '',
                username: '',
                email: '',
                password: '',
                loading: true
            }
        // If the post is successful, return the state and set loading to false
        case 'SUCCESS': 
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}