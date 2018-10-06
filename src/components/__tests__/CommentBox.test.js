import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
})

afterEach(() => {
    wrapped.unmount();
})

it('shows a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})

describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'New comment' }
        });
        wrapped.update();
    })

    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('New comment')
    })
    
    it('when form get submitted, the form gets emptied', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('New comment')
        wrapped.find('form').simulate('submit')
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
})
