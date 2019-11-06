import { orders } from './orders';

describe('orders', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = orders(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return an state with a new error', () => {
    const mockOrders = [{
      id: 0,
      name: "Lacy",
      ingredients: ["AwesomeSauce", "Optimism"]
    }, 
    {
      id: 1,
      name: "Robbie",
      ingredients: ["Pants", "Pugs", "Sweaters"]
    }];

    const initialState = '';
    const state = initialState;
    const action = {
      type: "SET_ORDERS",
      orders: mockOrders
    }

    const result = orders(state, action)

    expect(result).toEqual(action.orders)
  });
});