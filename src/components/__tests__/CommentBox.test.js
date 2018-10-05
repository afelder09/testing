import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(<CommentBox />);
})

afterEach(() => {
    wrapped.unmount();
})

it('shows a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})

it('has a text area that users can type in', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'New comment'}
    });
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('New comment')
})

it('when form get submitted, the form gets emptied', () => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'New comment' }
    });
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('New comment')
    wrapped.find('form').simulate('submit', {})
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
})