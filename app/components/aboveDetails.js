import React, {Component} from 'react';


class AboveDetail extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
  
	var panelStyle = {
      container :{
        //width: 526,
        height: 255,
        border: 7,
        borderRadius: 7,
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.3)',
      },
      
      blueHat : {
        //width: 526,
        height: 11.1,
        borderRadius: '7px 7px 0 0',
        backgroundColor: '#1a84eb',
      },
      
      heading : {
        fontFamily: 'verdana',  //here the font should be 'AvenirNextLTPro-Demi'  
        padding: '0px 0px 0px 5px',
        fontSize: 40,
        lineHeight: 1.0,
        color: '#000000',
      },
      envelope : {
      	fontSize : 20,
  		opacity: 0.5,
      },
       change : {
        float : 'right',
        paddingTop : 10,
        paddingRight : 50,
        fontFamily: 'verdana',      //here the font should be 'AvenirNextLTPro-Demi'  
        fontSize: 14,
        textDecoration : 'none',
        
        
        color: '#1a84eb',
	},
	};
  
  	return(
  		<div>
  			<div className="row">
  				<div className="col-xs-7">
  					<span style={panelStyle.heading}>Project F</span>
  				</div>
  				<div className="col-xs-5">
  					<div style={{fontFamily: 'verdana',fontSize : 12, opacity : 0.5}}>Last Activity</div>
  					<div>
  						<span style={{fontFamily: 'verdana',fontSize : 18, opacity : 0.7,}}>2:46 pm</span>
  						<span className="glyphicon glyphicon-save" style={{paddingLeft : 40, opacity : 0.7}}></span>
  					</div>
  				</div>
  			</div>
  			
  			<div className="row" style={{paddingTop : 15}}>
  				<div className="col-xs-2">
  					<img src="./src/hi.png" className='img-circle img-responsive navbar-right' />
  				</div>
  				<div className="col-xs-6" >
  				<span style={{fontSize: 20, color: '#1a84eb', paddingTop : 5, paddingRight : 20}}>Nirav Faraswami</span>
  				
  				<span className="glyphicon glyphicon-envelope" style={{opacity : 0.5, paddingTop : 9, fontSize : 20,}}></span>
  				</div>
  				<div className="col-xs-4">
  					<a href="link here" style={panelStyle.change}>CHANGE</a>
  				</div>
  			</div>
  			
  		</div>
  	);
  }
  
}

export default AboveDetail;
