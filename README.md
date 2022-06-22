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

# Deployment Github

~~~shell
# generates a webpage into the ONE dist folder
npm run build 

# force git to push dis folder (which is usually ignored) 
git add dist -f
git commit "adding dist"

# push to subtree gh-pages 
# which deploys it automatically to url defined in vite.config.js base
git subtree push --prefix dist origin gh-pages
~~~

[Vue App](https://hoochicken.github.io/vueapp/)

