
export interface AuthState {
    isAuthenticated:boolean;
    userName: string;
    accessToken: string;
    refreshToken: string
}
interface AuthAction{
    type:string,
    payload: AuthState,
    token?: string
}
const initData : AuthState = {
    isAuthenticated:false,
    userName: "",
    accessToken: "",
    refreshToken: ""
}

// Reducer has to be synchronous(it cannot have any async operations)
export const authReducer = (state=initData, action: AuthAction) => {

    if(action.type === "SET_AUTH"){
        return {
            
            ...action.payload
        }

        // state = {
        //     ...action.payload
        // };
    }

    if(action.type === "UPDATE_ACCESS_TOKEN"){

        if(action.token){
            return{
                ...state,
                accessToken: action.token
            }
        }
        
    }
    return state;
}