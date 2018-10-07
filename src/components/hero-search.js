import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchHeroes } from '../actions';

class HeroSearch extends Component {

  renderHeroes() {
    return _.map(this.props.searchedHeroes, hero => {
      return (
        <li key={hero.id}>
          <Link to={`/detail/${hero.id}`}>{hero.name}</Link>
        </li>
      );
    });
  }

  onSearch = _.debounce((value) => {
    this.props.searchHeroes(value);
  }, 300);

  render() {
    return (
      <div>
        <h4>Hero Search</h4>
        <input onKeyUp={e => this.onSearch(e.target.value)}/>
        <ul>
          {this.renderHeroes()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {searchedHeroes: state.searchedHeroes};
}

export default connect(mapStateToProps, {searchHeroes})(HeroSearch);