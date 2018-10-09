import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchHeroes, createHero, deleteHero } from '../actions';

const HeroesList = styled.ul`
  margin: 0 0 2em 0;
  list-style-type: none;
  padding: 0;
  width: 15em;

  li {
    position: relative;
    cursor: pointer;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }

  li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }

  a {
    color: #888;
    text-decoration: none;
    position: relative;
    display: block;
    width: 250px;
  }

  a:hover {
    color:#607D8B;
  }

  .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    min-width: 16px;
    text-align: right;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`

const DeleteButton = styled.button`
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
  font-family: Arial;
  position: relative;
  left: 194px;
  top: -32px;
  background-color: gray !important;
  color: white;
  :hover {
    background-color: #cfd8dc;
  }
`

export class Heroes extends Component {
  componentDidMount() {
    this.props.fetchHeroes();
  }

  onDeleteClick(id) {
    this.props.deleteHero(id);
  }

  onSubmit(values) {
    this.props.createHero(values);
    this.props.reset();
  }

  renderHeroes(){
    return _.map(this.props.heroes, hero => {
      return (
        <li key={hero.id}>
          <Link to={`/detail/${hero.id}`}>
            <span className="badge">{hero.id}</span> {hero.name}
          </Link>
          <DeleteButton onClick={this.onDeleteClick.bind(this, hero.id)}>x</DeleteButton>
        </li>
      );
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h2>My Heroes</h2>
        <div>
          <label>Hero name:
            <Field name="name" component="input" type="text"/>
          </label>
          <button type="submit">add</button>
        </div>
        <HeroesList>
          {this.renderHeroes()}
        </HeroesList>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {heroes: state.heroes};
}

export default reduxForm({
  form: 'HeroesForm'
})(
  connect(mapStateToProps, { fetchHeroes, createHero, deleteHero })(Heroes)
);