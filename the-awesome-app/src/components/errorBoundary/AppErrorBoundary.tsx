import React, { PureComponent } from 'react';

class AppErrorBoundary extends PureComponent{

    state = {
        hasError: false
    }

    componentDidCatch(error: any, info: any){

        if(error){
            this.setState({hasError: true});
        }
    }

    render(): React.ReactNode {
        
        if(this.state.hasError){

            return(
                <div className='alert alert-danger'>
                    Something went wrong. Please try later...
                </div>
            )
        }
        else{
            return (
                <div>{this.props.children}</div>
            );
        }
        
    }
}

export default AppErrorBoundary;