import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzaList: [],
    formValue: {
      topping: "",
      size: "",
      vegetarian: false
    }
  }

  handleChange = (event) => {
    this.setState({
      formValue: {
        ...this.state.formValue, 
        [event.target.name]: event.target.value}
    })
  }

  handleEdit = (pizzaId) => {
    this.state.pizzaList.forEach(pizza => {
      if(pizzaId === pizza.id){
        this.setState({
          formValue: pizza
        })
      }
    })
  }

  handleSubmit(formVal){
    fetch(`http://localhost:3000/pizzas/${formVal.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formVal)
    })
  }


  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
      .then(res => res.json())
      .then(pizzas => this.setState({
        pizzaList: pizzas
      }))
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleChange={this.handleChange} formValue={this.state.formValue} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzaList={this.state.pizzaList} handleEdit={this.handleEdit}/>
      </Fragment>
    );
  }
}

export default App;
