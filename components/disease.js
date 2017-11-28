import React from 'react';
import ReactDOM from 'react-dom';

export default class Disease extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			list : []
		}
	}

	

	render(){

		

		return(
			<div>
			<h3>Select Disease</h3>
				<input type="checkbox" name="lukemia"/>Lukemia<br/>
				<input type="checkbox" name="polio"/>Polio<br/>
				<input type="checkbox" name="Asthma"/>Asthma<br/>
				<input type="checkbox" name="Hernia"/>Hernia<br/>
				<input type="checkbox" name="HIV"/>HIV<br/>
			</div>
			);
	}


}

//window.onload = ()=>{
	//ReactDOM.render(<Disease/>,document.getElementById('app'));
//};
