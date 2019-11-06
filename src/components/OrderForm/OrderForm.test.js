import React from 'react';
import { OrderForm, mapDispatchToProps, mapStateToProps } from './OrderForm';
import { shallow } from 'enzyme';
import { setOrders } from '../../actions/index';

describe('OrderForm', () => {
  let wrapper;

  const mockSetOrders = jest.fn();
  const mockHandleError = jest.fn();
  const mockErrorMessage = "Please select some ingredients";

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
    wrapper = shallow(<OrderForm 
      setOrders={mockSetOrders}
      orders={mockOrders}
      handleError={mockHandleError}
      errorMessage={mockErrorMessage}

    />);

  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set state of when handleNameChange is called with an event', () => {
    const event = {
      target: {
        name: "name",
        value: "Trappis"
      }
    }

    wrapper.instance().handleNameChange(event);

    expect(wrapper.state().name).toEqual(event.target.value);
    });

    it('should set state of when handleIngredientChange is called with an event', () => {
      const event = {
        preventDefault: jest.fn(),
        target: {
          name: "queso fresco",
        }
      }
  
      wrapper.instance().handleIngredientChange(event);
  
      expect(wrapper.state().ingredients[0]).toEqual(event.target.name);
      })

  describe('mapStateToProps', () => {
    it('it should return an object with orders and error message', () => {

      const mockState = {
        orders: mockOrders,
        errorMessage: ''
      };

      const expected = {
        orders: mockOrders,
        errorMessage: ''
      }

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls setOrders when updateOrders is called', () => {
      const mockDispatch = jest.fn();
      const mockResponse = mockOrders;

      const actionToDispatch = setOrders(mockResponse);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setOrders(mockResponse);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it.skip('calls handleError when checkInputs is called from handleIngredientChange without a value', () => {
      wrapper.instance().handleError = jest.fn();
      wrapper.instance().checkInputs = jest.fn();
      wrapper.instance().handleIngredientChange = jest.fn();
      const mockEvent = {
        preventDefault: jest.fn(),
        target: {
          name: "queso fresco",
        }
      }
      // const mockState 
      wrapper.find('button').at(5).simulate('click', mockEvent);

      expect(wrapper.instance().handleIngredientChange).toHaveBeenCalled();
      expect(wrapper.instance().checkInputs).toHaveBeenCalled();
      expect(wrapper.instance().handleError).toHaveBeenCalledWith(mockErrorMessage);
    });

    it('should run handleSubmit on click', () => {
      wrapper.instance().handleSubmit = jest.fn();

      const mockEvent = { preventDefault: jest.fn() }

      wrapper.find('button').at(12).simulate('click', mockEvent);

      expect(wrapper.instance().handleSubmit).toHaveBeenCalledWith(mockEvent);
    });
  });

});