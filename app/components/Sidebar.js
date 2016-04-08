import React, {Component} from 'react';


class Sidebar extends Component {
  constructor(props) {
    super(props);
	this.state = {current : 'home'};
  }
  
  onIconClick(IconName){
  	document.getElementById(IconName).style.color = '#1a84eb';
  	document.getElementById(IconName+"Name").style.color = '#1a84eb';
  	document.getElementById(this.state.current).style.color = '#808080';
  	document.getElementById(this.state.current+"Name").style.color = '#808080';
  	this.state.current = IconName;
  	//code for redirecting to another page can come here
  }
  
  render() {
	
	var panelStyle = {
      container :{
        width: 70,
        backgroundColor: '#fafafa',
        float : 'left',
      },
      
      homename : {
      	fontSize : 12,
      	paddingLeft : 0,
      	textAlign : 'center',
      	color : '#1a84eb',
      	textDecoration : 'none',
      },
      
      name : {
      	fontSize : 12,
      	paddingLeft : 0,
      	textAlign : 'center',
      	color : '#808080',
      	textDecoration : 'none',
      },
      
      homeIcon : {
      	paddingBottom : 0,
      	marginTop : 20,
      	marginLeft : 10,
      	marginRight : 20,
  		color : '#1a84eb',
  		fontSize : 20,
      },
      
      icon : {
      	paddingBottom : 0,
      	marginTop : 20,
      	marginLeft : 10,
      	marginRight : 20,
  		color : '#808080',
  		fontSize : 20,
      },      
    };

	return(
		<div className="container" style={panelStyle.container}>
			<div  onClick = {this.onIconClick.bind(this, "home")} style={{cursor : 'pointer'}}>
				<span id = "home" className="glyphicon glyphicon-home" style={panelStyle.homeIcon}></span>
				<span id = "homeName" style={panelStyle.homename}>Home</span>
			</div>
			<div  onClick = {this.onIconClick.bind(this, "projects")} style={{cursor : 'pointer'}}>
				<span id = "projects" className="glyphicon glyphicon-list" style={panelStyle.icon}></span>
				<span id = "projectsName" style={panelStyle.name}>Projects</span>
			</div>
			<div  onClick = {this.onIconClick.bind(this, "customers")} style={{cursor : 'pointer'}}>
				<span id = "customers" className="glyphicon glyphicon-home" style={panelStyle.icon}></span>
				<span id = "customersName" style={panelStyle.name}>Customers</span>
			</div>
			<div  onClick = {this.onIconClick.bind(this, "agents")} style={{cursor : 'pointer'}}>
				<span id = "agents" className="glyphicon glyphicon-user" style={panelStyle.icon}></span>
				<span id = "agentsName" style={panelStyle.name}>Agents</span>
			</div>
			<div  onClick = {this.onIconClick.bind(this, "settings")} style={{cursor : 'pointer'}}>
				<span id = "settings" className="glyphicon glyphicon-cog" style={panelStyle.icon}></span>
				<span id = "settingsName" style={panelStyle.name}>Settings</span>
			</div>
		</div>
	);  
  
  }
  
}

export default Sidebar;

