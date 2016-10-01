const first = {};

first.name = 'Tyler Durden';

//
const prop = 'organization';
const second = {
    name: 'Tyler Durden',
    [prop]: 'Fight Club'
};

const third = {
    name: 'Tyler Durden',
    organization: 'Fight Club'
};


export {first, second, third}
