import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchHero, updateHero } from '../actions';

class HeroDetail extends Component {
  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchHero(id);
    const { hero } = this.props;
    this.props.initialize({
      name: hero.name
    });
  }

  onBack() {
    this.props.history.goBack();
  }

  onSave(id, values) {
    this.props.updateHero(id, values);
    this.props.history.goBack();
  }

  render() {
    const { hero, handleSubmit } = this.props;

    if (!hero) {
      return <div>Loading...</div>;
    }

    return (
      <form onSubmit={handleSubmit(this.onSave.bind(this, hero.id))}>
        <h2>{hero.name} Details</h2>
        <div><span>id: </span>{hero.id}</div>
        <div>
          <label>name:
            <Field name="name" component="input" type="text"/>
          </label>
        </div>
        <button onClick={this.onBack.bind(this)} type="button">go back</button>
        <button type="submit">save</button>
      </form>
    );
  }
}

function mapStateToProps({ heroes }, ownProps) {
  return {
    hero: heroes[ownProps.match.params.id]
  };
}

export default reduxForm({
  form : 'HeroDetailForm'
})(
  connect(mapStateToProps, { fetchHero, updateHero })(HeroDetail)
)