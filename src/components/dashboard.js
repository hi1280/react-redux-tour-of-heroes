import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {

  renderHeroes(){
    const heroes=[
      {id:1,name:"BLACK WIDOW"},
      {id:2,name:"CAPTAIN AMERICA"},
      {id:3,name:"FALCON"}
    ]
    return heroes.map(hero => {
      return (
        <Link to={`/detail/${hero.id}`} key={hero.id}>
          <div>
            <h4>{hero.name}</h4>
          </div>
        </Link>
      )
    })
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
