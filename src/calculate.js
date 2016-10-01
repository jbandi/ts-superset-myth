import map from 'lodash/map';
// import {map} from 'lodash';

export function calculate(input){
    return map(input, n => n + 3);
}
