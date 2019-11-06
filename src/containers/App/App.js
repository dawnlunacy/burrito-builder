import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

const App = ({orders}) => {
  console.log("orders", orders.length)
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm />
        </header>
        {orders.length !== 0 && <Orders key={Date.now()}/>}
      </main>
    );
}

// export default App;
export const mapStateToProps = ({ orders }) => ({
  orders
});

// export const mapDispatchToProps = dispatch => (
//   bindActionCreators({
//     setOrders,
//   }, dispatch)
// );

export default connect(mapStateToProps, null)(App);

