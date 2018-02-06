import React, { Component } from 'react';

// import BNode from '../components/BNode/BNode';
import BTree from '../components/BTree/BTree';

import './setting.css'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: []
    }
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
        <BTree/>
      </div>
    );
  }

}

export default Main;
