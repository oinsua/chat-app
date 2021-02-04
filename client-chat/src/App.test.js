import { render, screen } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';
import Chats from './page/Chats/Chats';
import Home from './page/Home/Home';
import Messages from './components/Message_Chat/Messages';
import Message from './components/Message/Message';
import Box from './components/Box_Chat/Box';
Enzyme.configure({ adapter: new Adapter() });
 
test('renders text Web', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Web/i);
  expect(linkElement).toBeInTheDocument();
});

test('render Chats correctly', () => {
  const wrapper = shallow(
    <BrowserRouter><Chats/></BrowserRouter> 
);

expect(toJson(wrapper)).toMatchSnapshot();
});


test('render Home correctly', () => {
  const wrapper = shallow(
    <BrowserRouter><Home/></BrowserRouter> 
);

expect(toJson(wrapper)).toMatchSnapshot();
});


test('render Messages correctly', () => {
  const wrapper = shallow(
    <BrowserRouter><Messages/></BrowserRouter> 
);

expect(toJson(wrapper)).toMatchSnapshot();
});

test('render Box correctly', () => {
  const wrapper = shallow(
    <BrowserRouter><Box/></BrowserRouter> 
);

expect(toJson(wrapper)).toMatchSnapshot();
});

test('render Message correctly', () => {
  const wrapper = shallow(
    <BrowserRouter><Message/></BrowserRouter> 
);

expect(toJson(wrapper)).toMatchSnapshot();
});