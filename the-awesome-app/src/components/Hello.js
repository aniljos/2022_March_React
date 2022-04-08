//functional component

function Hello(props){

    
    console.log("Hello props", props);
    //props.title = "adasd";  // will not work since its read-only

    // var message = "Some message";
    // if(props.title){
    //     message = props.title
    // }

    //return the JSX
    return (
        <div>
            <h4>{props.title ? props.title : "No Message Set: "} React</h4>
            <p>This is a presentational component</p>
            <h4>Rendered at {new Date().toLocaleString()}</h4>
            <h4>Expression {3 + 4}</h4>
        </div>
    );
}

export default Hello;