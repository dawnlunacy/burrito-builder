export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const postOrder = async (newOrder) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  
    const response = await fetch('http://localhost:3001/api/v1/orders', options)
    const data = await response.json();
      return data
  } catch(error) {
    throw Error("Problem fethcing orders")
  }
  
};

export const deleteOrder = async (orderId) => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const url = `http://localhost:3001/api/v1/orders/${orderId}`
    const response = await fetch(url, options)
    const data = await response.json();
      return data
  } catch(error) {
    throw Error("Problem deleting order")
  }
};