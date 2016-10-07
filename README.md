# ts-superset-myth
Experimenting with ES2015 -> TypeScript compatibility

To get started:

    npm install


To compile the TypeScript:

    npm run compile
    
To load the examples in the browser:

    npm start
    
Then browse to `http://localhost:7005/`

The example comes with the following branches:

- master: this represents be a port of a es2015 codebase without code changes. The TypeScript compiler throws errors.
- es2015: the original codebase. Working fine with Babel/WebPack
- typescript: the fixed codebase with valid TypeScript. 

