import React, { Component } from 'react';

// import BNode from '../components/BNode/BNode';
import BTree from '../components/BTree/BTree';
import InsertField from '../components/InsertField/InsertField';
import Button from '../components/Button/Button';

import './setting.css'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: []
    }

    this.insertValue = this.insertValue.bind(this);
  }

  insertValue(number) {

  }

  render() {
    //zmienna view zawiera główne komponenty
    // // let view;
    // // //w zależności od stanu widoku Main.js, zmieniamy główne komponenty
    // switch (this.state.view) {
    //   case 'query':
    //     view = (
    //       <span>
    //       <BTree />
    //       </span>
    //     )
    //     break;
    // }

    return (
      <div className="main-view">
        <InsertField insertValue={this.insertValue}/>
        <Button />
        <BTree/>
      </div>
    );
  }

}

export default Main;
