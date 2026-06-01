# Quick start — run the project

If you ran `npm install` in the repository root and saw:
npm ERR! ENOENT Could not read package.json
that is because this project is a Create React App located in the `frontend` directory. Run these commands from the frontend directory:

1. Open a terminal and change to the frontend folder:
   cd /Users/jayeshprakash/Downloads/FW-Worldwide-version2-main/frontend

2. Install dependencies:
   npm install
   (or `yarn` if you use Yarn)

3. Start the dev server:
   npm start
   (or `yarn start`)

Notes:
- Ensure Node.js (recommended >= 14) and npm are installed.
- If a `.env.example` exists, copy it to `.env` and adjust values before starting.
- Running `npm install` at the project root will fail unless a root `package.json` exists.

Troubleshooting: ERESOLVE / peer dependency conflicts

If `npm install` fails with an error like:
npm ERR! ERESOLVE unable to resolve dependency tree
and mentions a conflict between date-fns and react-day-picker, you have two practical options:

Quick temporary fix (recommended if you just want to run the app now):
1. From the frontend folder:
   cd /Users/jayeshprakash/Downloads/FW-Worldwide-version2-main/frontend
2. Install ignoring strict peer dependency resolution:
   npm install --legacy-peer-deps
3. Start the dev server:
   npm start

Permanent fixes (pick one, then run a fresh install):
- Downgrade date-fns to a version compatible with react-day-picker (e.g. v3):
  npm install date-fns@^3 --save
  npm install
- Or upgrade react-day-picker to a release that supports date-fns v4 (check its changelog), then:
  npm install react-day-picker@<compatible-version> --save
  npm install

Notes:
- Avoid typos when starting the dev server: the command is `npm start` (not `npm strat`).
- If you change dependencies, consider deleting node_modules and package-lock.json before reinstalling:
  rm -rf node_modules package-lock.json
  npm install

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

FAQ — "Why doesn't the site show locally?"

Symptom:
- Running `npm start` prints a MODULE_NOT_FOUND error for `ajv/dist/compile/codegen` (stack trace includes ajv-keywords, schema-utils, terser-webpack-plugin, react-scripts, craco). The dev server never starts, so nothing is served at localhost:3000.

Why:
- Some build/tooling packages expect ajv v6 APIs. If the installed ajv is v8+ (or mismatched), ajv-keywords or schema-utils may require modules that don't exist, causing craco/react-scripts to crash before the dev server runs.

Quick fix (run from the frontend folder):
1. Clean and reinstall:
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
2. If `npm start` still errors, install compatible ajv + ajv-keywords:
   npm install ajv@6.12.6 ajv-keywords@3 --save-dev
3. Start:
   npm start

Make it persistent (optional):
- Add overrides (npm) or resolutions (Yarn) to pin versions so future installs keep compatible ajv packages. Example to add to package.json:

```json
// add inside package.json root object
{
  "overrides": {
    "ajv": "6.12.6",
    "ajv-keywords": "3.5.2"
  }
}
```

After changing package.json:
  rm -rf node_modules package-lock.json
  npm install --legacy-peer-deps

Additional troubleshooting: date-fns / react-day-picker conflicts

Symptom:
- `npm install` errors with ERESOLVE mentioning date-fns and react-day-picker, or installing ajv/ajv-keywords triggers further peer-resolution failures.

Quick (get-running) fix:
1. From the frontend folder:
   rm -rf node_modules package-lock.json
   npm install --legacy-peer-deps
   npm start

Correct (recommended) fix:
- Make the dependency tree compatible (example: downgrade date-fns to v3 which react-day-picker@8 requires):
  rm -rf node_modules package-lock.json
  npm install date-fns@^3 --save
  npm install --legacy-peer-deps
  npm start

If you previously tried to fix ajv and now see MODULE_NOT_FOUND for `ajv/dist/compile/codegen`:
- Install legacy ajv packages older build tools expect:
  npm install ajv@6.12.6 ajv-keywords@3 --save-dev
  npm start

Persisting the fix:
- Use `overrides` (npm) or `resolutions` (Yarn) in package.json to pin compatible versions. Example (add to package.json root):

```json
// add inside package.json root object
{
  "overrides": {
    "ajv": "6.12.6",
    "ajv-keywords": "3.5.2",
    "date-fns": "3.6.0"
  }
}
```

After editing package.json:
  rm -rf node_modules package-lock.json
  npm install --legacy-peer-deps
