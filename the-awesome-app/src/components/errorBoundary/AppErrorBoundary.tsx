import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class AppErrorBoundary extends PureComponent{

    state = {
        hasError: false
    }

    componentDidCatch(error: any, info: any){

        if(error){
            this.setState({hasError: true});
        }
    }

    reload = () => {
        this.setState({hasError: false});
    }

    render(): React.ReactNode {
        
        if(this.state.hasError){

            return(
                <div className='alert alert-danger'>
                    Something went wrong. Please try later...
                    <Link to="/home" onClick={this.reload}>Reload</Link>
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