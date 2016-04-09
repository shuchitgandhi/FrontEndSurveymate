import React, {Component} from 'react';

export default class ActionsBox extends Component{
  constructor(props) {
    super(props);
    this.seeSurvey=this.seeSurvey.bind(this);
    this.seeReport=this.seeReport.bind(this);
  }
  seeSurvey(event)
  {

  }
  seeReport(event)
  {

  }
  render(){
    var st={
      box:{
        height:"150px",
        backgroundColor:"#ffffff",
        borderTopRightRadius:0,
        borderTopLeftRadius:0,
      },
      thickline:{
        height:"11.1px",
        backgroundColor:"#1a84eb",
        borderBottomRightRadius:0,
        borderBottomLeftRadius:0,
      },
      noborder:{
        border:'none',
      },
      btn:{
        outline: 'none !important',
        padding:0,
      },
    };
    var contentSurvey,contentReport,surveyCname,reportCname;
    if(this.props.survey=='true')
    {
      contentSurvey="available";
      surveyCname="text-info";
    }
    else
    {
      contentSurvey="not available";
      surveyCname="text-muted";
    }
    if(this.props.report=='true')
    {
      contentReport="available";
      reportCname="text-info";
    }
    else
    {
      contentReport="not availabe";
      reportCname="text-muted";
    }
    return(
        <div>
          <div className="img-rounded" style={st.thickline}></div>
          <div className="panel panel-default" style={st.box}>
            <div className="panel-body">
              <table className="table">
                <tbody>
                  <tr>
                    <td style={st.noborder}><strong>ACTIONS</strong></td>
                  </tr>
                  <tr>
                    <td style={st.noborder}>Survey: <span className={surveyCname}>{contentSurvey}</span></td>
                    <td style={st.noborder} className="text-right" ><button type="button" style={st.btn} className="btn btn-link" onClick={this.seeSurvey}>ENTER</button></td>
                  </tr>
                  <tr>
                    <td style={st.noborder}>Report: <span className={reportCname}>{contentReport}</span></td>
                    <td style={st.noborder} className="text-right" ><button type="button" style={st.btn} className="btn btn-link" onClick={this.seeReport}>ENTER</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
  }
}
