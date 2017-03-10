
findMinMax = require('../app/library.js').findMinMax;
(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [0] for [0]', function () {
        expect(findMinMax([0])).toEqual([0]);
      });

      it('should return [-10, 0] for [-10, -9, -8, -7, -4, -2, -1, 0]', function () {
        expect(findMinMax([-10, -9, -8, -7, -4, -2, -1, 0])).toEqual([-10, 0]);
      });

      it('should return [-20, 15] for [10, -5, -20, 8, 11, -4, -2, 15, -1, 0, 5, 6, ]', function () {
        expect(findMinMax([10, -5, -20, 8, 11, -4, -2, 15, -1, 0, 5, 6, ])).toEqual([-20, 15]);
      });


      it('should return [5,90] for [11, 34, 65, 22, 76, 45, 5, 90, 14, 31]', function () {
        expect(findMinMax([11, 34, 65, 22, 76, 45, 5, 90, 14, 31])).toEqual([5, 90]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 14] for [14, 2]', function () {
        expect(findMinMax([14, 2])).toEqual([2, 14]);
      });

      it('should return [14] for [14]', function () {
        expect(findMinMax([14])).toEqual([14]);
      });

      it('should return [14] for [14]', function () {
        expect(findMinMax([-5])).toEqual([-5]);
      });

      it('should return [14] for [14]', function () {
        expect(findMinMax([-100])).toEqual([-100]);
      });

      it('should return [0] for [0]', function () {
        expect(findMinMax([0])).toEqual([0]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [-1] for [-1, -1, -1, -1]', function () {
        expect(findMinMax([-1, -1, -1, -1])).toEqual([-1]);
      });

      it('should return [9] for [9, 9, 9, 9]', function () {
        expect(findMinMax([9, 9, 9, 9])).toEqual([9]);
      });

    });

  });

})();

