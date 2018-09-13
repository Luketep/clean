import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import App from './App';

spy(App.prototype, 'componentDidMount');

describe('<App />', () => {
  it('calls componentDidMount', () => {
    const wrapper = shallow(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
    expect(wrapper.find('.app')).to.have.length(1);
  });
});
