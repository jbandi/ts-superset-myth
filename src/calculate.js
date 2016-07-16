import map from 'lodash/map';

export function calculate(input){
    return map(input, n => n * 3);
}
