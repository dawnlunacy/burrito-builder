import React from 'react';
import { connect } from 'react-redux';
import './Orders.css';

const Orders = ({orders}) => {
  
console.log("ORDERS", orders)
  if (orders.length === 0) {
    return <p> No Orders Yet. </p>
  } else {
    const orderEls = orders.map(order => {
      return (
        <div className="order">
          <h3>{order.name}</h3>
          <ul className="ingredient-list">
            {order.ingredients.map(ingredient => {
              return <li>{ingredient}</li>
            })}
          </ul>
        </div>
      )
    });
  
  

  return (
    <section>
      { orderEls.length ? orderEls : <p>No orders yet!</p> }
    </section>
  )
}
}
export const mapStateToProps = state => ({
  orders: state.orders
})


export default connect(mapStateToProps, null)(Orders);