import React, { useState } from 'react';


const ErrorBoundaryDemo = React.memo(() => {

    const [state, setState] = useState({id: 1, name: "Anil"})

    return (
    
        <div className='alert alert-primary'>
            <h4>Error Boundary Demo</h4>
            <p>Id: {state.id}</p>
            <p>Name: {state.name}</p>
            <p>State: {state}</p>
        </div>
    )

});
export default ErrorBoundaryDemo;