import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHeroes } from '../actions';

export class Heroes extends Component {
  componentDidMount() {
    this.props.fetchHeroes();
  }

  renderHeroes(){
    return _.map(this.props.heroes, hero => {
      return (
        <li key={hero.id}>
          <Link to={`/detail/${hero.id}`}>
            <span>{hero.id}</span>{hero.name}
          </Link>
          <button>x</button>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>My Heroes</h2>
        <div>
          <label>Hero name:
            <input/>
          </label>
          <button>add</button>
        </div>
        <ul>
          {this.renderHeroes()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {heroes: state.heroes};
}

export default connect(mapStateToProps, { fetchHeroes })(Heroes);