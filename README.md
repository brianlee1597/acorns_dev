# acorns_dev

This is a React-Node configuration for Elastic Beanstalk and NGINX routing.

For local front-end development, cd to /client, where the react app is
and run `yarn start`

The dev environment link will be at http://localhost:3000

For production and pushing to git, after your development is done in /client folder, run `npm run build`
The build folder in /client is what is served in EB instance.

For backend work, there is currently app.js on root folder. If you want to see what the production build looks like, run
`npm start` on root directory and see app.js serve the index.html inside the build folder. 
