import React from 'react';
import ReactDOM from 'react-dom';

export default class Person extends React.Component{

	constructor(props){
		super(props);
		this.state = {

		}
	}


	render(){
		return(
			<div>
			<h3>Select Person</h3>
				<input type="checkbox" name="Self"/> Self<br/>
				<input type="checkbox" name="Spouse"/> Spouse<br/>
				<input type="checkbox" name="Mother"/> Mother<br/>
				<input type="checkbox" name="Fatehr"/> Father<br/>
				<input type="checkbox" name="Son"/> Son<br/>
				<input type="checkbox" name="Daughter"/> Daughter<br/>
			</div>
			);
	}


}

//window.onload = ()=>{
	//ReactDOM.render(<Person/>,document.getElementById('app'));
//};
