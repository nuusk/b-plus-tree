import React, { Component } from 'react';
import './BTree.css';
import BNode from '../BNode/BNode';

class BTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1
    }
    this.insertValue = this.insertValue.bind(this);
  }

  insertValue(value) {

  }

  render() {
    return (
      <div className="BTree">
        {this.state.level >= 1 &&
          <BNode />
        }
      </div>
    );
  }
}


export default BTree;
