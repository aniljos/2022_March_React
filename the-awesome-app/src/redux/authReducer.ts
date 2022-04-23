
interface AuthState {
    isAuthenticated:boolean;
    userName: string;
    accessToken: string;
    refreshToken: string
}
interface AuthAction{
    type:string,
    payload: AuthState
}
const initData : AuthState = {
    isAuthenticated:false,
    userName: "",
    accessToken: "",
    refreshToken: ""
}


export const authReducer = (state=initData, action: AuthAction) => {

    return state;
}