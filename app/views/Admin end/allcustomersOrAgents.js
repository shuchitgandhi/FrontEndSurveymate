import React, {Component} from 'react';

export default class AllCustomersORAgents extends Component {
  constructor(props){
    super(props);
    var customerdata={
      dataArray:[
        {
          customerimg:"doge_512.png",
          customername:"abcd1234",
          firstactivity:"Today",
          lastactivity:"2:46 pm",
          projectdata:[
            {
              id:12,
              projectname:"abcd",
              agentimg:"doge_512.png",
              agentname:"pqrs1234",
              status:"ARCHIVED",
              dos:"2 April,2016",
              lastactivity:"2:46 pm",
            },
            {
              id:11,
              projectname:"PROJECTB",
              agentimg:"doge_512.png",
              agentname:"pq1234",
              status:"ARCHIVED",
              dos:"2 April,2016",
              lastactivity:"2:46 pm",
            },
          ],
        },
        {
          customerimg:"doge_512.png",
          customername:"abcd1234",
          firstactivity:"Yesterday",
          lastactivity:"2:46 pm",
          projectdata:[
            {
              id:10,
              projectname:"PROJECTD",
              agentimg:"doge_512.png",
              agentname:"pqrs1234",
              status:"ARCHIVED",
              dos:"2 April,2016",
              lastactivity:"2:46 pm",
            },
            {
              id:9,
              projectname:"PROJECTC",
              agentimg:"doge_512.png",
              agentname:"pqrs1234",
              status:"ARCHIVED",
              dos:"2 April,2016",
              lastactivity:"2:46 pm",
            },
          ],
        },
        {
          customerimg:"doge_512.png",
          customername:"abcd1234",
          firstactivity:"Yesterday",
          lastactivity:"2:46 pm",
          projectdata:[
            {
              id:8,
              projectname:"PROJECTD",
              agentimg:"doge_512.png",
              agentname:"pqrs1234",
              status:"ARCHIVED",
              dos:"2 April,2016",
              lastactivity:"2:46 pm",
            },
          ],
        },
        {
          customerimg:"doge_512.png",
          customername:"Pjdn",
          firstactivity:"Yesterday",
          lastactivity:"2:46 pm",
          projectdata:[
            {
              id:7,
              projectname:"PROJECTD",
              agentimg:"doge_512.png",
              agentname:"pqrs1234",
              status:"ARCHIVED",
              dos:"2 April,2016",
              lastactivity:"2:46 pm",
            },
          ],
        },

      ],
    };
    var agentdata={
      dataArray:[
        {
          agentimg:"doge_512.png",
          agentname:"pppp1234",
          lastactivity:"2:46 pm",
          projectdata:[
            {
              id:1,
              projectname:"abcd",
              customerimg:"doge_512.png",
              customername:"abcd1234",
              status:"ARCHIVED",
              dos:"2 April,2016",
              lastactivity:"2:46 pm",
            },
            {
              id:2,
              projectname:"PROJECTA",
              customerimg:"doge_512.png",
              customername:"pq1234",
              status:"ARCHIVED",
              dos:"2 April,2016",
              lastactivity:"2:46 pm",
            },
          ],
        },
        {
          agentimg:"doge_512.png",
          agentname:"abcd1234",
          lastactivity:"2:46 pm",
          projectdata:[
            {
              id:3,
              projectname:"abcd",
              customerimg:"doge_512.png",
              customername:"dfgr1234",
              status:"ARCHIVED",
              dos:"2 April,2016",
              lastactivity:"2:46 pm",
            },
            {
              id:4,
              projectname:"PROJECTA",
              customerimg:"doge_512.png",
              customername:"lmjk1234",
              status:"ARCHIVED",
              dos:"2 April,2016",
              lastactivity:"2:46 pm",
            },
          ],
        },
        {
          agentimg:"doge_512.png",
          agentname:"abcd1234",
          lastactivity:"2:46 pm",
          projectdata:[
            {
              id:5,
              projectname:"abcd",
              customerimg:"doge_512.png",
              customername:"dfgr1234",
              status:"ARCHIVED",
              dos:"2 April,2016",
              lastactivity:"2:46 pm",
            },
            {
              id:6,
              projectname:"PROJECTA",
              customerimg:"doge_512.png",
              customername:"lmjk1234",
              status:"ARCHIVED",
              dos:"2 April,2016",
              lastactivity:"2:46 pm",
            },
          ],
        },
      ],
    };
    if(this.props.customer=="true") {
      this.state={
        searchtext:"",
        dataArray:customerdata.dataArray,
      };
    }
    else {
      this.state={
        searchtext:"",
        dataArray:agentdata.dataArray,
      };
    }
    this.addAgent=this.addAgent.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
  }
  addAgent(email){
    console.log(email);
  }
  handleSearch(){
    this.setState({searchtext:this.refs.search.value.toLowerCase()});
  }
  render(){
    var st={
      noborder:{
        border:'none',
        backgroundColor:'#fafafa',
      },
      whiteNoBorder:{
        border:'none',
      },
      tbody:{
        backgroundColor:'#ffffff',
        boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.3)',
        borderRadius:'7px',
      },
      img:{
        padding:0,
        position:'relative',
        top:0,
      },
      collapseDiv:{
        paddingTop:15,
      },
      span:{
        backgroundColor: '#fafafa',
      },
      input:{
        backgroundColor:'#fafafa',
        borderRightStyle:'none',
      },
    };

