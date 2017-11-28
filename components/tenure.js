import React from 'react';
import ReactDOM from 'react-dom';

export default class Tenure extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			list : []
		}
	}

	

	render(){

		

		return(
			<div>
			<h3>Select Tenure</h3>
				<input type="checkbox" name="5"/>5<br/>
				<input type="checkbox" name="10"/>10<br/>
				<input type="checkbox" name="15"/>15<br/>
				<input type="checkbox" name="20"/>20<br/>
				<input type="checkbox" name="lifetime"/>lifetime<br/>
			</div>
			);
	}


}

//window.onload = ()=>{
	//ReactDOM.render(<Tenure/>,document.getElementById('app'));
//};
