# Flee Your Followers 

Ever thought of your GitHub followers as some merciless, zombie-like stalkers that aim to destroy you with forced merges?! Well, they are!! At least in this fun but nerve-racking game. The goal of this adventure is to espace your Github followers as long as possible in a small playing field that quickly fills up with enemies. But watch  out, the more followers you have, the harder it is to survive. 

This game was created by [Jan](https://github.com/crianonim) and [Leonie](https://github.com/LaLeonie). The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## User Journey 
- Enter your GitHub name on the Landing Page 
- Move your GitHub avatar on the playing field by pressing the arrow keys. One after another, more of your GitHub follower will appear on the playing field. As soon as their avatars are fully visible, they can destroy you, so escape quickly. The longer you survive, the more points you get. 
- Once you failed, you will see a table of recent scores (local on your computer) and you can start all over again

## API 
The game uses the GitHub API. No API key needed. 

## Project Goals 
[x] Accept some user input (e.g. a username)
[x] Query an API (e.g. the Github API, or any other fun one)
[x] Populate the UI with API data
[x] Have some form of persistent state and interactivity, e.g.
[x] A score bar that increases over time
[x] A game over page that shows the final score and allows you to play again
[x] Have integration tests using React Testing Library

## Project Stretch Goals 
[x] A table showcasing recent scores 
[ ] Scoring depending not only on time but also on number of followers
[ ] Error message when user doesn't exist in GitHub 

## Component Setup 
API (parent of 3 components)
        LandingPage
        GamePage (parent of 2 components)
                Playing field (parent of 2 components)
                        Main Player
                        Followers
                Score display
        EndingPage

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
