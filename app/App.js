import React, {Component} from 'react';
import ListItem from './listItem';

var x = ['1', '5', '6', '3', '1', '2'];

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      x: ['1', '5', '6', '3', '1', '2']
    }
    
    this.buttonPressed = this.buttonPressed.bind(this);
  }
  render() {
    return (
      <div>
        Hello world bye world
        {this.renderList()}
        <div onClick={this.buttonPressed}>Button</div>
      </div>
    );
  }
  
  renderList() {
    console.log('inside renderList listItem is ', ListItem);
    var list = [];
    for (var i= 0; i< this.state.x.length; i++) {
      console.log('inside for');
      var listItem = <ListItem name={this.state.x[i]} />;
      list.push(listItem);
    }
    return list;
  }
  
  buttonPressed() {
    console.log('button pressed');
    this.setState({
      x: ['6', '3', '1', '2', '1', '5']
    })
  }
}

export default App;
