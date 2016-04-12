import React, {Component} from 'react';

class YourProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {name : '', number : '', gender : 'female'};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleNameChange(e){
    this.state.name = e.target.value;
    console.log(this.state.name);
  }

  handleNumberChange(e){
    this.state.number = e.target.value;
    console.log(this.state.number);
  }

  handleRadioChange(e){
    this.state.gender = e.target.value;
    console.log(e.target.value);
  }

  handleButtonClick(e){
    alert(this.state.name+" "+ this.state.number+" "+ this.state.gender);
    console.log("Hi there");
  }


  render() {
    var panelStyle = {

      heading : {
        fontFamily: 'verdana',  //here the font should be 'AvenirNextLTPro-Demi'
        padding: '25px 0px 0px 40px',
        fontSize: 56,
        letterSpacing: 1.5,
        textAlign : 'center',
        color: '#000000',
      },

      detailName : {
        fontFamily: 'verdana',          //here the font should be 'AvenirNextLTPro-Regular'
        fontSize: 12,
        padding : '33px 0px 5px 40px',
      },

      textBoxDiv : {
          padding : '10px 0px 5px 40px',
      },

      textBox : {
        width: 768,
        height: 62,
        borderRadius: 5,
        fontSize : 32,
        letterSpacing : 1.5,
        border: 'solid 1.5px #e2e2e2',
      },

      textBoxNumber : {
        width: 768,
        height: 62,
        borderRadius: 5,
        paddingLeft : 100,
        fontSize : 32,
        letterSpacing : 1.5,
        border: 'solid 1.5px #e2e2e2',
      },

      selectBox : {
        fontFamily: 'verdana',          //here the font should be 'AvenirNextLTPro-Regular'
        fontSize: 24,
        position: 'absolute',
        zIndex: 9999,
        top: 305,
        left: 80,
        padding : '10px 0px 5px 0px',  //padding is in format 'top right bottom left'
      },

      image : {
        padding : '20px 50px 5px 40px',
      },

    };
    return (
      <div className="container" >
        <div className="row" style={panelStyle.heading}>
            Your Profile
        </div>
        <div className="row" style={panelStyle.detailName}>
            NAME
        </div>
        <div className="row" style={panelStyle.textBoxDiv}>
          <input type="text"style={panelStyle.textBox} onChange={this.handleNameChange}/>
        </div>
        <div className="row" style={panelStyle.detailName}>
            PHONE NUMBER
        </div>
        <div className="row" style={panelStyle.textBoxDiv}>
          <input type="text" style={panelStyle.textBoxNumber} onChange={this.handleNumberChange}/>
          <select style={panelStyle.selectBox}>
            <option value="1">+91</option>
            <option value="1">+95</option>
          </select>
        </div>
        <div className="row" style={panelStyle.detailName}>
            AVATAR
        </div>
        <div style={panelStyle.image}>
          <img src="./glyphicons_free/user.png" width="50" height="50" />
          <img src="./glyphicons_free/girl.png" width="70" height="50" style={{position : 'relative', paddingLeft : 20}}/>
        </div>
        <div className="radio" style={{paddingLeft : 40,}} >
          <label className="radio-inline" style={{marginLeft : 20}}><input type="radio" name="optradio" value="male" onChange={this.handleRadioChange}/></label>
          <label className="radio-inline" style={{marginLeft : 50}}><input type="radio" name="optradio" value="female" defaultChecked="true" onChange={this.handleRadioChange}/></label>
        </div>
        <div style={{paddingLeft : 40, paddingTop : 20, fontFamily : 'verdana'}}>
          <button type="button" className="btn btn-primary" onClick={this.handleButtonClick} style={{padding : '10px 30px 10px 30px'}}>SUBMIT</button>
        </div>
      </div>
    );
  }
}

export default YourProfile;
