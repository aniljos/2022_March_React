import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

interface SimpleProps{
    ctr: number,
    onUpdate: (v: number) => void
}

interface SimpleType{
    message: string,
    execute: () => void
}


//React.memo => 16.3 => rerender the component only if the props or state changes
//React.forwardRef ==> to get a reference to a functional component

const Simple = React.memo(React.forwardRef((props: {ctr: number, onUpdate:(value: number) => void }, ref) => {

    console.log("rendering simple component");

    useImperativeHandle(ref, () => {
        return {
            message: "Hello Simple Component",
            execute: () => {
                alert("in execute of simple...")
            }
        }
    })

    return (
        <div>
            <h4>Simple Component</h4>
            <div className='alert alert-warning'>
                ctr: {props.ctr}
            </div>
            <div>
                <button className='btn btn-warning' 
                        onClick={() => props.onUpdate(props.ctr + 2)}>Update Count</button>
            </div>
        </div>
    )   
}));



function HooksDemo(){

    //console.log("rendering HooksDemo");
    const [count, setCount] = useState(10);
    const [message, setMessage] = useState("Hooks")
    const simpleRef = useRef<SimpleType>(null);
   
    // useCallback(callback, [dependencies]);
    const updateCount = useCallback( (value: number)=>{
        setCount(value);
    }, []);
   

    //useEffect(callback, [dependencies])

    //useEffect with no dependencies ==> equivalent to the componentDidMount
    // useEffect(() => {

    //     console.log("[useEffect] : equivalent to the componentDidMount");


    //     //callback returned form the useEffect with no dependecies => equivalent to the componentWillUnmount
    //     return () => {
    //         console.log("[useEffect] : equivalent to the componentWillUnmount");
    //     }

    // }, []);


    //useEffect with dependency to count(called when count changes) ==> equivalent to the componentDidUpdate
    // useEffect(() => {
    //     console.log("[useEffect] : equivalent to the componentDidUpdate of count", count);
    // }, [count]);

    // useEffect(() => {
    //     console.log("[useEffect] : equivalent to the componentDidUpdate of message", message);
    // }, [message])

    // useEffect(() => {
    //     console.log("[useEffect] : equivalent to the componentDidUpdate of message & count", message, count);
    // }, [message, count])


    function invokeSimpleFn(){
        console.log("simpleRef", simpleRef)
        simpleRef.current?.execute();
    }


    return (
        <div>
            <h3>Hooks Demo</h3>
            <div className='alert alert-primary'>
                Count: {count}
                <p>Message: {message}</p>
            </div>
            <br/>
            <button className='btn btn-primary' onClick={() => setCount(count + 1)}>Increment Count</button>

            <div className='form-group'>
                <label htmlFor='message'>Message</label>
                <input className='form-control' value={message} onChange={(e) => setMessage(e.target.value)}/>
            </div>
            <br/>
            <button className='btn btn-danger' 
                        onClick={invokeSimpleFn}>Parent: Execute method on Simple Component</button>

            <br/>
            <Simple ref={simpleRef} ctr={count} onUpdate={updateCount}/>

           
            
        </div>
    )
}

export default HooksDemo;