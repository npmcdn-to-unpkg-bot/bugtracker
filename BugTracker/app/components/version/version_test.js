'use strict';

describe('bugTracker.version module', function() {
  beforeEach(module('bugTracker.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
