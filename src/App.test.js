import { shallow } from 'enzyme';
import TryingLifecycle from './TryingLifecycle';
import React from 'react';
import App from './App.js';

it('should show correct text', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.text().includes('Learn React')).toBe(true);
});

// it('Should return 4', () => {
//   const wrapper = shallow(<TryingLifecycle/>)
//   let result = wrapper.instance().sum();
//   expect(result).toEqual(4);
// });

// import { render } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
