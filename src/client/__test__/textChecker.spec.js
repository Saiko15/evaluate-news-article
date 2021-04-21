import {textChecker} from '../src/client/js/textChecker'


describe('Test, the function "textChecker()" should exist' , () => {
    test('It should return true', async () => {
        expect(textChecker).toBeDefined();
    });
});