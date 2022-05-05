
import { AppState } from './store';


// export const logMiddleware = (store: any) => {

//     return (next: any) => {
       
//         return (action: any)=> {

//             console.log("[logMiddleware before]", action.type, store.getState());
//             next(action);
//             console.log("[logMiddleware after]", action.type, store.getState());

//         }
//     }
// }

export const logMiddleware = (store: any) => (next: any)=> (action : any) => {

    console.log("[logMiddleware before]", action.type, store.getState());
    next(action);
    console.log("[logMiddleware after]", action.type, store.getState());
}