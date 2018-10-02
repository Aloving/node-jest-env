const addAtoB = require('./');

describe('testing addAtoB', () => {
	it('should be equal 3', () => {
		expect(addAtoB(1,2)).toBe(3);
	});
});
