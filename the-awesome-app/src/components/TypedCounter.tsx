import React, { ChangeEvent, Component } from "react";
import {withBorder} from '../components/hoc/withBorder';

interface CounterProps{
  title : string
}

interface CounterState{
  count: number
}


class Counter extends Component<CounterProps, CounterState> {
  // state should be considered to be immutable
  state : CounterState = {
    count: 5,
  };

  inputRef = React.createRef<HTMLInputElement>();

  constructor(props: CounterProps) {
    super(props);

    // takes care of the "this" reference
    this.decr = this.decr.bind(this);
  }

  inc = () => {
    console.log("invoking inc...", this);
    //this.state.count++;
    const updatedCount = this.state.count + 1;

    //setState is async
    //this.setState(slice of the state to update, callback invoked after the state updates)
    // state should be considered to be immutable
    this.setState(
      {
        count: updatedCount,
      },
      () => {
        console.log("count", this.state.count);
      }
    );
  };

  decr() {
    const updatedCount = this.state.count - 1;

    //setState is async
    //this.setState(slice of the state to update, callback invoked after the state updates)
    this.setState(
      {
        count: updatedCount,
      },
      () => {
        console.log("count", this.state.count);
      }
    );
  }

  change = (evt : ChangeEvent<HTMLInputElement>) => {
    console.log(evt);
    //evt.target ==> input field
    const value = evt.target.value;
    this.setState({
      count: value ? parseInt(value) : 0,
    });
  };

  update = () => {
    console.log("inputref", this.inputRef);
    
    // if(this.inputRef.current !== null){
    //   console.log("value", this.inputRef.current.value);
    // }
    
    console.log("value", this.inputRef.current!.value);
    const value = this.inputRef.current!.value;
    
    if (value) {
      this.setState({
        count: parseInt(value),
      });
    }
  };
  render() {
    //console.log("Counter props: ", this.props);

    return (
      <div>
        <h4>Title: {this.props.title}</h4>
        <h5>Count : {this.state.count}</h5>
        <div>
          <button onClick={this.inc}>Inc</button>&nbsp;
          <button onClick={this.decr}>Decr</button>
        </div>

        <div>
          {/* Controlled Input */}
          Count:{" "}
          <input
            type="number"
            value={this.state.count}
             onChange={this.change}
          />
        </div>
        <div>
          {/* UnControlled Input */}
          Count: <input ref={this.inputRef} type="number" />
          &nbsp; <button onClick={this.update}>Update</button>
        </div>
      </div>
    );
  }
}

export default withBorder(Counter);
