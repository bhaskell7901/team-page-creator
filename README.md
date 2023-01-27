# Team Web Page Generator

Welcome to Team Page Generator!  An App that lets you generator your own Team web page as a manager.

Checkout the demo video [here](https://drive.google.com/file/d/1bIBp4gA5yf6qTe3MbnJi2-v2MOmVI9XM/view?usp=sharing)


## Table of Contents

1. [Technology Used](#technology-used)
1. [Overview and Strategies](#overview-and-strategies)
1. [Bonus Features](#bonus-features)
1. [Learning Points](#learning-points)
1. [Author Info](#author-info)
1. [License](#license)


## Technology Used 

| Technology | Resource URL | 
| ------------- | ------------- | 
| Node.js | [https://nodejs.org/en/docs/](https://nodejs.org/en/docs/) |
| JS | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| Jest | [https://jestjs.io/](https://jestjs.io/) |
| Git | [https://git-scm.com/](https://git-scm.com/) |
| inquirer | [https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer) |
| inquirer-loop | [https://www.npmjs.com/package/inquirer-loop](https://www.npmjs.com/package/inquirer-loop) |



## Overview and Strategies

A general overview of the application flow is:
1. Start the program
1. Run through the command line questionaire
1. Get the Generated HTML file
1. Use it in favorite Web Browser

The project was implemented using JavaScript and Node.js to allow a user to output a Team Web page HTML file using command prompt input.  Input is validated as much as possible.  Where there is generic input, I test for the lenght of the input to confirm useful information is being added.  Where validating more easily formatted input, such as email addresses, and GitHub logins, Regular Expressions and APIs are used to validate the inputs.

For email addresses, regular expressions to test for email formatting make sure the inpute from the user adheres to standard formatting.  For GitHub users, the GitHub User Public API was used.  This ensures the data being entered is valid.


## Bonus Features

* Added an ```async``` prototype function for the ```Employee``` class to generate HTML cards
* Added validation for email input using regex


## Usage

This app is intended to be used to create a Team Web page for mangers.  Just run the ```index.js``` file and fill out the console questionairre.  Once your done entering your team members, the file is automatically generated.


## Learning Points 

I learned a lot about Promises and handling them in this project.  I was able to create an ```Promise.all()``` request for all the employee's entered in the form.  It's probably not a time saver for single team's worth of data, but it could be refactored slightly to accept an entire companies employee data and generate multiple web pages much easier.

I also learned how to test objects and code using ```Jest```.  I'm looking forward to incorporating these test in future projects.


## Author Info

### Brandon Haskell

* [LinkedIn](https://www.linkedin.com/in/BrandonDHaskell)
* [Github](https://github.com/bhaskell7901)


## License

MIT License