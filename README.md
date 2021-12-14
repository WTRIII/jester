# JESTER!

### This is a social app in which users are given a task to complete in a certain period of time. Users sign up by creating an account. To complete the challenge, the take a pic of the task and upload it to the app. Users can see all of the submissions for a task, and can see their own submissions in their profile page. 

## Check out the dev team on GitHub!

[Brian Albright](https://github.com/bmalbright)

[Mitchell Robbins](https://github.com/Mitchell-est-Robbins)

[James Garinger](https://github.com/originator1)

[William Renfroe](https://github.com/WTRIII)

## Deployment

[JESTER is deployed here](https://jesterapp.herokuapp.com/)

## Landing Page
### When you bring up the site, you are able to click on Play in the upper right hand corner and are prompted to either login or, if you are a new user, can create an account. 
![Landing Page](/screenshots/landingPage.png)



## Login / Sign Up
![Login](/screenshots/login.png)

## Main Page - Current Task
### When you have successfully logged in, you are taken to the current task page. At the top of the page, navigation tabs appear that will take you to the different pages, or allow you to logout. On the current task page, you will see a brief description of the current task, and all the submissions added so far. There is also a form that allows you to submit a pic for the current task. 
![Current Task](/screenshots/current.png)

## Submitting a pic
### As of right now, to submit a pic, you need to submit a link to that pic. If you were trying this app by taking a pic from the web, you would need to right click on the pic, select 'Copy Image Address' from the options, and paste that into the form. A future development item is directly loading the pic into the site so that you could take a pic with your phone and immediately upload the pic. 

## Profile Page
## When you click on the profile page, you can see the submission you added to the current task. Looking at this page, you'll notice two things. One is that it's a mobile view. The app was coded for mobile, and I took the previous screenshot in desktop view because of all the pics. If you looked at that page on a mobile device, it would look like this, with the pics viewable as you scrolled down. The navigation menu also collapses in when viewed on mobile. The second thing you'll notice on this page is that it has a delete button. Users can delete pics only from their own account, not the submissions of others. 
![Profile](/screenshots/profile.png)

## How to Play Page
### This page is just a simple explanation of how to play the task. We wanted to keep this page simple, and would have a more detailed policies agreements available when you sign up and buried in a footer. One thing in keeping the 'how to play' explanation simple is we want people to use their imagination when playing. If we tell you to take a pic with a stature, we don't define what a statue is. Maybe you do something fun with a souvenir replica of the statue of liberty. 
![How to Play](/screenshots/rules.png)

## This app was built utilizing
* React 
* MongoDB
* Mongoose
* GraphQL
* Concurrently
* Apollo Client
* React Bootstrap
* JWT
* Express
* Bcrypt
* nodemon


## Future Development

### Jester is a work in progress! We have exciting features we want to implement in the future including:
* Ability to upload pics directly to the app vs uploading a link to the app. 
* Like button for users to vote for their favorite pics/
* Viewing past tasks and their associated jests - we've had a conversation about how long to keep posts and if they should disappear after a certain length of time like some other social media apps. That pic of you in the ugly christmas sweater with a misplaced carrot doesn't come back to haunt you later. 
* Admin profile / limited moderation so that admins can delete a submission of necessary. 
Middleware for content filters to disallow submissions with either inappropriate pics or  language. 
* Easier task roll-out
* Cross platform sharing, so users could link their profiles to profiles they have on apps like Twitter, Facebook, Snapchat, etc. 



## Contributions / feedback

### If you would like to contribute an idea to the app or have some user feedback, please feel free to contact us through our GitHub profiles located at the top of this readme document. The original repository for this app was created by William Renfroe and he may be reached at [William Renfroe](https://github.com/WTRIII)




