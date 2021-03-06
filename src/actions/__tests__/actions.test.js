import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment', () => {
    let action;

    beforeAll(() => {
        action = saveComment('New comment');
    })

    it('has the correct type', () => {
        expect(action.type).toEqual(SAVE_COMMENT);
    })

    it('has the correct payload', () => {
        expect(action.payload).toEqual('New comment');
    })
})