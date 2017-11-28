import React from 'react';
import ReactDOM from 'react-dom';

export default class Income extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			list : []
		}
	}

	

	render(){

		

		return(
			<div>
			<h3>Select Income</h3>
				<input type="checkbox" name="upto 3 lacks"/>Upto 3 lacks<br/>
				<input type="checkbox" name="3-5 lacks"/>3-5 lacks<br/>
				<input type="checkbox" name="5-10 lacks"/>5-10 lacks<br/>
				<input type="checkbox" name="10-15 lacks"/>10-15 lacks<br/>
				<input type="checkbox" name="15 and above"/>15 and above<br/>
			</div>
			);
	}


}

//indow.onload = ()=>{
	//ReactDOM.render(<Income/>,document.getElementById('app'));
//};
