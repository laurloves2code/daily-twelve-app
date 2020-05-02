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

------- Requirements and Steps to View Final App

- Visit Repository on GitHub - https://github.com/laurloves2code/daily-twelve-app - Download Zip and Extract project folder to computer
- Open Visual Studio Code or install on computer: https://code.visualstudio.com/download
- install node.js - https://nodejs.org/dist/v12.16.3/node-v12.16.3-x64.msi
- Open VS Code and open new terminal
- install npm using command: npm install
- In Terminal, ensure npm 6.13.4 and node.js 12.16.1 are installed using terminal commands:
    node --version
    npm -v
- Open Project folder in Visual Studio
- Run React App using commands:
    npm init react-app lc-app
    cd lc-app
- Install Bootstrap with command:
    npm install bootstrap@3
    npm start
- This will open a New React App page in your browser with the react logo. 
If this happens you are good to go to the next step to running the Daily Twelve App.  
- In you computer's File Explorer, open the project folder. Move the files outside the lc-app folder into the lc-app folder.
- Before running app. Input API Keys into the weather.js component file:
    The API keys will be provided or if api is already available place in following locations:
    \src\Components\Weather.js - insert Open Weather api key in line 32 replace 'process.env.REACT_APP_WEATHER_API_KEY' with key
    \src\Components\Weather.js - insert Pixabay api key in line 46 replace 'process.env.REACT_APP_PHOTO_API_KEY' with key




