import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const API = 'http://localhost:3000/pizzas'

class App extends Component {
  state = {
    pizzas: [],
    editPizza: {}
  }

  componentDidMount() {
    this.getPizzasInfo();
  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizza={this.state.editPizza} 
          editPizza={this.editPizza} 
          editPizzaToping={this.editPizzaTopping} 
          editPizzaSize={this.editPizzaSize} 
          markPizzaVegetarian={this.markPizzaVegetarian}
          markPizzaNotVegetarian={this.markPizzaNotVegetarian}
          />
        <PizzaList pizzas={this.state.pizzas} selectPizzaToEdit={this.selectPizzaToEdit}/>
      </Fragment>
    );
  }

  getPizzasInfo = () => {
    fetch(API)
    .then(res=>res.json())
    .then(pizzasArray => {
      this.setState({
        pizzas: pizzasArray
      })
    })
  }

  selectPizzaToEdit = (pizza) => {
    this.setState({
      editPizza: pizza
    })
  }

  editPizzaTopping = (e) => {
    this.setState({
      editPizza: {...this.state.editPizza, topping: e.target.value}
    })
  }

  editPizzaSize = (e) => {
    this.setState({
      editPizza: {...this.state.editPizza, size: e.target.value}
    })
  }

  markPizzaVegetarian = (e) => {
    this.setState({
      editPizza: {...this.state.editPizza, vegetarian: e.target.checked}
    })
  }

  markPizzaNotVegetarian = (e) => {
    this.setState({
      editPizza: {...this.state.editPizza, vegetarian: !e.target.checked}
    })
  }

  editPizza = () => {
    fetch(`${API}/${this.state.editPizza.id}`,{
      method: "PATCH",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.editPizza)
    }).then(res=>res.json())
    .then(updatedPizzaObj => {
      let updatedPizzas = []
      this.state.pizzas.map(pizza => {
        if (pizza.id === updatedPizzaObj.id) {
          updatedPizzas.push(updatedPizzaObj)
        } else {
          updatedPizzas.push(pizza)
        }
        return updatedPizzas
      })
      this.setState({
        pizzas: updatedPizzas
      })
    })
  }


}



export default App;
