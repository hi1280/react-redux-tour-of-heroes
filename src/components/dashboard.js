import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHeroes } from '../actions';

export class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchHeroes();
  }

  renderHeroes(){
    return _.map(this.props.heroes, hero => {
      return (
        <Link to={`/detail/${hero.id}`} key={hero.id}>
          <div>
            <h4>{hero.name}</h4>
          </div>
        </Link>
      );
    }).slice(0, 5);
  }

  render() {
    return (
      <div>
        <h3>Top Heroes</h3>
        <div>
          {this.renderHeroes()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {heroes: state.heroes};
}

export default connect(mapStateToProps, { fetchHeroes })(Dashboard);
