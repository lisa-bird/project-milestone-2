[Visit the website here](https://lisa-bird.github.io/project-milestone-2/)

The second milestone project calls for an interactive front-end website. The website will need to respond to the users actions, allowing users to actively engage with data and alter the way the website diplays the information to achieve their preferred goals.

# Owners Goal
To encourage fun and test the users knowledge and memory about the 90s era.

# Audience

The audience will be both male and female, aged 25 and over. Groups/ teams can battle it out, to be the winner with the most points. 

# UX
## The Strategy
Business goals include gaining traffic to the website. Ultimately, for the user to find the quiz enjoyable and fun. Whether that be to test their own knowledge of the 90's or to flare up their competitive streak with friends/family, to see who gets the highest score. 
To capture the attention of the audience the website has:
* Easy to use game play.
* Instructions of how to play.
* A score board, showing correct and incorrect scores.
* Bright consistent colours, with a 90's garish theme.
## The Scope
To achieve an interaction, allowing users to actively engage with the data displayed the website includes:
* Call to action 'Start' button, displays the multiple choice questions.
* Call to action 'Next' button, to move to the next question.
* Clear instructions.
* Message to user when answered correct/incorrect.
* Colour changing backgrounds when answered correct/incorrect.
* Time out alert.
* Game over alert.
* Incrementing score board.
## The Structure
The information displayed on the website is structured in a logical way. The landing page clearly shows the instructions of how to play the quiz and how the user can navigate through the quiz. The call to action 'Start' button is bold enough be easily seen. 
In gameplay the container holds the questions and answers, with a visible timer counting down 10 seconds. The 'next' button is easily seen to the right of the container. Towards the bottom of the container the score board is displayed, again keeping the colours consisitent throughout the quiz.
## The Skeleton
The entire quiz is a single page of HTML, making use of the display elemnet to change between the instructions and the content container.

[Wire Frames](https://www.figma.com/file/6v5uI3eQwyMpaT7VljDYJ1/Mobile-%2B-Tablet-%2B-Browser-Templates-(Community)?type=design&node-id=3%3A114&t=hXE7aUpXJi6QkzUR-1)

[Flow Chart](/assets/images/flow-chart1.jpg)

## The Surface
Keeping with the 90s vibe I wanted to use a bubble style font for the main heading but also making sure it was readable on the site. For the body of text I opted for a simple sans serif font 'Work Sans'.  

![Heading Font](/assets/images/font2.jpg)

![Body Font](/assets/images/font1.jpg)

 The colours are consistent throughout the quiz, taking inspiration from the 90s style background.  

![Colour Palette](/assets/images/colours.jpg)

# Features left to implement

* In this version I have used alert pop up boxes. These should be replaced with dialog modal boxes, to give an option to end game or restart game. Having the dialog boxes would make a better UX design. Time constraints have prevented me from developing these. I may add these in the future.

# Technologies Used
To help me create this website I used these technologies:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Boostrap v5.3](https://getbootstrap.com/)
- [W3Schools](https://www.w3schools.com/)
- [Google Fonts](https://fonts.google.com/)
- [Google Developer Tools](https://developer.chrome.com/docs/devtools/)
- [Github](https://github.com/)
- [W3C Markup Validation Service](https://validator.w3.org/)
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator)
- [JSlint](https://www.jslint.com/)

# Testing
Tests are used in web development to ensure the code works as expected.
### The principles of automated testing are
* Testing is performed using different automation tools, such as Jest.
* These tests are usually written by the programmer while the project is being developed, meaning errors will be picked up promptly
* It is often quicker to use. Hundreds of tests can be run against a project in a short amount of time.
* These tests are used for repetitive tasks.
* Tests can be written for very specific cases.
* Tests should improve quality.
* Automated tests help you understand the code.
### Manual testing:
* Testing is performed manually by humans.
* This form of testing is effective for evaluating the usability and intuitiveness of the UI. Testers can provide feedback based on their experience.
* This form of testing can take longer than automated.
* As with automated testing, manual testing can be used for very specific cases, where testers may need to improvise and stimulate user interactions.
* Manual testing allows testers to gather direct feedback from end users during the testing process, which can help improve the UX.

Testing should be deployed thoughout the entire project, rather than a one-time event. This will help ensure the quality, stability and usabilty of the web development.

# Manual testing for my project.
I have used manual testing, as my project has only two simple, event-driven functions.

As a result of testing, I decided to move the 'Next' button to the center of the container for desktop and laptop devices. With this change the wire frame does not match the end result.
Also deciding that the score-board is more visually appealing in the same row as the timer.

Both of these decisions improve the UX for the end-user.

![Further testing](/assets/images/further-testing.jpg)

# User Stories
## User - 1
First time visitor wants to understand what the purpose of the website is.
* Landing page shows a large heading '90s Trivia Quiz'  

![Landing page](/assets/images/user-1.jpg)

## User - 2
First time visitor wants to be able to read the instructions before pressing start.
* Landing page has the instructions visible and easy to read, see above image.

## User - 3 
First time visitor would like to know if their selected answer is right or wrong. 
* When selecting your answer the colour of the answer will turn green for correct or red for incorrect, along with a message.

![Answers](/assets/images/user-3.jpg)

## User - 4
First time visitor wnats to know how many points they have achieved during the quiz.
* A score board is displayed underneath the answers, incrementing each time for a correct or incorrect answer, see above image.

## User - 5
First time visitor wants to know what happens if they do not answer within the time frame of 10 seconds.
* A pop-up alert will be displayed when out of time.

![Time out](/assets/images/user-5.jpg)

# Validation
CSS 
![CSS](/assets/images/css-valid.jpg)
 
HTML
![HTML](/assets/images/html-valid.jpg)
JSlint
![JSlint](/assets/images/jslint-a.jpg)

![JSlint](/assets/images/jslint-b.jpg)

# Deployment

This website is deployed using Github. This can be done by  following these stages.
1.  On GitHub, navigate to your site's repository.
2.  Select the 'milestone project 2' repository.
3.  In the menu along the top of the repository, click 'Settings'
4.  In the menu to the left, half way down, select 'Pages'
5.  Under 'Build and deployment', under the 'Source', select Deploy from a branch.
6.  Under the 'Branch' section, select Branch drop-down menu and select main.
7.  Click ***Save***.

![Deployment](/assets/images/deploy1.jpg)