    var rows=[];
    if(this.props.customer=="true")
    {
      this.state.dataArray.forEach(
        function(row){
          if(row.customername.toLowerCase().indexOf(this.state.searchtext)===-1) {
            return;
          }
          rows.push(row);
        }.bind(this)
      );
      return(
        <div>
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <div className="input-group col-md-3 col-sm-3 pull-right">
              <input type="text" style={st.input} className="form-control" ref="search" placeholder="Customer Name" onChange={this.handleSearch}/>
              <span style={st.span} className="input-group-addon">
                <i className="glyphicon glyphicon-search text-muted"></i>
              </span>
            </div>
          </div>
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <table className="table">
              <tbody>
                <tr>
                  <td className="col-md-3 text-muted col-sm-3" style={st.noborder}>
                    Customer
                  </td>
                  <td className="col-md-3  text-muted col-sm-3" style={st.noborder}>
                    Number of Projects
                  </td>
                  <td className="col-md-3 text-muted col-sm-3" style={st.noborder}>
                    First activity
                  </td>
                  <td className="col-md-3 text-muted col-sm-3" style={st.noborder}>
                    Last activity
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="accordion">
          {
            rows.map(
              function(adata,i){
                var coll="collapse"+i;
                var noncoll="#"+coll;
                return(
                  <Row data={adata} index={i} total={rows.length} customer={this.props.customer} collapseid={coll} noncollapseid={noncoll}/>
                );
              }.bind(this)
            )
          }
          </div>

        </div>
      );
    }
    else {
      this.state.dataArray.forEach(
        function(row){
          if(row.agentname.toLowerCase().indexOf(this.state.searchtext)===-1) {
            return;
          }
          rows.push(row);
        }.bind(this)
      );
      return(
        <div>
          <AddAgent handleAdd={this.addAgent}/>
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <div className="input-group col-md-3 col-sm-3 pull-right">
              <input type="text" style={st.input} className="form-control" ref="search" placeholder="Agent Name" onChange={this.handleSearch}/>
              <span style={st.span} className="input-group-addon">
                <i className="glyphicon glyphicon-search text-muted"></i>
              </span>
            </div>
          </div>
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <table className="table">
              <tbody>
                <tr>
                  <td className="col-md-4 text-muted col-sm-4" style={st.noborder}>
                    Agent
                  </td>
                  <td className="col-md-4  text-muted col-sm-4" style={st.noborder}>
                    Number of Projects
                  </td>
                  <td className="col-md-4 text-muted col-sm-4" style={st.noborder}>
                    Last activity
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="accordion">
          {
            rows.map(
              function(adata,i){
                var coll="collapse"+i;
                var noncoll="#"+coll;
                return(
                  <Row data={adata} index={i} total={rows.length} customer={this.props.customer} collapseid={coll} noncollapseid={noncoll}/>
                );
              }.bind(this)
            )
          }
          </div>

        </div>
      );
    }


  }
}
class AddAgent extends Component {
  constructor(props){
    super(props);
    this.state={
      error:false,
    };
    this.addAgent=this.addAgent.bind(this);
  }
  addAgent(){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(this.refs.agentEmail.value.trim())){
      this.props.handleAdd(this.refs.agentEmail.value.trim());
      this.setState({error:false});
    }
    else {
      this.setState({error:true});
    }
  }
  render() {
    var st={
      btnCircle:{
        width: '54px',
        height: '54px',
        backgroundColor: '#1a84eb',
        boxShadow: '0 3px 4px 0 rgba(0, 0, 0, 0.3)',
        borderRadius: '27px',
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        outline:'none',
      },
    };
    var error="";
    if(this.state.error)
    {
      error=<p className="text-danger">Please enter valid email address</p>;
    }
    return(
      <div>
        <button type="button" className="btn btn-info" style={st.btnCircle} data-toggle="modal" data-target="#addAgent"><i className="glyphicon glyphicon-plus"></i></button>
        <div id="addAgent" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Invite Agent</h4>
              </div>
              <div className="modal-body">
                {error}
                <div className="row">
                  <div className="col-md-8">
                    <input type="text" className="form-control" ref="agentEmail" placeholder="Agent's email address"/>
                  </div>
                  <div className="col-md-4">
                    <button type="button" className="btn btn-info" onClick={this.addAgent}>Invite</button>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class Row extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var st={
      whiteNoBorder:{
        border:'none',
      },
      tbody:{
        backgroundColor:'#ffffff',
        borderRadius:'7px',
        boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.3)',
        tableLayout: 'fixed',
        wordWrap: 'break-word',
      },
      editableTbody:{
        backgroundColor:'#ffffff',
        borderTopLeftRadius:'0px',
        borderTopRightRadius:'0px',
        borderBottomLeftRadius:'0px',
        borderBottomRightRadius:'0px',
        boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.3)',
        tableLayout: 'fixed',
        wordWrap: 'break-word',
        margin:"0",
      },
      img:{
        padding:0,
        position:'relative',
        top:0,
      },
      panel:{
        backgroundColor:'#fafafa',
        border:'none',
      },
      collapseDiv:{
        paddingTop:15,
      },
    };
    if(this.props.index==0)
    {
      st.editableTbody.borderTopLeftRadius='7px';
      st.editableTbody.borderTopRightRadius='7px';
    }
    if(this.props.index==this.props.total-1)
    {
      st.editableTbody.borderBottomLeftRadius='7px';
      st.editableTbody.borderBottomRightRadius='7px';
    }
    if(this.props.customer=="true") {
      return(
        <div className="panel" style={st.panel}>
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <table className="table table-hover" style={st.editableTbody}>
              <tbody>
                <tr>
                  <td className="col-md-3 col-sm-3" style={st.whiteNoBorder}>
                    <img style={st.img} className="img-responsive img-circle col-xs-2 col-sm-2 col-md-2" id="usrimg" src={this.props.data.customerimg} width="20px" height="20px"/>
                    <span className="col-xs-10 col-sm-10 col-md-10">{this.props.data.customername}</span>
                  </td>
                  <td className="col-md-3 col-sm-3" style={st.whiteNoBorder}>
                    <div data-toggle="collapse" data-parent="#accordion" data-target={this.props.noncollapseid}>
                      <button className="btn btn-link" type="button">{this.props.data.projectdata.length}</button>
                      <span className="caret"></span>
                    </div>
                  </td>
                  <td className="col-md-3 col-sm-3" style={st.whiteNoBorder}>
                    {this.props.data.firstactivity}
                  </td>
                  <td className="col-md-3 col-sm-3" style={st.whiteNoBorder}>
                    {this.props.data.lastactivity}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id={this.props.collapseid} className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 collapse" style={st.collapseDiv}>
            <table className="table">
              <tbody>
                <tr>
                  <td className="col-md-3 col-sm-3" style={st.whiteNoBorder}>

                  </td>
                  <td className="col-md-2  text-muted col-sm-2" style={st.whiteNoBorder}>
                    Primary Agent
                  </td>
                  <td className="col-md-2 text-muted col-sm-2" style={st.whiteNoBorder}>
                    Status
                  </td>
                  <td className="col-md-2 text-muted col-sm-2" style={st.whiteNoBorder}>
                    D.O.S.
                  </td>
                  <td className="col-md-2 text-muted col-sm-2" style={st.whiteNoBorder}>
                    Last activity
                  </td>
                  <td className="col-md-1 text-muted col-sm-1" style={st.whiteNoBorder}>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-hover" style={st.tbody}>
              <tbody>
                {
                  this.props.data.projectdata.map(
                    function(adata){
                      return(
                        <CustomerProjectRow data={adata}/>
                      );
                    }
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      );
    }
    else {
      return(
        <div className="panel" style={st.panel}>
          <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <table className="table table-hover" style={st.editableTbody}>
              <tbody>
                <tr>
                  <td className="col-md-4 col-sm-4" style={st.whiteNoBorder}>
                    <img style={st.img} className="img-responsive img-circle col-xs-2 col-sm-2 col-md-2" id="usrimg" src={this.props.data.agentimg} width="20px" height="20px"/>
                    <span className="col-xs-10 col-sm-10 col-md-10">{this.props.data.agentname}</span>
                  </td>
                  <td className="col-md-4 col-sm-4" style={st.whiteNoBorder}>
                    <div data-toggle="collapse" data-parent="#accordion" data-target={this.props.noncollapseid}>
                      <button className="btn btn-link" type="button">{this.props.data.projectdata.length}</button>
                      <span className="caret"></span>
                    </div>
                  </td>
                  <td className="col-md-4 col-sm-4" style={st.whiteNoBorder}>
                    {this.props.data.lastactivity}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id={this.props.collapseid} className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 collapse" style={st.collapseDiv}>
            <table className="table">
              <tbody>
                <tr>
                  <td className="col-md-3 col-sm-3" style={st.whiteNoBorder}>

                  </td>
                  <td className="col-md-2  text-muted col-sm-2" style={st.whiteNoBorder}>
                    Customer
                  </td>
                  <td className="col-md-2 text-muted col-sm-2" style={st.whiteNoBorder}>
                    Status
                  </td>
                  <td className="col-md-2 text-muted col-sm-2" style={st.whiteNoBorder}>
                    D.O.S.
                  </td>
                  <td className="col-md-2 text-muted col-sm-2" style={st.whiteNoBorder}>
                    Last activity
                  </td>
                  <td className="col-md-1 text-muted col-sm-1" style={st.whiteNoBorder}>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-hover" style={st.tbody}>
              <tbody>
                {
                  this.props.data.projectdata.map(
                    function(adata){
                      return(
                        <AgentProjectRow data={adata} />
                      );
                    }
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}
class CustomerProjectRow extends Component{
  constructor(props){
    super(props);
    this.goToProject=this.goToProject.bind(this);
  }
  goToProject(){
    console.log(this.props.data.id);
  }
  render(){
    var st={
      whiteNoBorder:{
        border:'none',
      },
      img:{
        padding:0,
        position:'relative',
        top:0,
      },
    };
    return(
      <tr>
        <td className="col-md-3 col-sm-3" style={st.whiteNoBorder}>
          <span style={{cursor:'pointer'}} onClick={this.goToProject}>{this.props.data.projectname}</span>
        </td>
        <td className="col-md-2 col-sm-2" style={st.whiteNoBorder}>
          <img style={st.img} className="img-responsive img-circle col-xs-2 col-sm-2 col-md-2" id="usrimg" src={this.props.data.agentimg} width="20px" height="20px"/>
          <span className="col-xs-10 col-sm-10 col-md-10">{this.props.data.agentname}</span>
        </td>
        <td className="col-md-2 col-sm-2" style={st.whiteNoBorder}>
          {this.props.data.status}
        </td>
        <td className="col-md-2 col-sm-2" style={st.whiteNoBorder}>
          {this.props.data.dos}
        </td>
        <td className="col-md-2 col-sm-2" style={st.whiteNoBorder}>
          {this.props.data.lastactivity}
        </td>
        <td className="col-md-1 col-sm-1" style={st.whiteNoBorder}>
          <span className="glyphicon glyphicon-upload"></span>
        </td>
      </tr>
    );
  }
}
class AgentProjectRow extends Component{
  constructor(props){
    super(props);
    this.goToProject=this.goToProject.bind(this);
  }
  goToProject(){
    console.log(this.props.data.id);
  }
  render(){
    var st={
      whiteNoBorder:{
        border:'none',
      },
      img:{
        padding:0,
        position:'relative',
        top:0,
      },
    };
    return(
      <tr>
        <td className="col-md-3 col-sm-3" style={st.whiteNoBorder}>
          <span style={{cursor:'pointer'}} onClick={this.goToProject}>{this.props.data.projectname}</span>
        </td>
        <td className="col-md-2 col-sm-2" style={st.whiteNoBorder}>
          <img style={st.img} className="img-responsive img-circle col-xs-2 col-sm-2 col-md-2" id="usrimg" src={this.props.data.customerimg} width="20px" height="20px"/>
          <span className="col-xs-10 col-sm-10 col-md-10">{this.props.data.customername}</span>
        </td>
        <td className="col-md-2 col-sm-2" style={st.whiteNoBorder}>
          {this.props.data.status}
        </td>
        <td className="col-md-2 col-sm-2" style={st.whiteNoBorder}>
          {this.props.data.dos}
        </td>
        <td className="col-md-2 col-sm-2" style={st.whiteNoBorder}>
          {this.props.data.lastactivity}
        </td>
        <td className="col-md-1 col-sm-1" style={st.whiteNoBorder}>
          <span className="glyphicon glyphicon-upload"></span>
        </td>
      </tr>
    );
  }
}
