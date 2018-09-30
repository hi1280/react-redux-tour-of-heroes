import React, { Component } from 'react';

export default class HeroDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null
    }
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    this.setState({id});
  }

  render() {
    return (
      <div>
        <h2>Name Details</h2>
        <div><span>id: </span>{this.state.id}</div>
        <div>
          <label>name:
            <input />
          </label>
        </div>
        <button>go back</button>
        <button>save</button>
      </div>
    );
  }
}
