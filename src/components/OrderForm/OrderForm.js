import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setOrders, handleError } from '../../actions';
import { getOrders } from '../../apiCalls';



export class OrderForm extends Component {
  constructor() {
    super();
    this.state = {
      id: Date.now(),
      name: '',
      ingredients: []
    };
  }

  componentDidMount() {
    const { setOrders } = this.props
    console.log("SET", setOrders)
    getOrders()
      .then(data => setOrders(data.orders))
      .catch(err => console.error('Error fetching:', err));
      
    
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleIngredientChange = e => {
    e.preventDefault();
    this.setState({ingredients: [...this.state.ingredients, e.target.name]});
  }

  handleSubmit = e => {
    e.preventDefault();
    this.checkInputs();
  }

  checkInputs = () => {
    const { handleError, setOrders, orders } = this.props;
    if (this.state.ingredients.length === 0) {
      handleError(`${this.state.name} Please select some ingredients`)
    }
    else {
      setOrders([...orders, this.state]);
      this.clearInputs();
    }
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }


  render() {
    const {errorMessage } = this.props;
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>
        <p> { errorMessage } </p>
        
        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

// export default OrderForm;

export const mapStateToProps = state => ({
  orders: state.orders,
  errorMessage: state.errorMessage
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setOrders,
    handleError
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);