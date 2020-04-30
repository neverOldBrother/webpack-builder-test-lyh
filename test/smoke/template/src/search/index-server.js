'use strict'

// import React from 'react'
// import './search.less'
// import '../../common'
// import logo from '../images/app1.png';
// import {a} from './tree-shaking'
// import largeNumber from 'large-number-for-neveroldbrother'
const React = require('react')
const largeNumber = require('large-number-for-neveroldbrother')
const logo = require('../images/app1.png')
const {a} = require('./tree-shaking')
require('./search.less')
require('../../common')


class Search extends React.Component {
  constructor(){
    super(...arguments);
    this.state = {
      Text: null
    }
  }
  loadComponent(){
    import('./text.js').then((text)=>{
      this.setState({
        Text:text.default
      })
    }) 
  }
  render() {
    const funcA = a();
    const {Text} = this.state;
    const addResult = largeNumber('999','1');
     return <div className="search-text">搜索文字666{funcA}
     { Text ? <Text /> : ''}
     {addResult}
     <img src={logo} onClick = {this.loadComponent.bind(this)}></img>
     </div>
  }
}

module.exports = <Search/>;