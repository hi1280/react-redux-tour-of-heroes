import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchHero, updateHero } from '../actions';

const Label = styled.label`
  display: inline-block;
  width: 3em;
  margin: .5em 0;
  color: #607D8B;
  font-weight: bold;
`

const Input = styled(Field)`
  height: 2em;
  font-size: 1em;
  padding-left: .4em;
`

const Button = styled.button`
  margin-top: 20px;
`

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
          <Label>name:
            <Input name="name" component="input" type="text"/>
          </Label>
        </div>
        <Button onClick={this.onBack.bind(this)} type="button">go back</Button>
        <Button type="submit">save</Button>
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