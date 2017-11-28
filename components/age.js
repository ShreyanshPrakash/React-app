import React from 'react';
import ReactDOM from 'react-dom';

export default class Age extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			list : []
		}
	}

	

	render(){

		

		return(
			<div>
			<h3>Select Age</h3>
				<select name="Age">
					<option value="18 Years">18 Years</option>
					<option value="19 Years">19 Years</option>
					<option value="20 Years">20 Years</option>
					<option value="21 Years">21 Years</option>
					<option value="22 Years">22 Years</option>
				</select>
				
				
			</div>
			);
	}


}

//window.onload = ()=>{
	//ReactDOM.render(<Age/>,document.getElementById('app'));
//};
