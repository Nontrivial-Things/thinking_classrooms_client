# Thinking Classrooms UI

**Thinking Classrooms** project is created to help math teachers in Poland to share theirs ideas for conducting lessons according to the Thinking Classroom. method Through our platform, they will be able to easily search for an interesting issue along with ideas for math classes.

**Thinking Classrooms** platform is an MVP version which will be developed in accordance with the needs of its users.

![Logo](src/assets/img/logo-black.svg)

## Table of Contents

- [About Thinking Classrooms method](#about-thinking-classrooms-method)
- [Technology overview](#technology-overview)
- [How to run Thinking Classrooms in development mode](#how-to-run-thinking-classrooms-in-development-mode)
- [How to run Thinking Classrooms in production mode](##how-to-run-thinking-classrooms-in-production-mode)
- [Available Scripts](#available-scripts)
- [License](#license)

## About Thinking Classrooms method

**Thinking Classrooms** is the concept developed by Peter Liljedahl. The goal of Thinking Classrooms is to get students to solve problems by thinking them through until they arrive at a solution. Some of the takeaways from Liljedahl’s work are easy to implement.:

- _Stand up._ Standing up while solving problems helps students remain engaged with the work in front of them. Standing also leads to collaboration.
- _Hint, don’t answer._ Give enough hints to keep your students on the right path, but don’t walk the path for them.
- _Work on erasable boards._ Solving math problems is a process, often done by trial and error. Erasable boards suggest that errors aren’t permanent.

## Technology overview

Here are the primary technologies used in this project:

- [`React`](https://reactjs.org/)
- [`Styled-Components`](https://styled-components.com/)
- [`TypeScript`](https://www.typescriptlang.org/)
- [`Jest`](https://jestjs.io/)
- [`Testing React Library`](https://testing-library.com/)
- [`Mock Service Worker`](https://mswjs.io/)
- [`GraphQl with Apollo client`](https://www.apollographql.com/)

Here are the service this project uses:

- [`Netlify`](https://www.netlify.com/)

## How to run Thinking Classrooms in development mode

1. Make sure you have Git and Node installed on your local machine. Required Node version: 16.13.0
2. Download or clone the repository.
3. In a terminal install all project dependencies with `yarn`.
4. Start the development server with `yarn start`
5. With your server running, open your browser and visit the site:
   [`http://localhost:3000/`](http://localhost:3000/)

## How to run Thinking Classrooms in production mode

Just visit this site:
[https://zealous-spence-867386.netlify.app/](https://zealous-spence-867386.netlify.app/)

## Available Scripts

In the project directory, you can run:

# `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## License

MIT
