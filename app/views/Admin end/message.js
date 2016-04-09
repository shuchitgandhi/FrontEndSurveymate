import React,{Component} from 'react';

export default class Message extends Component {
  constructor (props){
    super (props);
    this.state={table_content :[{tag:"Fusce.",msg:"Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec."},{tag:"Fusce",msg:"adg"},{tag:"Fusce",msg:"ssaf"},{tag:"Fusce",msg:"sfsa",},{tag:"Fusce.",msg:"Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec."},{tag:"Fusce",msg:"adg"},{tag:"Fusce",msg:"ssaf"},{tag:"Fusce",msg:"sfsa",},{tag:"Fusce.",msg:"Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec."},{tag:"Fusce",msg:"adg"},{tag:"Fusce",msg:"ssaf"},{tag:"Fusce",msg:"sfsa",},{tag:"Fusce.",msg:"Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec."},{tag:"Fusce",msg:"adg"},{tag:"Fusce",msg:"ssaf"},{tag:"Fusce",msg:"sfsa",},{tag:"Fusce.",msg:"Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec."},{tag:"Fusce",msg:"adg"},{tag:"Fusce",msg:"ssaf"},{tag:"Fusce",msg:"sfsa",},{tag:"Fusce.",msg:"Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec."},{tag:"Fusce",msg:"adg"},{tag:"Fusce",msg:"ssaf"},{tag:"Fusce",msg:"sfsa",},{tag:"Fusce.",msg:"Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec."},{tag:"Fusce",msg:"adg"},{tag:"Fusce",msg:"ssaf"},{tag:"Fusce",msg:"sfsa",}],};
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.saveData=this.saveData.bind(this);
    this.removeRow=this.removeRow.bind(this);
  }
  removeRow(i)
  {
    var tmpRows= this.state.table_content;
    tmpRows.splice(i,1);
    this.setState({table_content:tmpRows});
  }
  onKeyPressed(){
    var addNew = this.state.table_content;
    addNew.push(
      {
        tag:"hashtag",
        msg:"new message"
      }
    );
    this.setState({table_content:addNew});
  }
  saveData(tag,msg,i){
    var frontFacers=this.state.table_content;
    frontFacers[i].tag=tag;
    frontFacers[i].msg=msg;
    this.setState({array:frontFacers});
  }


  render (){
    var st={
        vert: {
        verticalAlign:'bottom',
      },
      noborder:{
        border:'none',
      },
      background:{
        backgroundColor:"#fbfbfb",
      },

      noborderback:{
        border:'none',
        backgroundColor:"#fbfbfb",
      },

      scroll_div:{
        border:'none',
        overflow:"auto",
        height:368,

      },
      table:{
        tableLayout: 'fixed',
        wordWrap: 'break-word',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.3)',
      }
    };


    return(
      <div className="row">
      <ul className="list-group" style={st.noborderback}>
        <li className="list-group-item col-md-8" style={st.noborderback}>
          <p className="text-muted "><strong>SENDMESSAGES</strong></p>
        </li>

        <li className="list-group-item col-md-4" style={st.noborderback}>
          <p className="text-primary btn" onClick={this.onKeyPressed}><strong>ADDNEW</strong></p>
        </li>
      </ul>
      <table className="table table-hover table-responsive" style={st.noborder}>
        <thead >
          <tr style={st.background}>
            <th className=" col-md-2 text-muted text-center">Hash tag</th>
            <th className=" col-md-8 text-center text-muted">Message</th>
            <th className=" col-md-2"></th>
          </tr>
        </thead>
        </table>
        <div style={st.scroll_div}>
        <table className="table table-hover table-responsive" style={st.table}>
        <tbody >
          {this.state.table_content.map(function(con,i){
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
  editClicked()
  {
    this.setState({edit:true});
  }
  removeClicked()
  {
    this.props.handleRemove(this.props.rowref);
  }
  saveClicked()
  {
    if(this.refs.inputTag.value.trim()!="" && this.refs.inputMessage.value.trim()!="")
    {
      this.props.handleSave(this.refs.inputTag.value.trim(), this.refs.inputMessage.value.trim(),this.props.rowref);
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
        <tr  >
          <td className=" col-md-2 text-muted"><input type="text" className="form-control" ref="inputTag" defaultValue={this.props.rowData.tag} /></td>
          <td className="text-center col-md-8 text-muted	"><input type="text" className="form-control" ref="inputMessage" defaultValue={this.props.rowData.msg} /></td>
          <td className=" col-md-2 text-muted"><a href="#" style={st.btn} onClick={this.saveClicked} className="glyphicon glyphicon-floppy-disk"></a></td>
        </tr>
      );
    }
    else {
      return(
        <tr  >
          <td className=" col-md-2 text-muted">{this.props.rowData.tag}</td>
          <td className="text-center col-md-8 text-muted	">{this.props.rowData.msg}</td>
          <td className=" col-md-2 text-muted">
          <a href="#" style={st.btn} onClick={this.editClicked} className="glyphicon glyphicon-pencil"></a>
          <a style={st.btnHover} className="pull-right  text-muted" onClick={this.removeClicked}>&times;</a>
          </td>
        </tr>
      );
    }
  }
}
