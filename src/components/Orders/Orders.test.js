import React from 'react';
import { shallow } from 'enzyme';
import { Orders, mapStateToProps } from './Orders';

describe('Orders', () => {
  let wrapper;

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

  beforeEach(() => {
    wrapper = shallow(<Orders
      key={Date.now()} 
      orders={mockOrders}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('it should return an object with orders', () => {

      const mockState = {
        orders: mockOrders
      };

      const expected = {
        orders: mockOrders
      }

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    });
  });
});