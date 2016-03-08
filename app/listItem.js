import React, {Component} from 'react';

export default class ListItem extends Component {
  render() {
    console.log('this.props are ', this.props);
    return (
      <div>
        {this.props.name}
      </div>
    );
  }
}
