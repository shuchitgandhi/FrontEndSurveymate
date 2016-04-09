import React, {Component} from 'react';

export default class Attachments extends Component{

render()
{
  var st={

      blue:{
        borderRadius:"20px",
            backgroundColor:" #1a84eb",
            borderBottomRightRadius:0,
            borderBottomLeftRadius:0,
            height:"11.1px",

      },
      box:{
        borderTopRightRadius:0,
        borderTopLeftRadius:0,
        backgroundColor:"#ffffff",
        height:"275px"
      },

      bttn_attri:{
        height:"56px",
        backgroundColor:"#1a84eb",
      },
      tex_:{
        fontSize:12,
        color: "#ffffff",
        letterSpacing: 0.3,

      },
    };

  return(
    <div className="col-md-5">
      <div className="img-rounded" style={st.blue}></div>
      <div className="panel panel-default" style={st.box}>
      <div className="panel-body">

        <br />
        <div className="row">
          <div className= "col-md-1"></div>
          <h4 className="col-md-4 text-left text-uppercase"><strong>attachments</strong>
          </h4>
          <div className= "col-md-7"></div>
        </div>

        <br />

        <div className="row">
          <div className= "col-md-1"></div>
          <button type="button" className="btn btn-primary btn-lg col-md-4" style={st.bttn_attri}>
            <div style={st.tex_}>+ADD FILE
            </div>
          </button>
          <div className= "col-md-7"></div>
        </div>
    </div>
    </div>
</div>
  );

}
}
