import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { searchHeroes } from '../actions';

const SearchText = styled.input`
  width: 200px;
  height: 20px;
`

const SearchResult = styled.ul`
  margin-top: 0;
  padding-left: 0;
`

const SearchResultList = styled.li`
  border-bottom: 1px solid gray;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  width:195px;
  height: 16px;
  padding: 5px;
  background-color: white;
  cursor: pointer;
  list-style-type: none;
  :hover {
    background-color: #607D8B;
  }
`

const StyledLink = styled(Link)`
  color: #888;
  display: block;
  text-decoration: none;
  :hover {
    color: white;
  }
  :active {
    color: white;
  }
`

class HeroSearch extends Component {

  renderHeroes() {
    return _.map(this.props.searchedHeroes, hero => {
      return (
        <SearchResultList key={hero.id}>
          <StyledLink to={`/detail/${hero.id}`}>{hero.name}</StyledLink>
        </SearchResultList>
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
        <SearchText onKeyUp={e => this.onSearch(e.target.value)}/>
        <SearchResult>
          {this.renderHeroes()}
        </SearchResult>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {searchedHeroes: state.searchedHeroes};
}

export default connect(mapStateToProps, {searchHeroes})(HeroSearch);