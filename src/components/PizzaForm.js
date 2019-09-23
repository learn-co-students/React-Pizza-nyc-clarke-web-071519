import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" 
                  name='topping' onChange={props.handleChange} value={props.formValue.topping}/>
        </div>
        <div className="col">
          <select value={props.formValue.size} name='size' onChange={props.handleChange} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name='vegetarian' type="radio" value={true} onChange={props.handleChange} checked={props.formValue.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name='vegetarian' type="radio" value={false} onChange={props.handleChange} checked={!props.formValue.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.handleSubmit(props.formValue)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
