// import * as map from 'lodash/map'; // this works since lodash/map has no default export
import map from 'lodash/map'; // this wokrs if you set "allowSyntheticDefaultImports": true in tsconfig.json


export function calculate(input: Array<number>){
    return map(input, n => n + 3);
}
