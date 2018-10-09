import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { fetchHeroes } from '../actions';
import HeroSearch from './hero-search';

const Grid = styled.div`
  margin: 0;
  padding: 10px 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 25%;
  float: left;
  padding-right: 20px;
  padding-bottom: 20px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const Hero = styled.div`
  padding: 20px;
  text-align: center;
  color: #eee;
  max-height: 120px;
  min-width: 120px;
  background-color: #607D8B;
  border-radius: 2px;

  :hover {
    background-color: #EEE;
    cursor: pointer;
    color: #607d8b;
  }
  @media (max-width: 600px) {
    font-size: 10px;
    max-height: 75px;
  }
  @media (max-width: 1024px) {
    min-width: 60px;
  }
`

export class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchHeroes();
  }

  renderHeroes(){
    return _.map(this.props.heroes, hero => {
      return (
        <StyledLink to={`/detail/${hero.id}`} key={hero.id}>
          <Hero>
            <h4>{hero.name}</h4>
          </Hero>
        </StyledLink>
      );
    }).slice(0, 4);
  }

  render() {
    return (
      <div>
        <h3>Top Heroes</h3>
        <Grid>
          {this.renderHeroes()}
        </Grid>
        <HeroSearch />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {heroes: state.heroes};
}

export default connect(mapStateToProps, { fetchHeroes })(Dashboard);
