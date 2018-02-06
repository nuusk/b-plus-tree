import React, { Component } from 'react';
import './BTree.css';
import BNode from '../BNode/BNode';

class BTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 2
    }
    this.insertValue = this.insertValue.bind(this);
  }

  insertValue(value) {

  }

  render() {
    let tree;
    // //w zależności od stanu widoku Main.js, zmieniamy główne komponenty
    switch (this.state.level) {
      case 1:
        tree = (
          <div className="tree-wrapper">
            <div className="level-one">
              <BNode />
            </div>
          </div>
        )
        break;
      case 2:
        tree = (
          <div className="tree-wrapper">
            <div className="level-one">
              <BNode number={4}/>
            </div>
            <div className="level-two">
              <BNode />
              <BNode />
            </div>
          </div>
        )
        break;
    }
    return (
      <div className="BTree">
        { tree }
      </div>
    );
  }
}


export default BTree;
