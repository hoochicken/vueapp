# app

## Settings

~~~shell
# go to app
# adjust api path in .env file.
VITE_API_HOST=http://symapi.localhost
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

## Fixtures load

~~~shell
# delete database, and load fixtures afterwards 
bin/console doctrine:fixtures:load

# add fixtures afterwards 
bin/console doctrine:fixtures:load --append
~~~

~~~sql
# SQL for checking on duplicates
SELECT * FROM
(
	SELECT COUNT(word.title) AS counter, word.title FROM public.word
	GROUP BY word.title
) as x
WHERE counter > 1
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

* [Vue App](https://hoochicken.github.io/vueapp/)
* [Github Settings](https://github.com/hoochicken/vueapp/settings/pages)

