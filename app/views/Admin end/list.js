import React,{Component} from 'react';

export default class List extends Component {
  constructor (props){
    super (props);
    this.state={
      errorUnread:false,
      searchText:"",
      unread:[{ProjectNumber:"ProjectA",TimeOfMail:"12:52",CustomerName:"Riddhesh",Date:"12/25/50"},{ProjectNumber:"ProjectF",TimeOfMail:"12:52",CustomerName:"Riddhesh",Date:"12/25/50"},{ProjectNumber:"ProjectF",TimeOfMail:"12:52",CustomerName:"Riddhesh",Date:"12/25/50"},{ProjectNumber:"ProjectF",TimeOfMail:"12:52",CustomerName:"Riddhesh",Date:"12/25/50"},{ProjectNumber:"ProjectF",TimeOfMail:"12:52",CustomerName:"Riddhesh",Date:"12/25/50"},{ProjectNumber:"ProjectF",TimeOfMail:"12:52",CustomerName:"Riddhesh",Date:"12/25/50"},{ProjectNumber:"ProjectF",TimeOfMail:"12:52",CustomerName:"Riddhesh",Date:"12/25/50"},{ProjectNumber:"ProjectF",TimeOfMail:"12:52",CustomerName:"Riddhesh",Date:"12/25/50"},{ProjectNumber:"ProjectF",TimeOfMail:"12:52",CustomerName:"Riddhesh",Date:"12/25/50"}],
      read:[{ProjectNumber:"ProjectF",TimeOfMail:"12:52",AgentName:"You",Date:"12/25/50"}],
    }
    this.letMove=this.letMove.bind(this);
    this.search=this.search.bind(this);
  }
  letMove(i){
    if(i==1)
    {
      this.setState({errorUnread:true});
    }
    else {
      var tmp={
        ProjectNumber:this.state.unread[i].ProjectNumber,
        TimeOfMail:this.state.unread[i].TimeOfMail,
        AgentName:"You",
        Date:this.state.unread[i].Date,
        };
      var tmpunread= this.state.unread;
      tmpunread.splice(i,1);
      var tmpread = this.state.read;
      tmpread.splice(0,0,tmp)
      this.setState({errorUnread:false,unread:tmpunread,read:tmpread});
    }
  }

  search (text){
    this.setState({searchText:text});
  }

  render () {
    var st={
      scrollable_div:{
        overflowY:"scroll",
        height:322,
      },

      imagecolor:{
        color:"blue",
      },

      backcolor:{
        backgroundColor:"#efefef",
      },
      background:{
        backgroundColor:"#fbfbfb",
        padding:5,
      },
      btn:{
        cursor:'pointer',
      },

    };
    var error="";
    if(this.state.errorUnread)
    {
      error=<p className="text-danger">Sorry, this project has already been attended by other Agent, refresh the page for recent unread projects</p>;
    }

    var readContent=[];
    var unreadContent=[];
    this.state.read.forEach(
      function(row){
        if(row.ProjectNumber.toLowerCase().indexOf(this.state.searchText)===-1) {
          return;
        }
        readContent.push(row);
      }.bind(this)
    );

    this.state.unread.forEach(
      function(row){
        if(row.ProjectNumber.toLowerCase().indexOf(this.state.searchText)===-1) {
          return;
        }
        unreadContent.push(row);
      }.bind(this)
    );


    return (
      <div style={st.background}>
        <ul className="list-group ">
          <SearchBox onUserInput={this.search}/>
          {error}
          <li className="list-group-item text-primary" style={st.backcolor} ><strong>UNREAD({this.state.unread.length})</strong></li>
          <ul className="list-group " style={st.scrollable_div}>
          {
            unreadContent.map((unrd,i)=>{
            let temp = this.letMove.bind(this, i )
            return(
              <div onClick={temp} style={st.btn}>
                <a className="list-group-item">
                  <p className="text-primary">{unrd.ProjectNumber}<span className="text-muted pull-right">{unrd.TimeOfMail}</span></p>
                  <p className="text-muted">{unrd.CustomerName} <strong>o</strong> {unrd.Date}<span className="glyphicon glyphicon-envelope pull-right" style={st.imagecolor}></span></p>
                </a>
              </div>
              );
            })
          }
          </ul>



          <li className="list-group-item " style={st.backcolor}>MINE</li>
          <ul className="list-group" style={st.scrollable_div}>
          {
            readContent.map(
              function(rd)
              {
                return(
                  <div>
                    <a href="#"className="list-group-item">
                      <p className="text-primary">{rd.ProjectNumber}<span className="text-muted pull-right">{rd.TimeOfMail}</span></p>

                      <p className="text-muted">{rd.AgentName} <strong>o</strong> {rd.Date}</p>
                    </a>
                  </div>
                );
              }
            )
          }
          </ul>

          </ul>
        </div>

    );
  }
}

class SearchBox extends Component {
  constructor (props){
    super (props);
    this.state={
      clicked:false,
    }
    this.onSearchClick=this.onSearchClick.bind(this);
    this.onCloseClick=this.onCloseClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }
  onSearchClick(){
    this.setState({clicked:true});
  }
  onCloseClick(){
    this.setState({clicked:false});
  }
  handleChange(){
    this.props.onUserInput(this.refs.searchProjects.value.toLowerCase());
  }
  render (){
    var st={
      span:{
        backgroundColor: '#fafafa',
      },
      input:{
        backgroundColor:'#fafafa',
        borderRightStyle:'none',
      },
    };
    if(this.state.clicked)
    {
      return (
        <div className="input-group">
          <input type="text" style={st.input} className="form-control" ref="searchProjects" placeholder="Project..." onChange={this.handleChange}/>
          <span style={st.span} className="input-group-addon" onClick={this.onCloseClick}>
            <i className="glyphicon glyphicon-remove text-muted"></i>
          </span>
        </div>
      );
    }
    else {
      return (
        <h4 className="list-group-item-heading">PROJECTS<div className="glyphicon glyphicon-search pull-right" onClick={this.onSearchClick}></div></h4>
      );
    }

  }
}
