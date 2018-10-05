import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchHeroes, createHero, deleteHero } from '../actions';

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
            <span>{hero.id}</span>{hero.name}
          </Link>
          <button onClick={this.onDeleteClick.bind(this, hero.id)}>x</button>
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
        <ul>
          {this.renderHeroes()}
        </ul>
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