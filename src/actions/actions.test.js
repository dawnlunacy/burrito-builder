import * as actions from '../actions';

describe('actions', () => {
  describe('setOrders', () => {
    it('should have a type of SET_ORDERS', () => {

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

      const expectedAction = {
        type: 'SET_ORDERS',
        orders: mockOrders
      }

      const result = actions.setOrders(mockOrders);

      expect(result).toEqual(expectedAction);
    });
  });
});