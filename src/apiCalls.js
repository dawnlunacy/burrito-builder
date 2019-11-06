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
    console.log("RESPONSE POST", data)
      return data
  } catch(error) {
    throw Error("Problem fethcing orders")
  }
  
};