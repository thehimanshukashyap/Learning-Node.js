const _ = require('lodash');

const arr = [1,[2,[3,[4,[5]]]]]

const flatten = _.flattenDeep(arr);
console.log(flatten);