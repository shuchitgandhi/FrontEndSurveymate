import React, {Component} from 'react';
export default class SignUp extends Component{

constructor(props)
{
  super(props);
  this.state={em:false,pwd:false};
  this.validateEmail=this.validateEmail.bind(this);
  this.pwdCheck=this.pwdCheck.bind(this);
  this.sendData=this.sendData.bind(this);

}

validateEmail() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     this.setState({em:re.test(this.refs.email.value.trim())});


}
pwdCheck()
{
  var pd=this.refs.pwrd.value.trim();

  if(pd=="")
  this.setState({pwd:false});
  else {
    this.setState({pwd:true});
  }
}
sendData()
{
  console.log(this.props.info.proj_name);
}
  render ()
  {

    var  eclass,btn1class,btn2class;
    var st={
        pro:{
        width:"100%",
        backgroundColor:"#1a84eb",
      },
      pro_h:{
        height:"9px",
        borderRadius: "2px",
      },

      in:{
        height: "50px",
        borderRadius: "5px",
      },
      small_:{
        opacity: 0.5,
         fontSize: "12px",
         letterSpacing: "0.3px",
         color: "#000000",
      },
      bttn_attri:{
        height:"44px",
        backgroundColor:"#1a84eb",
        border:"none"

      },

      prev_attri:{
        textDecoration:"none",
        color:"#000000",
        border:"none"
      },
      or_:{
        paddingTop:"10px",
      }
    }

    if(this.state.em)
    {
      eclass="form-group has-success"
    }
    else {
      eclass="form-group has-error"
    }
    if(this.state.em && this.state.pwd)
    {
      btn1class="btn btn-info btn-lg pull-left col-md-5";
      btn2class="btn btn-info  btn-lg pull-right col-md-5";
      st.bttn_attri.backgroundColor="#1a84eb";
    }
    else {
      btn1class="btn btn-info btn-lg pull-left col-md-5 disabled";
      btn2class="btn btn-info  btn-lg pull-right col-md-5 disabled";
      st.bttn_attri.backgroundColor="#d1d1d1";
    }

      return (
        <div>
        <div className="row">
          <div className="col-md-5"></div>
          <div className="col-md-2">
            <div className="col-md-7" style={st.small_}>
              STEP 2 OF 2
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
          <h1 className="text-center">Create your account</h1>
        </div>

        <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">

          <form role="form">
            <div className={eclass} >
              <label htmlFor="usr">EMAIL</label>
              <input type="text" className="form-control" id="usr" style={st.in} placeholder="Enter E-mail address" ref="email" onChange={this.validateEmail}/>
            </div>
            <div className="form-group">
              <label htmlFor="sel1">PASSWORD</label>
              <input type="password" className="form-control" id="usr" style={st.in} onChange={this.pwdCheck} ref="pwrd"/>
            </div>

          </form>
        </div>

        <div className="col-md-2"></div>
        </div>
        <br />
        <br />
        <br />

        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
              <div className="col-md-5">
                <div className="row">
                <button type="button" className="btn btn-link" style={st.prev_attri}>
                  <small><span className="glyphicon glyphicon-menu-left glyphicon"></span></small>
                  <small>PREVIOUS</small>
                </button>
                </div>
              </div>
              <div className="col-md-7">
                <div className="row">
                  <a href="#" className={btn1class} style={st.bttn_attri}><small>CONTACT ME LATER</small>
                  </a>
                  <p className="col-md-2 text-center" style={st.or_}>OR</p>
                  <a href="#" className={btn2class} style={st.bttn_attri} onClick={this.sendData}><small>CONTINUE TO CHAT</small>
                    <small><span className="glyphicon glyphicon-menu-right glyphicon"></span></small>
                  </a>
                  </div>
              </div>
            </div>
          <div className= "col-md-2"></div>
        </div>


        </div>
      );
  }
}
