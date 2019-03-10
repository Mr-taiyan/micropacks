const expect = require('chai').expect;
const dedupe = require('../dedupe');

describe('dedupe', function () {
    it('should remove duplicates', function () {
        let deduped = dedupe([1,1,2,3,4,5,6]);

        expect(deduped).to.deep.equal([1,2,3,4,5,6]);
    });

    it('should remove multiple duplicates', function () {
        let deduped = dedupe([1,2,3,3,3,3,3,3,3,3,3,4,5,6]);
        expect(deduped).to.deep.equal([1,2,3,4,5,6]);
    });
});