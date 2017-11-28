import React from 'react';
import ReactDOM from 'react-dom';

export default class Cover extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			list : []
		}
	}

	

	render(){

		

		return(
			<div>
			<h3>Select Cover</h3>
				<select name="Age">
					<option value="10lacks">10 lacks</option>
					<option value="20lacks">20 lacks</option>
					<option value="25lacks">25 lacks</option>
					<option value="30lacks">30 lacks</option>
					<option value="40lacks">40 lacks</option>
				</select>
				
				
			</div>
			);
	}


}

//window.onload = ()=>{
	//ReactDOM.render(<Cover/>,document.getElementById('app'));
//};
