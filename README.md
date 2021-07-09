# acorns_dev

For local front-end development, cd to /client, where the react app is
and run `yarn start`

The dev environment link will be at http://localhost:3000

Before pushing to git, after your development is done in /client folder, run `npm run build`

For backend work, there is currently app.js on root folder. Run
`npm start` on root directory. The api calls from React will not work unless you have both ports up

Later on will set up concurrent launch on both 3000 and 8080 port

the production environment will be at http://localhost:8080

Do not change .ebextensions or Procfile
