import Hello from "../components/Hello";
import HomeIcon from '@mui/icons-material/Home';
import TimerIcon from '@mui/icons-material/Timer';
import TypedCounter from "../components/TypedCounter";
import ListProducts from "../components/products/ListProducts";
import CategoryIcon from '@mui/icons-material/Category';
import GadgetStore from "../components/gadgets/GadgetStore";
import DevicesIcon from '@mui/icons-material/Devices';
import ViewCart from "../components/gadgets/ViewCart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Login from "../components/auth/Login";

export interface AppRoute{

    id: number; //unique
    name: string;
    path: string;
    component: any;
    secure: boolean;
    menu: boolean;
    icon?: any;
    props?: any
}

export const appRoutes : Array<AppRoute> = [

    {
        id: 1,
        name: "Home",
        path: "/home",
        component: Hello,
        secure: false,
        menu: true,
        icon: HomeIcon
    },
    {
        id: 2,
        name: "Counter",
        path: "/counter",
        component: TypedCounter,
        secure: false,
        menu: true,
        icon: TimerIcon
    }
    ,
    {
        id: 3,
        name: "Products",
        path: "/products",
        component: ListProducts,
        secure: true,
        menu: true,
        icon: CategoryIcon
    },
    {
        id: 4,
        name: "Gadgets",
        path: "/gadgets",
        component: GadgetStore,
        secure: false,
        menu: true,
        icon: DevicesIcon
    },
    {
        id: 5,
        name: "ViewCart",
        path: "/cart",
        component: ViewCart,
        secure: false,
        menu: true,
        icon: ShoppingCartIcon
    },
    {
        id: 6,
        name: "Login",
        path: "/login",
        component: Login,
        secure: false,
        menu: false
    },


]