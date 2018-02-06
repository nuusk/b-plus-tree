import React, { Component } from 'react';
import './InsertField.css';

class InsertField extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    // this.setState({
    //   query: event.target.value
    // });
    // setTimeout(()=> {
    //   this.props.setQuery(this.state.query);
    //   this.props.getData(this.state.query);
    // }, 2000);
  }

  render() {
    return (
      <div className="InsertField">
      <input id="insert-field"
           placeholder="type number"
           type="text"
           onChange={this.handleInput} />
      </div>
    );
  }
}


export default InsertField;
