# User Management

These are the design requirements for the user management functionality of the Project Connect App. The app requires 
basic user management functionality, including account creation, login an logout capabilities, and tracking the user activity.

## Features

* Account creation with username and password, and email verification
* Integration with OAuth2 providers: Facebook, GitHub, Google, Instagram, LinkedIn, OpenStreetMap and Twitter
* Associating and tracking school tagging activity to each user
* Adding the required new screens for users to manage account and track their activity
* Adding a navbar menu to access account functinoality throughout the app

## Technical requirements

The user management functionality needs to be seamlessly integrated with the existing app:

- The app is a mobile-first web application, designed to be played primarily on smart phones, though it also displays 
properly and is equally usable on a desktop computer. It uses [Bootstrap](https://getbootstrap.com/) as a front-end framework
for a responsive display.

- The application is built in [React](https://reactjs.org/) using [Next.js](https://nextjs.org/). Refer to 
the [source code repository](https://github.com/lacabra/proco-map-app) for information on how the application is structured.

- The backend database uses Postgres, refer to [this file](https://github.com/lacabra/proco-map-app/blob/master/db/dbOps.js)
for the structure of the existing tables.

## Proposed Contribution Guidelines

Submit Pull Requests (PR) against [this code repository](https://github.com/lacabra/proco-map-app/). The repository is integrated 
with [Vercel](https://vercel.com/) for deployment, and any new PR creates a live deployment for preview and testing.

1. Propose a workflow, on how the user can navigate in and out of the various screens, indentifying the new interfaces that need to be build.
2. Propose the DB table(s) structure that will contain the user data. Open a PR adding to 
[this file](https://github.com/lacabra/proco-map-app/blob/master/db/dbOps.js) to create the actual DB tables. Once the PR is merged, the project
maintainer will push the creation of these tables into production.
3. Design/draft the new screens that need to be created, and submit them for feedback.
4. Open Pull Requests for each new feature added. Smaller (and more frequent) Pull Requests make it easier for reviewers to review, approve and merge.
