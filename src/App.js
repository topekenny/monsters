import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.components';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [ ],
      searhField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters: users}));
  }
  render(){
      const {monsters, searhField} = this.state;
      const filteredMonsters = monsters.filter(
        monster => monster.name.toLowerCase().includes(searhField.toLowerCase())
        );
    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder = 'Search Monsters'
          handleChange = {e =>this.setState({searhField: e.target.value })}
        />
        <CardList monsters = {filteredMonsters} />     
      </div>
    );
  }
}

export default App;
