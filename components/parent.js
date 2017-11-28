import React from 'react';
import ReactDOM from 'react-dom';
import Gender from './gender.js';
import Person from './person.js';
import Age from './age.js';
import Disease from './disease.js';
import Income from './income.js';
import Tenure from './tenure.js';
import Cover from './cover.js';

class Parent extends React.Component{
	constructor(props){
    super(props);
    this.state = {}
  }

    

  render(){
    return(
      <div id="parent">
      <form>
        <Gender/>
        <Person/>
        <Age/>
        <Disease/>
        <Income/>
        <Tenure/>
        <Cover/>
      </form>
      </div>
    )
  };
}
window.onload = ()=>{
  ReactDOM.render(<Parent message="hello world!"/>,document.getElementById('app'));
};
