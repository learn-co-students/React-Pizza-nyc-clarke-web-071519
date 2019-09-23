import React from "react"

const PizzaForm = (props) => {
  const {topping, size, vegetarian} = props.pizza

  const handleSubmit = () => {
    props.editPizza();
  }

  return(
    <div className="form-row">
      <div className="col-5">
          <input 
            name="topping"
            type="text" 
            className="form-control" 
            placeholder="Pizza Topping" 
            value={topping}
            onChange={props.editPizzaTopping}
            />
      </div>
      <div className="col">
        <select 
          name="size" 
          value={size} 
          className="form-control"
          onChange={props.editPizzaSize}
          >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input name="vegetarian" className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian} onChange={props.markPizzaVegetarian}/>
          <label className="form-check-label">
            Vegetarian
          </label>
        </div>
        <div className="form-check">
          <input name="notVegetarian" className="form-check-input" type="radio" value="Not Vegetarian" checked={!vegetarian} onChange={props.markPizzaNotVegetarian}/>
          <label className="form-check-label">
            Not Vegetarian
          </label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
  
}

export default PizzaForm
