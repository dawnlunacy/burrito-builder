export const setOrders = orders => ({
  type: 'SET_ORDERS',
  orders
});

export const handleError = errorMessage => ({
  type: 'SET_ERROR_MESSAGE',
  errorMessage
});