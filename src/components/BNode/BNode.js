import React, { Component } from 'react';
import './BNode.css';

class BNode extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }

  render() {
    return (
      <div className="BNode">
        <div className="node-wrapper">
          {this.props.number}
        </div>
      </div>
    );
  }
}


export default BNode;
