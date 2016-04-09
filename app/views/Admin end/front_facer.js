import React,{Component} from 'react';

export default class Front extends Component {
  constructor (props){
    super (props);
    this.state={
      array:[
        {
          imageLink:"http://www.collaborativesolutionsnorth.com/wp-content/uploads/2014/07/links.jpg",
          name:"af"
        },
        {
          imageLink:"http://www.collaborativesolutionsnorth.com/wp-content/uploads/2014/07/links.jpg",
          name:"adg"
        },
        {
          imageLink:"http://www.collaborativesolutionsnorth.com/wp-content/uploads/2014/07/links.jpg",
          name:"ssaf"
        },
        {
          imageLink:"http://www.collaborativesolutionsnorth.com/wp-content/uploads/2014/07/links.jpg",
          name:"sfsa",
        }
      ]
    };
    this.addNew = this.addNew.bind(this);
    this.saveData=this.saveData.bind(this);
    this.removeRow=this.removeRow.bind(this);
  }
  removeRow(i)
  {
    var tmpRows= this.state.array;
    tmpRows.splice(i,1);
    this.setState({array:tmpRows});
  }
  saveData(text,i)
  {
    var frontFacers=this.state.array;
    frontFacers[i].name=text;
    this.setState({array:frontFacers});
  }
  addNew(){
    var newFrontFacer={
      imageLink:"http://www.collaborativesolutionsnorth.com/wp-content/uploads/2014/07/links.jpg",
      name:"new front facer",
    };
    var allfacers=this.state.array;
    allfacers.push(newFrontFacer);
    this.setState({array:allfacers});
  }

  render(){
    var st={
        vert: {
        verticalAlign:'bottom',
      },
      noborder:{
        border:'none',
      },
      background:{
        backgroundColor:"#fbfbfb",
        padding:5,
      },
      table:{
        tableLayout: 'fixed',
        wordWrap: 'break-word',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },
      scrollableDiv:{
        height:'368px',
        overflow:'auto',
      },
      noborderback:{
        border:'none',
        backgroundColor:"#fbfbfb",
      },
    };
  return(
    <div className="row">
      <div className="col-md-8" style={st.noborderback}>
        <p className="text-muted "><strong>FRONTFACERS</strong></p>
      </div>
      <div className="col-md-4" style={st.noborderback}>
        <p className="text-primary btn" onClick={this.addNew}><strong>ADDNEW</strong></p>
      </div>
      <table className="table table-hover" >
        <thead style={st.noborder}>
          <tr style={st.background}>
            <th className=" col-md-3 text-muted">Avatar</th>
            <th className=" col-md-7 text-center text-muted">Name</th>
            <th className=" col-md-2"></th>
          </tr>
        </thead>
      </table>
      <div style={st.scrollableDiv}>
        <table className="table table-hover" style={st.table}>
          <tbody>
            {this.state.array.map(function(con,i){
              return (
                  <Row rowData={con} handleSave={this.saveData} rowref={i} handleRemove={this.removeRow}/>

            );
          }.bind(this)
        )}
          </tbody>
        </table>
      </div>
      </div>
    );
  }
}
class Row extends Component {
  constructor(props) {
    super(props);
    this.state={
      edit:false,
    }
    this.editClicked=this.editClicked.bind(this);
    this.saveClicked=this.saveClicked.bind(this);
    this.removeClicked=this.removeClicked.bind(this);
  }
  removeClicked(){
    this.props.handleRemove(this.props.rowref);
  }
  editClicked()
  {
    this.setState({edit:true});
  }
  saveClicked()
  {
    if(this.refs.input.value.trim()!="")
    {
      this.props.handleSave(this.refs.input.value.trim(),this.props.rowref);
      this.setState({edit:false});
    }
  }
  render()
  {
    var st={
      btn:{
        border:'none',
        outline:'none',
      },
      btnHover:{
        cursor:'pointer',
      },
    };
    if(this.state.edit) {
      return(
        <tr>
          <td className="col-md-3"><img src={this.props.rowData.imageLink} className=" img-circle img-responsive" alt="Cinque Terre" width="50" height="50" /></td>
          <td className="text-center col-md-7"><input type="text" className="form-control" ref="input" defaultValue={this.props.rowData.name} /></td>
          <td className="col-md-2"><a href="#" style={st.btn} className="glyphicon glyphicon-floppy-disk" onClick={this.saveClicked}></a></td>
        </tr>
      );
    }
    else {
      return(
        <tr>
          <td className="col-md-3"><img src={this.props.rowData.imageLink} className=" img-circle img-responsive" alt="Cinque Terre" width="50" height="50" /></td>
          <td className="text-center col-md-7"><h4 className="text-muted">{this.props.rowData.name}</h4></td>
          <td className="col-md-2 btn-group">
            <button type="button" style={st.btn} className="glyphicon glyphicon-pencil btn-link" onClick={this.editClicked}></button>
            <a style={st.btnHover} className="pull-right text-muted" onClick={this.removeClicked}>&times;</a>
          </td>
        </tr>
      );
    }
  }
}
