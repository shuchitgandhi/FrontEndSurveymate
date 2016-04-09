import React, {Component} from 'react';

export default class ChatBox extends Component {
 constructor(props) {
   super(props);

   this.state = {
     clicked:true
   }

   this.chatTabClicked = this.chatTabClicked.bind(this);
   this.teamTabClicked = this.teamTabClicked.bind(this);

 }
 chatTabClicked(event){
     this.setState({clicked:true});
 }
 teamTabClicked(event){
     this.setState({clicked:false});
 }
 render() {
     var st={
         nopad:{
             padding:'0px',
         },
         chatTab:{
             padding:'0px',
             backgroundColor:'#ffffff ',
             cursor:'pointer',
         },
        teamTab:{
             padding:'0px',
             backgroundColor:'#ffffff ',
             cursor:'pointer',
         },
         bg1:{
             backgroundColor:'lavender',
         },
         bg2:{
             backgroundColor:'lavenderblush',
         },
     };
     var clstrChat="col-md-6 col-xs-6";
     var clstrTeam="col-md-6 col-xs-6";
     var content;
     if(this.state.clicked)
     {
         clstrChat=clstrChat+" active";
         st.teamTab.backgroundColor='#f7f7f7 ';
         content=<ChatMessageBox isAgentSide={this.props.isAgentSide} />
     }
     else
     {
         clstrTeam=clstrTeam+" active";
         st.chatTab.backgroundColor='#f7f7f7 ';
         content=<TeamBox isAgentSide={this.props.isAgentSide} />
     }
   return (
             <div className="panel panel-default col-md-12" style={st.nopad}>
                 <ul className="panel-heading nav nav-tabs" style={st.nopad}>
                      <li className={clstrChat} style={st.chatTab} onClick={this.chatTabClicked}><a >TEAM CHAT</a></li>
                      <li className={clstrTeam} style={st.teamTab} onClick={this.teamTabClicked}><a >PROJECT TEAM</a></li>
                    </ul>
                    {content}
             </div>
   );
 }
}
class ChatMessageBox extends Component {
  constructor(props){
    super(props);

    this.state={
      messagesar:[ {msg:"fdsknsvnal fdsknsvnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal fdsknsvnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal fdsknsvnaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal",type:"sent", username:"p", time:"51 m",agentname:"kishan patel"},{msg:"fdsknsvnl",type:"sent", username:"p", time:"51 m",agentname:"kishan patel"},{msg:"fdsknsvnl",type:"sent", username:"p", time:"51 m",agentname:"kishan patel"},{msg:"fdsknsvnl",type:"sent", username:"p", time:"51 m",agentname:"kishan patel"},{msg:"fdsknsvnl", type:"sent", username:"p", time:"51 m",agentname:"kishan patel"},{msg:"fdsknsvnl",type:"received", username:"p", time:"51 m",agentname:"kishan patel"}, {msg:"vvnv",type:"sent", username:"p", time:"51 m",agentname:"kishan patel"}]
    };
    this.onkeyPressed=this.onkeyPressed.bind(this);

  }
  componentDidMount()
  {
    document.getElementById('style-1').scrollTop=document.getElementById('style-1').scrollHeight;
  }
  componentDidUpdate()
  {
    document.getElementById('style-1').scrollTop=document.getElementById('style-1').scrollHeight;;
  }
  onkeyPressed(event)
  {

    //document.getElementById('ms1234').scrollTop=document.getElementById('ms1234').scrollHeight;
    var key=event.keyCode;
    if(key==13 && (document.getElementById('textmessage').value).trim()!==""){
      var jso={msg:(document.getElementById('textmessage').value).trim(),
      username:"prk",type:"sent",time:"51 m"};

      document.getElementById('textmessage').value=null;

      this.setState({messagear:this.state.messagesar.push(jso)});


      //document.getElementById('ms1234').scrollTop=document.getElementById('ms1234').scrollHeight;

      if(event.preventDefault)
        event.preventDefault();


      return false;
    }
  }
    render() {
        var st={
            chatMessageBox:{
                height:'340px',
                overflow: 'auto',
            },
            inputTextArea:{
                resize: 'none',
            },
        };

        return(

            <div>
                <div className="panel-body scrollbar" id="style-1" style={st.chatMessageBox}>

                  {this.state.messagesar.map(function(i){
                    return (<Mess data={i} isAgentSide={this.props.isAgentSide} />);
                  }.bind(this)
                )}


                  </div>
                  <textarea className="form-control" rows="3" style={st.inputTextArea} onKeyDown={this.onkeyPressed} id="textmessage" placeholder="Send a message to your Surveymate">

                  </textarea>
              </div>
        );
    }
}
class TeamBox extends Component {
    constructor(props)
    {
      super(props);
      if(this.props.isAgentSide=="true"){
        this.state={
          projectMembers:[
            {
              customerimg:"doge_512.png",
              customeremail:"abcd@gmail.com",
            },
            {
              customerimg:"doge_512.png",
              customeremail:"pqrs@gmail.com",
            },
            {
              customerimg:"doge_512.png",
              customeremail:"abcd@gmail.com",
            },
            {
              customerimg:"doge_512.png",
              customeremail:"abcd@gmail.com",
            },
          ],
          agents:[
            {
              agentimg:"doge_512.png",
              agentemail:"kishanPatel@gmail.com",
            },
            {
              agentimg:"doge_512.png",
              agentemail:"abcd@gmail.com",
            },
            {
              agentimg:"doge_512.png",
              agentemail:"abcd@gmail.com",
            },
            {
              agentimg:"doge_512.png",
              agentemail:"abcd@gmail.com",
            },
          ],
        };
      }
    }
    render() {

      var st={
        teamBox:{
          height:'415px',
          overflow: 'auto',
        },
        noborder:{
          border:'none',
          backgroundColor:'#fafafa',
        },
        img:{
          top:0,
          padding:0,
        },
        scrollable:{
          overflow:'auto',
          height:'150px'
        },
      };
      if(this.props.isAgentSide=="true")
      {
        return(
            <div>
              <div className="panel-body" style={st.teamBox}>
                  <div style={{backgroundColor:"#fafafa"}} className="small text-muted">
                    <u><strong>PROJECT TEAM</strong></u>
                  </div>
                  <ul className="list-group" style={st.scrollable} id="style-1">
                    {
                      this.state.projectMembers.map(
                        function(row){
                          return(
                            <li className="list-group-item" style={st.noborder}>
                              <div className="row">
                                <img className="img-responsive img-circle col-md-1" style={st.img} id="usrimg" src={row.customerimg} width="30px" height="30px"/>
                                <span className="col-md-11 text-left">{row.customeremail}</span>
                              </div>
                            </li>
                          );
                        }
                      )
                    }
                  </ul>

                  <div style={{backgroundColor:"#fafafa"}} className="small text-muted">
                    <u><strong>AGENTS</strong></u>
                  </div>
                  <ul className="list-group" style={st.scrollable} id="style-1">
                    {
                      this.state.agents.map(
                        function(row){
                          return(
                            <li className="list-group-item" style={st.noborder}>
                              <div className="row">
                                <img className="img-responsive img-circle col-md-1" style={st.img} id="usrimg" src={row.agentimg} width="30px" height="30px"/>
                                <span className="col-md-11 text-left">{row.agentemail}</span>
                              </div>
                            </li>
                          );
                        }
                      )
                    }
                  </ul>
              </div>
            </div>
        );
      }
      else {
        return(
            <div>
              <div className="panel-body" style={st.teamBox}>
                <div className="small text-muted underline">
                  <u>YOUR TEAM</u>
                </div>
                <div>
                </div>
              </div>
            </div>
        );
      }
    }
}
class  Mess extends Component {
  constructor(props){
    super(props);

  }

