import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

it('shows a commet box', () => {
    const wrappedComponent = shallow(<App />);

    expect(wrappedComponent.find(CommentBox).length).toEqual(1);
});