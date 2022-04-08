import {Component} from 'react';





class Counter extends Component{

    state = {
        count: 5
    };
    
    inc= () => {
        console.log("invoking inc...", this);
        //this.state.count++;
        const updatedCount = this.state.count + 1;


        //setState is async
        //this.setState(slice of the state to update, callback invoked after the state updates)
        this.setState({
            count : updatedCount
        }, () => {
            console.log("count", this.state.count);
        });
        
    }

    decr = () => {
        const updatedCount = this.state.count - 1;


        //setState is async
        //this.setState(slice of the state to update, callback invoked after the state updates)
        this.setState({
            count : updatedCount
        }, () => {
            console.log("count", this.state.count);
        });
    }

    render(){

        //console.log("Counter props: ", this.props);

        return (
            <div>
                <h4>Title: {this.props.title}</h4>
                <h5>Count : {this.state.count}</h5>
                <div>
                    <button onClick={this.inc}>Inc</button>&nbsp;
                    <button onClick={this.decr}>Decr</button>
                </div>
            </div>
        )
    }
}

export default Counter;

