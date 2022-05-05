import React from "react";


// HOC is a function that receives the component its going to wrap


export const withBorder = (Component: any) => {

    //returns a new component(functional or class)
    return (props: any) => {

        //implementation is to modify or inject behaviot to the Component
        return (
            <div style={{border : "2px solid red", padding: "17px"}}>
                <Component {...props}/>
            </div>
        )
    }

}