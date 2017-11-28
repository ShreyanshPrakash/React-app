import React from 'react';
import ReactDOM from 'react-dom';

export default class Gender extends React.Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}


	render(){
		return(
			<div>
				<h3>Select Gender</h3>
				<select name="gender" value="Gender">
					<option value="Male">Male</option>
					<option value="Female">Female</option>
				</select>
			</div>
			);
	}


}

//indow.onload = ()=>{
//	ReactDOM.render(<Gender/>,document.getElementById('app'));
//};
