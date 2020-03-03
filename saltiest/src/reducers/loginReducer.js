export const loginReducer = (state, action) => {
    switch(action.type){
        // Read in the data from the onChange handler of each form
        case 'FORM': 
            return {
                ...state,
                [action.field]: action.value
            }
        // When the user attempts to log in, zero the fields and set loading to true
        case 'LOGIN':
            return {
                ...state,
                username: '',
                password: '',
                loading: true
            }
        // If the log in attempt is successful, set the user to be logged in and set loading to be false
        case 'SUCCESS':
            return {
                ...state,
                loading: false,
                loggedin: true
            }
        case 'FAILURE':
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}