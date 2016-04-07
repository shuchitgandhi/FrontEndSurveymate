import React, {Component} from 'react';
import SignUp from "./SignUp"
export default class  Project_info extends Component{

constructor(props)
{
  super(props);

  this.state={checked:false,clicked:false};
  this.func=this.func.bind(this);
  this.rendPage=this.rendPage.bind(this);
}
rendPage()
{

  this.setState({clicked:true});
}
func()
{
  if(this.refs.cb.checked)
  {
    this.setState({checked:true});
  }
  else {
    this.setState({checked:false});
  }
}
  render()
  {
    var btclass;
    var st={
          small_:{
            opacity: 0.5,
             fontSize: "12px",
             letterSpacing: "0.3px",
             color: "#000000",
          },
          pro:{
            width:"50%",
            backgroundColor:"#1a84eb",
          },
          pro_h:{
            borderRadius: "2px",
            height:"9px",
          },
          in:{
            height: "50px",
            borderRadius: "5px",
            border: "solid 1.5px #e2e2e2",
          },
          bttn_attri:{
            height:"44px",
            backgroundColor:"#d1d1d1",
            border:"none"

          },
          tex_:{
            fontSize:12,
            color: "#ffffff",
            letterSpacing: 0.3,

          },

    }

    if(this.state.checked)
    {
      btclass="btn btn-info  btn-lg col-md-1 col-sm-2 col-xs-3";
      st.bttn_attri.backgroundColor="#1a84eb";
    }
    else {
      btclass="btn btn-info  btn-lg col-md-1 col-sm-2 col-xs-3  disabled";
      st.bttn_attri.backgroundColor="#d1d1d1";
    }
    if(this.state.clicked){
      var data={proj_name:this.refs.pname.value,repondents:this.refs.noResp.value, startDate:this.refs.stdate.value}
    return(
      <SignUp info={data} />
    );
  }
      return (
        <div>
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-2">
              <div className="col-md-7" style={st.small_}>
                STEP 1 OF 2
              </div>
              <div className="col-md-5">
              <div className="progress"style={st.pro_h}>
                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={st.pro}>
                  <span className="sr-only"></span>
                </div>
              </div>
              </div>
            </div>
          <div className="col-md-5"></div>
          </div>

          <div>
            <h1 className="text-center">Tell us about your project</h1>
          </div>

          <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">

            <form role="form">
              <div className="form-group" >
                <label for="usr">PROJECT NAME:</label>
                <input type="text" className="form-control" id="usr" style={st.in} placeholder="What is your Project name?" ref="pname"/>
              </div>
              <div className="form-group">
                <label for="sel1">Number Of Respondents:</label>
                <select className="form-control" id="sel1" style={st.in} ref="noResp">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
              <div className="form-group">
                <label for="sel1">WHEN DO YOU WANT US TO START</label>
                <select className="form-control" id="sel1" style={st.in} ref="stdate">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>

            </form>
          </div>

          <div className="col-md-2"></div>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
              <div className="col-md-10">
                <p className="text-uppercase small"><strong>sign our NDA</strong></p>
                <div className="checkbox">
                  <label><input type="checkbox" value="" ref="cb"onClick={this.func}/> <strong>I WOULD LIKE TO SEND AN  NDA WITH SURVEYMATE.  </strong><a ><u>LEARN HERE</u></a>
                  </label>
                </div>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-9 col-sm-9 col-xs-9"></div>
              <button type="button" href="#" className={btclass} style={st.bttn_attri} onClick={this.rendPage}><small>NEXT </small>
                <small><span className="glyphicon glyphicon-menu-right glyphicon"></span></small>
              </button>
              <div className= "col-md-2 col-sm-1 "></div>
            </div>
          </div>

      );
  }
}