  render(){
    var cname,leftim,rightim,rowpull;
    var st={
          mwrap:{
            wordWrap:"break-word",
          },
          msgcolor:{
            backgroundColor:"#f1f1f1",
            color:"black",
          }
    }
    var agentname="";
    if(this.props.data.type=="sent")
    {
      rowpull="col-md-11 col-sm-11 col-xs-11 pull-right";
      cname="col-md-8 col-sm-8 col-xs-8 alert alert-success";
      rightim=<Img leftpos="-25px"/>;
      leftim=<div className="col-md-2 col-sm-2 col-xs-2"></div>;
      if(this.props.isAgentSide=="true")
      {
        agentname=" • "+this.props.data.agentname;
      }
    }
    else {
      rowpull="col-md-11 col-sm-11 col-xs-11 pull-left"
      cname="col-md-8 col-sm-8 col-xs-8 alert alert-info ";
      st.msgcolor.backgroundColor="#cce6ff";
      rightim=<div className="col-md-2 col-sm-2 col-xs-2"></div>;
      leftim=<Img leftpos="25px"/>;
    }
    return(
        <div className="row">
          <div className={rowpull}>
            {leftim}
            <div className={cname} style={st.msgcolor} >
              <small className="text-muted">{this.props.data.username}</small>
              <p style={st.mwrap}>{this.props.data.msg}</p>
              <small className="text-muted">{this.props.data.time}{agentname}</small>
            </div>
            {rightim}
          </div>
        </div>
    );
  }
}
class Img extends Component{
  // componentDidMount()
  // {
  //   var st={
  //     imgpadd:{
  //       padding:'0px',
  //       position:'relative',
  //       top:0,
  //       left:-20,
  //     }
  //   };
  // }
  // componentDidUpdate()
  // {
  //
  // }
  render(){
    var st={
        imgpadd:{
          padding:'0px',
          position:'relative',
          top:0,
        }
      };
    return(
      <img className="img-responsive img-circle col-sm-2 col-md-2 col-xs-2" id="usrimg" style={st.imgpadd} src="doge_512.png" max-width="25px" max-height="25px" width="25px" height="25px"/>
    )
  }
}
