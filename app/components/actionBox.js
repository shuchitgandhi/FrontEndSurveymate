import React, {Component} from 'react';

class ActionBox extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    var panelStyle = {
      container :{
        //height: 198,
        border: 7,
        borderRadius: 7,
        //padding: '403px 0px 0px 782px',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.3)',
      },
      blueHat : {
        height: 11.1,
        borderRadius: '7px 7px 0 0',
        backgroundColor: '#1a84eb',
      },
      heading : {
        //width: 118,
        //height: 30,
        textTransform: 'uppercase',
        fontFamily: 'verdana',  //here the font should be 'AvenirNextLTPro-Demi'
        padding: '25px 0px 0px 40px',
        fontSize: 24,
        //lineHeight: 1.0,
        letterSpacing: 1.5,
        color: '#000000',
      },
      list : {
        fontFamily: 'verdana',          //here the font should be 'AvenirNextLTPro-Regular'
        fontSize: 16,
        padding : '10px 0px 5px 40px',  //padding is in format 'top right bottom left'
      },
      listName : {
        //height: 21,
        paddingTop: 8,
        //lineHeight: 1.1,
        letterSpacing: 0.3,
        color: '#000000',
      },
      listAttribute : {
        //height: 28,
        opacity: 0.4,
        //paddingLeft: 15,
        lineHeight: 1.6,
        letterSpacing: 0.3,
        color: '#000000',
      },
      enter : {
        //width: 47,
        //height: 28,
        float : 'right',
        padding : '5px 30px 5px 5px',
        fontFamily: 'verdana',      //here the font should be 'AvenirNextLTPro-Demi'
        fontSize: 14,
        textDecoration : 'none',
        //lineHeight: 1.8,
        letterSpacing: 0.4,
        color: '#1a84eb',
}
    };
    return (
      <div style={panelStyle.container}>
		  <div style={panelStyle.blueHat}></div>

		  <div>
		  	<div className="row">
		  		<div style={panelStyle.heading}>{this.props.heading}</div>
		  	</div>
		  </div>
		  <div style={panelStyle.list}>
		    <div style={panelStyle.listName}>Survey:&nbsp;
		      <span style={panelStyle.listAttribute}>{this.props.surveyAnswer}</span>
		      	<a href="link here" style={panelStyle.enter}>ENTER</a>
		    </div>
		    <div style={panelStyle.listName}>Report:&nbsp;
		      <span style={panelStyle.listAttribute}>{this.props.reportAnswer}</span>
		      	<a href="link here" style={panelStyle.enter}>ENTER</a>
		    </div>
		    <div style={panelStyle.listName}>Raise Invoice:&nbsp;
		      <span style={panelStyle.listAttribute}>{this.props.raiseInvoiceAnswer}</span>
		      	<a href="link here" style={panelStyle.enter}>ENTER</a>
		    </div>
      	</div>
      </div>
    );
  }
}

export default ActionBox;
