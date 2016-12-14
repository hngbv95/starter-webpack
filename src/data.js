import _ from 'lodash';

let data = [1,2,3,4,5,6,7,8,9];
let dataRemoved = _.remove(data, function(val) {
    return val > 7;
});
exports.module = data;