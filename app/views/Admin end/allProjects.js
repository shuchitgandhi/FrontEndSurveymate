import React, {Component} from 'react';

export default class AllProjects extends Component {
  constructor(props){
    super(props);

    this.state={
      searchText:"",
      pc:true,
      dataArray:[
        {
          id:1,
          projectname:"abcd",
          customerimg:"doge_512.png",
          customername:"abcd1234",
          agentimg:"doge_512.png",
          agentname:"pqrs1234",
          status:"ARCHIVED",
          dos:"2 April,2016",
          lastactivity:"2:46 pm",
        },
        {
          id:2,
          projectname:"pqrs",
          customerimg:"doge_512.png",
          customername:"abcd1234",
          agentimg:"doge_512.png",
          agentname:"pqrs1234",
          status:"ARCHIVED",
          dos:"2 April,2016",
          lastactivity:"2:46 pm",
        },
        {
          id:3,
          projectname:"PROJECTA",
          customerimg:"doge_512.png",
          customername:"abcd123",
          agentimg:"doge_512.png",
          agentname:"pqrs1234",
          status:"ARCHIVED",
          dos:"2 April,2016",
          lastactivity:"2:46 pm",
        },
        {
          id:4,
          projectname:"PROJECTA",
          customerimg:"doge_512.png",
          customername:"abcd1234",
          agentimg:"doge_512.png",
          agentname:"pqrs1234",
          status:"ARCHIVED",
          dos:"2 April,2016",
          lastactivity:"2:46 pm",
        },
        {
          id:5,
          projectname:"PROJECTA",
          customerimg:"doge_512.png",
          customername:"abcd1234",
          agentimg:"doge_512.png",
          agentname:"pqrs1234",
          status:"ARCHIVED",
          dos:"2 April,2016",
          lastactivity:"2:46 pm",
        },
        {
          id:6,
          projectname:"PROJECTA",
          customerimg:"doge_512.png",
          customername:"abcd1234",
          agentimg:"doge_512.png",
          agentname:"pqrs1234",
          status:"ARCHIVED",
          dos:"2 April,2016",
          lastactivity:"2:46 pm",
        },
        {
          id:7,
          projectname:"PROJECTA",
          customerimg:"doge_512.png",
          customername:"abcd1234",
          agentimg:"doge_512.png",
          agentname:"pqrs1234",
          status:"ARCHIVED",
          dos:"2 April,2016",
          lastactivity:"2:46 pm",
        },
        {
          id:8,
          projectname:"PROJECTA",
          customerimg:"doge_512.png",
          customername:"abcd1234",
          agentimg:"doge_512.png",
          agentname:"pqrs1234",
          status:"ARCHIVED",
          dos:"2 April,2016",
          lastactivity:"2:46 pm",
        },
        {
          id:9,
          projectname:"PROJECTA",
          customerimg:"doge_512.png",
          customername:"abcd1234",
          agentimg:"doge_512.png",
          agentname:"pqrs1234",
          status:"ARCHIVED",
          dos:"2 April,2016",
          lastactivity:"2:46 pm",
        },
        {
          id:10,
          projectname:"PROJECTA",
          customerimg:"doge_512.png",
          customername:"abcd1234",
          agentimg:"doge_512.png",
          agentname:"pqrs1234",
          status:"ARCHIVED",
          dos:"2 April,2016",
          lastactivity:"2:46 pm",
        },
      ],
    };
    this.updateDimensions=this.updateDimensions.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
  }
  updateDimensions() {

    var w = window,
    d = document,
    documentElement = d.documentElement,
    body = d.getElementsByTagName('body')[0],
    width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
    height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

    if(width<=768)
    {
      this.setState({pc: false});
    }
    else {
      this.setState({pc: true});
    }
      // if you are using ES2015 I'm pretty sure you can do this: this.setState({width, height});
  }
  componentWillMount() {
      this.updateDimensions();
  }
  componentDidMount() {
      window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions);
  }
  handleSearch(filterText){
    this.setState({searchText:filterText});
  }
  render(){
    var rows=[];
    this.state.dataArray.forEach(
      function(row){
        if(row.projectname.toLowerCase().indexOf(this.state.searchText)===-1) {
          return;
        }
        rows.push(row);
      }.bind(this)
    );

    var content;
    if(this.state.pc)
    {
      content=<ProjectsPC dataArray={rows} userInput={this.handleSearch}/>;
    }
    else {
      content=<ProjectsMobile dataArray={rows} userInput={this.handleSearch}/>;
    }
    return(
      <div>
        {content}
      </div>
    );
  }
}
class ProjectsMobile extends Component {
  constructor(props) {
    super(props);
    this.handleChangeMob=this.handleChangeMob.bind(this);
  }
  handleChangeMob() {
    this.props.userInput(this.refs.searchProject.value.toLowerCase());
  }
  render() {
    var st={
      img:{
        padding:2,
        position:'relative',
      },
      span:{
        backgroundColor: '#fafafa',
      },
      input:{
        backgroundColor:'#fafafa',
        borderRightStyle:'none',
      },
      scrollContent:{
        height: '400px',
        overflow: 'auto',
      },
    };

    return(
      <div>
        <h4 className="text-muted"><strong>ALL PROJECTS</strong></h4>
        <div className="input-group">
          <input type="text" style={st.input} className="form-control" ref="searchProject" placeholder="Project Name" onChange={this.handleChangeMob}/>
          <span style={st.span} className="input-group-addon">
            <i className="glyphicon glyphicon-search text-muted"></i>
          </span>
        </div>
        <div style={st.scrollContent} className="panel-group" id="accordion">
          {
            this.props.dataArray.map(
              function(adata,i){
                var coll="collapse"+i;
                var noncoll="#"+coll;
                return(<ProjectRowMobile data={adata} noncollapseid={noncoll} collapseid={coll}/>);
              }
            )
          }
        </div>
      </div>
    );
  }
}

