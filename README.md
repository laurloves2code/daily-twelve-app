Lauren Cameron
March - May 2020
Tuesday Project Class

PROJECT PLAN

------- Overview/Objective Summary

App Name: Daily Twelve
Taking 12 minutes at some point throughout the day to reflect can be refreshing and set the tone for the rest of the day.
It will only take about 12 minutes to use this app daily.
With this app, the user is greeted and encouraged with a motivational quote.
Continue scrolling and the user is prompted to input thoughts of gratitude.
Thoughts are stored until deleted. The user can view the thoughts log by selecting Thoughts from the navigation menu.
Next, the user is able to create a to do list.
Currently the 7 most recent priorites are rendered, but as items are marked done and removed, any others on the list will show.
Finally, the Weather for day. The background image is pulled from an API to reflect the weather.


------- Technical Summary

- HTML
- CSS
- Bootstrap
- Responsive UI
- JavaScript - 
- ReactJS
- React Router, (npm install --save react-router-dom)
- npm, (npm install)
- Local Storage using HTML5
- API data (lest below)


------- Features

- Greeting
- Encouraging Quote
- Gratitude List Journal
- To Do List
- Weather with image icon to reflect the weather. Example 80 degrees shows a sunshine image


----- UI

- \public\dailyTwelvePreview.jpg - initial design
- Home Page containts footer greeting, encouraging quote, gratitude thoughts, to do list, daily weather.
- Greeting examples: "You're doing awesome!", "You got this!", "Have a great day!"
- Encouraging motivational quote of the day
- About. Why this app? Benefits of documenting thoughts of gratitude.
- APIs will be used to render the weather, quotes and weather/landscape images.
- HTML5 local storage used to store gratitude and to do list entries.

------- Milestones
* Week 1 - Develop App Idea
* Week 2 - Planning. Complete Project Plan. 
         - Start Learning Bootstrap. 
         - Make git commits
         - Rough Draft of UI.
         - Answer these questions: How will it work? What are the features and how do they work together? 
           How will the user interact with the App? What APIs will be used?
* Week 3 - APIs Confirmed. Finalize Design and Router pages. Create mock API data. Continue Learning Bootstrap. Git Commits.
* Week 4 - Weather API, (possibly - search zip code, user location)
* Week 5 - Image API to interact with Weather API data
* Week 6 - Learn HTML5 Local Storage - Priority List, Quote, User Greeting
* Week 7 - Work out any bugs
* Week 8 - Final App Complete

------- APIs

Weather Images - https://www.pixabay.com          
Weather - https://openweathermap.org/
Quotes - https://theysaidso.com/api/ (no api key required)

The API keys will be provided or if api is already available place in following locations:
\src\Components\Weather.js - insert Open Weather api key in line 32 replace 'process.env.REACT_APP_WEATHER_API_KEY' with key
\src\Components\Weather.js - insert Pixabay api key in line 46 replace 'process.env.REACT_APP_PHOTO_API_KEY' with key

--------------------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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
