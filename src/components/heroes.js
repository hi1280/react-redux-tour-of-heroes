import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Heroes extends Component {
  renderHeroes(){
    const heroes=[
      {id:1,name:"BLACK WIDOW"},
      {id:2,name:"CAPTAIN AMERICA"},
      {id:3,name:"FALCON"}
    ]
    return heroes.map(hero => {
      return (
        <li key={hero.id}>
          <Link to={`/detail/${hero.id}`}>
            <span>{hero.id}</span>{hero.name}
          </Link>
          <button>x</button>
        </li>
      )
    })
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
