# app

## Settings

~~~shell
# adjust api in .env file.
# well, that SHOULD work, but doesn't
API_HOST=http://symapi.localhost

# main.js => directly here
let url = `http://symapi.localhost/`;
~~~

## Start etc.

~~~shell
# start up 
npm install

# Compile and Hot-Reload for Development
npm run dev

# Compile and Hot-Reload for Development
npm run serve
~~~

# Deployment

~~~shell
# Compile and Minify for Production
npm run build

# Run Unit Tests with [Vitest](https://vitest.dev/)
npm run test:unit

# Run End-to-End Tests with [Cypress](https://www.cypress.io/)
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing

# Lint with [ESLint](https://eslint.org/)
npm run lint
~~~
