import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiMoney from './containers/SushiMoney';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super();
    this.state = {
      sushis: [],
      currentSushi: 0,
      money: 100
    };
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(json => {
      const sushis = json.map(sushi => {
        sushi["eaten"]=false
        return sushi
      })
      this.setState({
        sushis: sushis
      })
    })
  }

  sushiEaten = (sushiId) => {
    const updatedSushis = this.state.sushis.map(sushi => sushi.id === sushiId ? {...sushi,eaten: true}: sushi)
    this.setState((prevState) => ({
      sushis: updatedSushis,
      money: parseInt(prevState.money) - parseInt(updatedSushis[sushiId-1].price)
    }))
  }

  nextSushis = () => {
    this.setState((prevState) => ({
      currentSushi: (prevState.currentSushi >= (this.state.sushis.length - 4) ? 0: prevState.currentSushi + 4)
    }))
  }

  addMoney = (amount) => {
    this.setState((prevState) => ({
      money: prevState.money + amount
    }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer currentSushi={this.state.currentSushi} sushis={this.state.sushis} sushiEaten={this.sushiEaten} nextSushis={this.nextSushis} money={this.state.money} />
        <Table sushis={this.state.sushis} money={this.state.money}/>
        <SushiMoney addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;