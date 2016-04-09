import React, {Component} from 'react';

export default class Status extends Component{

  constructor(props)
  {
    super(props);

  }

  render()
  {

    var st={
      attri1:{
        color:"#000000",
      },
      attri2:{
        color:"#000000",
      },
      attri3:{
        color:"#000000",
      },
    }

    if(this.props.stat=="1")
    {
      st.attri1.color="#1a84eb";
    }
    if(this.props.stat=="2")
    {
      st.attri1.color="#1a84eb";
      st.attri2.color="#1a84eb";
    }
    if(this.props.stat=="3")
    {
      st.attri1.color="#1a84eb";
      st.attri2.color="#1a84eb";
      st.attri3.color="#1a84eb";
    }
    return(
        <div>
          <div className="col-md-4">
              <div className="col-md-10">
                  <div className="text-muted text-center"><u><small>STEP 1</small></u></div>
                  <h5 className="text-center" style={st.attri1}><strong>COMMUNICATE </strong></h5>
              </div>
              <h3 className="glyphicon glyphicon-arrow-right col-md-2 text-muted"></h3>
          </div>
          <div className="col-md-4">
            <div className="col-md-10">
                <div className="text-muted text-center" ><u><small>STEP 2</small></u></div>
                <h5 className="text-center" style={st.attri2}><strong>REVIEW </strong></h5>
            </div>
              <h3 className="glyphicon glyphicon-arrow-right col-md-2 text-muted"></h3>
          </div>
          <div className="col-md-4">
            <div className="col-md-10">
                <div className="text-muted text-center"><u><small>STEP 3</small></u></div>
                <h5 className="text-center" style={st.attri3}><strong>RESULTS </strong></h5>
            </div>
          </div>
        </div>


    );
  }
}