class ProjectRowMobile extends Component {
  constructor(props) {
    super(props);
    this.goToProject=this.goToProject.bind(this);
  }
  goToProject(){
    console.log(this.props.data.id);
  }
  render() {
    var st={
      wrap:{
        wordWrap:"break-word",
      },
      table:{
        tableLayout: 'fixed',
        wordWrap: 'break-word',
      },
    };
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title col-xs-11">
            <a data-toggle="collapse" href={this.props.noncollapseid} style={st.wrap}>{this.props.data.projectname}</a>
          </h4>
          <span className="btn glyphicon glyphicon-share-alt" style={{padding:0}} onClick={this.goToProject}></span>
        </div>
        <div id={this.props.collapseid} className="panel-collapse collapse" data-parent="#accordion">
          <table className="table table-hover" style={st.table}>
            <tbody>
              <tr>
                <td className="col-xs-6 col-sm-6 text-muted">
                  Customer Name:
                </td>
                <td className="col-xs-6 col-sm-6">
                  <img className="img-responsive img-circle pull-left" id="usrimg" src={this.props.data.customerimg} width="20px" height="20px"/>
                  {this.props.data.customername}
                </td>
              </tr>
              <tr>
                <td className="col-xs-6 col-sm-6 text-muted">
                  Agent Name:
                </td>
                <td className="col-xs-6 col-sm-6">
                  <img className="img-responsive img-circle pull-left" id="usrimg" src={this.props.data.agentimg} width="20px" height="20px"/>
                  {this.props.data.agentname}
                </td>
              </tr>
              <tr>
                <td className="col-xs-6 col-sm-6 text-muted">
                  Status:
                </td>
                <td className="col-xs-6 col-sm-6">
                  {this.props.data.status}
                </td>
              </tr>
              <tr>
                <td className="col-xs-6 col-sm-6 text-muted">
                  D.O.S.:
                </td>
                <td className="col-xs-6 col-sm-6">
                  {this.props.data.dos}
                </td>
              </tr>
              <tr>
                <td className="col-xs-6 col-sm-6 text-muted">
                  Last Activity:
                </td>
                <td className="col-xs-6 col-sm-6">
                  {this.props.data.lastactivity}
                </td>
              </tr>
              <tr>
                <td className="col-xs-6 col-sm-6 text-muted">
                  Upload:
                </td>
                <td className="col-xs-6 col-sm-6 glyphicon glyphicon-upload">

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
class ProjectsPC extends Component {
  constructor(props) {
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }
  handleChange() {
    this.props.userInput(this.refs.searchProject.value.toLowerCase());
  }
  render() {

    var st={
      noborder:{
        border:'none',
        backgroundColor:'#fafafa',
      },
      whiteBox:{
        boxShadow: '0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .2)',
      },
      whiteNoBorder:{
        border:'none',
        wordWrap:'break-word',
      },
      scrollContent:{
        height: '400px',
        overflow: 'auto',
      },
      span:{
        backgroundColor: '#fafafa',
      },
      input:{
        backgroundColor:'#fafafa',
        borderRightStyle:'none',
      },
      tbody:{
        backgroundColor:'#ffffff',
        borderRadius: '7px',
        boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.3)',
        tableLayout: 'fixed',
        wordWrap: 'break-word',
      },
    };
    return(
        <div>
          <div className="row">
            <h4 className="text-muted col-md-4 col-sm-4"><strong>ALL PROJECTS</strong></h4>

            <div className="input-group col-md-2 col-sm-2">
              <input type="text" style={st.input} className="form-control" ref="searchProject" placeholder="Project Name" onChange={this.handleChange}/>
              <span style={st.span} className="input-group-addon">
                <i className="glyphicon glyphicon-search text-muted"></i>
              </span>
            </div>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td className="col-md-2 col-sm-2" style={st.noborder}>

                </td>
                <td className="col-md-2 text-muted col-sm-2" style={st.noborder}>
                  Customer
                </td>
                <td className="col-md-2  text-muted col-sm-2" style={st.noborder}>
                  Primary Agent
                </td>
                <td className="col-md-1 text-muted col-sm-1" style={st.noborder}>
                  Status
                </td>
                <td className="col-md-2 text-muted col-sm-2" style={st.noborder}>
                  D.O.S.
                </td>
                <td className="col-md-2 text-muted col-sm-2" style={st.noborder}>
                  Last activity
                </td>
                <td className="col-md-1 text-muted col-sm-1" style={st.noborder}>
                </td>
              </tr>
            </tbody>
          </table>

          <table className="table table-hover" style={st.tbody}>
            <tbody>

              {
                this.props.dataArray.map(
                  function(adata){
                    return(<ProjectRow data={adata}/>);
                  }
                )
              }

            </tbody>
          </table>
        </div>
    );
  }
}
class ProjectRow extends Component {
  constructor(props) {
    super(props);
    this.goToProject=this.goToProject.bind(this);
  }
  goToProject(){
    //goto this.props.data.id page
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
      row:{
        backgroundColor:'#ffffff',
      },
      widthmd2:{
        width:"16.66%",
        border:'none',
      },
      widthmd1:{
        width:"8.33%",
        border:'none',
      },
    };
    return(
      <tr>
        <td className="col-md-2 col-sm-2" style={st.whiteNoBorder}>
          <span style={{cursor:'pointer'}} onClick={this.goToProject}>{this.props.data.projectname}</span>
        </td>
        <td className="col-md-2 col-sm-2" style={st.whiteNoBorder}>
          <img style={st.img} className="img-responsive img-circle col-xs-2 col-sm-2 col-md-2" id="usrimg" src={this.props.data.customerimg} width="20px" height="20px"/>
          <span className="col-xs-10 col-sm-10 col-md-10">{this.props.data.customername}</span>
        </td>
        <td className="col-md-2 col-sm-2" style={st.whiteNoBorder}>
          <img style={st.img} className="img-responsive img-circle col-xs-2 col-sm-2 col-md-2" id="usrimg" src={this.props.data.agentimg} width="20px" height="20px"/>
          <span className="col-xs-10 col-sm-10 col-md-10">{this.props.data.agentname}</span>
        </td>
        <td className="col-md-1 col-sm-1 small" style={st.whiteNoBorder}>
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
